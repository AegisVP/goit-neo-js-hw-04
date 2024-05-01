const profile = {
  username: 'Jacob',
  playtime: 300,
  changeUsername(newName) {
    this.username = newName;
  },
  updatePlayTime(hours) {
    this.playtime += hours;
  },
  getInfo() {
    return `${this.username} has active ${this.playtime} hours!`;
  },
};

const testTask3 = () => {
  document.getElementById('result').innerHTML = '';

  const t1 = profile.getInfo(); // "Jacob has 300 active hours!"
  console.log(t1);
  logWindow.log(t1);

  profile.changeUsername('Marco');
  const t2 = profile.getInfo(); // "Marco has 300 active hours!"
  console.log(t2);
  logWindow.log(t2);

  profile.updatePlayTime(20);
  const t3 = profile.getInfo(); // "Marco has 320 active hours!"
  console.log(t3);
  logWindow.log(t3);
};
