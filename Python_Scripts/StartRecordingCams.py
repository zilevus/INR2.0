#Need python 3.5, cv2 package (pip install opencv)

import cv2, requests, datetime, sys, os
from tkinter import *
from multiprocessing import Process

def getFrameTimeStamp(cam):
    http_link = 'http://' + cam['ip'][:-4] +'/cgi-bin/global.cgi?action=getCurrentTime'
    #res = requests.get(http_link)
    payload = {'Username' : cam['id'], 'Password' : cam['pass']}
    res = requests.post(http_link, data=payload)
    
    return res.text

#Return a list of try no and Exercise no like this: [try_no, exercise no]
def getTry_ExerciseNo():
    videos_list = []
    E_no = 1
    T_no = 1

    files = [f for f in os.listdir('.') if os.path.isfile(f)]
    for f in files:
        if ".avi" in str(f):
            videos_list.append(str(f))

    if len(videos_list) == 0:
        return [str(1), "0" + str(1)]
    
    for f in videos_list:
        if "Exercise0" in f:
            if "Try" in f:
                n = int(f[f.find("Try") + 3])
                if T_no < n: 
                    T_no = n
            n = int(f[f.find("Exercise") + 8:f.find("Exercise") + 9])
            if E_no < n: 
                E_no = n

    if T_no >= 4:
        T_no = 1
        E_no +=1
    else:
        T_no += 1    

    if E_no <= 9:
        return [str(T_no), "0" + str(E_no)]
    else:
        return [str(T_no), str(E_no)]
    
def StreamCams(cam1, cam2):
    cam1_rtsp_link = "rtsp://" + cam1['id'] + ':' + cam1['pass'] + '@' + cam1['ip'] + "/cam/realmonitor?channel=1&subtype=0"
    cam2_rtsp_link = "rtsp://" + cam2['id'] + ':' + cam2['pass'] + '@' + cam2['ip'] + "/cam/realmonitor?channel=1&subtype=0"

    cap1 = cv2.VideoCapture(cam1_rtsp_link)
    cap2 = cv2.VideoCapture(cam2_rtsp_link)

    # Check if camera1 opened successfully
    if (cap1.isOpened() == False): 
        print("Unable to read camera 1 feed")
    
    # Check if camera2 opened successfully
    if (cap2.isOpened() == False): 
        print("Unable to read camera 2 feed")
    
    # Default resolutions of the frame are obtained.The default resolutions are system dependent.
    # We convert the resolutions from float to integer.
    cam1_frame_width = int(cap1.get(3)) # 1920 pixels
    cam1_frame_height = int(cap1.get(4))  # 1080 pixels
    cam2_frame_width = int(cap2.get(3))  # 1920 pixels
    cam2_frame_height = int(cap2.get(4))  # 1080 pixels

    TE_no = getTry_ExerciseNo()
    exercise_no = TE_no[1]
    try_no = TE_no[0]

    # Define the codec and create VideoWriter object.The output is stored in the same folder as this script
    out1 = cv2.VideoWriter('Exercise'+ exercise_no + 'Try'+ try_no + 'Cam1.avi', cv2.VideoWriter_fourcc('M','J','P','G'), 30, (cam1_frame_width,cam1_frame_height))
    out2 = cv2.VideoWriter('Exercise'+ exercise_no + 'Try'+ try_no + 'Cam2.avi', cv2.VideoWriter_fourcc('M','J','P','G'), 30, (cam2_frame_width,cam2_frame_height))
    f1 = open('out_timestamp1.csv', "w") # opening it once to erase the file 
    f2 = open('out_timestamp2.csv' ,"w") # opening it once to erase the file
    
    with open('ActivityTimeStamps.csv',"a") as f3:#Creating a csv file where Activity Started and Activity Stopped time data will be written
        f3.write("Activity Started:," + str(datetime.datetime.now())[:-4] + '\n')
    
    while(1):
        ret1, frame1 = cap1.read()
        ret2, frame2 = cap2.read()
        
        # Write the frame into the video file
        if ret1 and ret2:
            out1.write(frame1)
            out2.write(frame2)
            
            with open('out_timestamp1.csv', "a") as f1:
                f1.write(str(datetime.datetime.now())[:-4] + '\n')
            with open('out_timestamp2.csv', "a") as f2:
                f2.write(str(datetime.datetime.now())[:-4] + '\n')
                
            #cv2.imshow('VIDEO FROM CAM1', frame1)
            #cv2.imshow('VIDEO FROM CAM2', frame2)
            
                
        # Press Q on keyboard to stop recording
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    # When everything done, release the video capture and video write objects
    cap1.release()
    out1.release()
    cap2.release()
    out2.release()
    
    # Closes all the frames
    cv2.destroyAllWindows()

def main():
    #to know the ip address go to the computer connected to the router and type routerlogin.net and check connecte devices 
    ## USERNAME : admin, PASSWORD: inr
    cam1 = {'id' : 'admin', 'pass' : 'inrcamera1', 'ip' : '192.168.1.2:554'}
    cam2 = {'id' : 'admin', 'pass' : 'inrcamera2', 'ip' : '192.168.1.3:554'}

    StreamCams(cam1, cam2)
    
    # Created a tkinter GUI app for debugging 
    # window = Tk()
    # window.title("Test app")
    # window.mainloop()
    
if __name__ == '__main__':
    main()
    #print(getTry_ExerciseNo())
    
