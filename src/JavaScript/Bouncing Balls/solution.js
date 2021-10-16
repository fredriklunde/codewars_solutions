function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }
  var timesPassedWindow = 1;
  var hightAfterBounce = h * bounce;
  while (hightAfterBounce > window) {
    timesPassedWindow = timesPassedWindow + 2;
    hightAfterBounce = hightAfterBounce * bounce;
  }
  return timesPassedWindow;
}

module.exports = bouncingBall;
