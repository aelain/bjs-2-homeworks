class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    if (this.alarmCollection.find(item => item.time === time)) {
      console.warn('Уже присутствует звонок на это же время');
    }

    this.alarmCollection.push({
      callback: callback,
      time: time,
      canCall: true
    });
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
  }

  getCurrentFormattedTime() {
    const today = new Date();
    const now = [today.getHours(), today.getMinutes()].map(count => count < 10 ? '0' + count : count).join(':');
    return now;
  }

  start() {
    if (this.intervalId) {
      return;
    }

    const intervalId = setInterval(() => {
      this.alarmCollection.forEach(item => {
        if (item.time === this.getCurrentFormattedTime() && item.canCall) {
          item.canCall = false;
          item.callback();
        }
      });
    }, 1000)
    
    this.intervalId = intervalId;
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(item => item.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}