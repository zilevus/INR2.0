import os, signal, datetime, time

def ActivityStopped_writeTimestamp():
    with open('ActivityTimeStamps.csv',"a") as f:
        f.write('Activity Stopped:,' + str(datetime.datetime.now())[:-4] + '\n')

def check_kill_process(pstring):
    for line in os.popen("ps ax | grep " + pstring + " | grep -v grep"): 
        fields = line.split()
        pid = fields[0]
        os.kill(int(pid), signal.SIGKILL)

def stopStreaming():
    ##For mac # check_kill_process('/Python_Scripts/StartRecordingCams.py')
    time.sleep(1)
    os.system("taskkill /IM python.exe /f")##For Windows # taskkill /IM python.exe /f

if __name__ == '__main__':
    ActivityStopped_writeTimestamp()
    stopStreaming()
