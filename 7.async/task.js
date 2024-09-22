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

    const currentFormattedTime = this.getCurrentFormattedTime.bind(this);

    function createInterval() {
      this.alarmCollection.forEach(function (item) {
        if (item.time === currentFormattedTime() && item.canCall) {
          item.canCall = false;
          item.callback();
        }
      });
    }

    const bindedCreateInterval = createInterval.bind(this);
    this.intervalId = setInterval(bindedCreateInterval, 1000);
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