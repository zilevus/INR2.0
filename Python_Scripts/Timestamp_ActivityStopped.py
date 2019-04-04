import os, signal, datetime
from multiprocessing import Processs

def ActivityStopped_writeTimestamp():
    with open('ActivityTimeStamps.csv',"a") as f:
        f.write('Activity Stopped:,' + str(datetime.datetime.now()) + '\n')

def check_kill_process(pstring):
    for line in os.popen("ps ax | grep " + pstring + " | grep -v grep"):
        fields = line.split()
        pid = fields[0]
        os.kill(int(pid), signal.SIGKILL)

def stopStreaming():
    check_kill_process('/Python_Scripts/StartRecordingCams.py')

if __name__ == '__main__':
    #stopStreaming()
    ActivityStopped_writeTimestamp()
