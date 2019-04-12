import datetime, sys

def StudyStarted_writeTimestamp():
    with open('ActivityTimeStamps.csv',"w") as f:
        f.write('Study Started:,' + str(datetime.datetime.now())[:-4] + '\n')

if __name__ == '__main__':
    StudyStarted_writeTimestamp()