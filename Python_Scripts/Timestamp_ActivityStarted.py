import datetime, sys

def ActivityStarted_writeTimestamp():
    with open('ActivityTimeStamps.csv',"a") as f:
        f.write('Activity Started:,' + str(datetime.datetime.now()) + '\n')

if __name__ == '__main__':
    ActivityStarted_writeTimestamp()