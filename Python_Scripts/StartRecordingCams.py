#Need python 3.5, cv2 package (pip install opencv)

import cv2, requests, datetime, sys
from tkinter import *

def getFrameTimeStamp(cam):
    http_link = 'http://' + cam['ip'][:-4] +'/cgi-bin/global.cgi?action=getCurrentTime'
    #res = requests.get(http_link)
    payload = {'Username' : cam['id'], 'Password' : cam['pass']}
    res = requests.post(http_link, data=payload)
    
    return res.text#[:10]


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
    cam1_frame_width = int(cap1.get(3))
    cam1_frame_height = int(cap1.get(4))
    cam2_frame_width = int(cap2.get(3))
    cam2_frame_height = int(cap2.get(4))

    # Define the codec and create VideoWriter object.The output is stored in the same folder as this script
    out1 = cv2.VideoWriter('outputCam1.avi', cv2.VideoWriter_fourcc('M','J','P','G'), 30, (cam1_frame_width,cam1_frame_height))
    out2 = cv2.VideoWriter('outputCam2.avi', cv2.VideoWriter_fourcc('M','J','P','G'), 30, (cam2_frame_width,cam2_frame_height))
    f1 = open('out_timestamp1.csv', "w") # opening it once to erase the file 
    f2 = open('out_timestamp2.csv' ,"w") # opening it once to erase the file
    
    with open('ActivityTimeStamps.csv',"w") as f3:#Creating a csv file where Activity Started and Activity Stopped time data will be written
        f3.write("Cameras Started:," + str(datetime.datetime.now()) + '\n')
    
    while(1):
        ret1, frame1 = cap1.read()
        ret2, frame2 = cap2.read()
        
        # Write the frame into the video file
        if ret1 and ret2:
            out1.write(frame1)
            out2.write(frame2)
            #cv2.imshow('VIDEO FROM CAM1', frame1)
            #cv2.imshow('VIDEO FROM CAM2', frame2)
            with open('out_timestamp1.csv', "a") as f1:
                f1.write(str(datetime.datetime.now()) + '\n')
            with open('out_timestamp2.csv', "a") as f2:
                f2.write(str(datetime.datetime.now()) + '\n')

        #print('Cam1 Frame Timestamp:' + getFrameTimeStamp(cam1))
        #print('Cam2 Frame Timestamp:' + getFrameTimeStamp(cam2))

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
