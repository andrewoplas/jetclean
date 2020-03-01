Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {
    s = '0' + s;
  }
  return s;
};

function startTimer(hours, minutes, seconds, display) {
  let totalSeconds = hours * 3600;
  totalSeconds += minutes * 60;
  totalSeconds += seconds;
  setInterval(function() {
    totalSeconds--;

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    $('#countdown').text(`${hours.pad(2)}:${minutes.pad(2)}:${seconds.pad(2)}`);
  }, 1000);
}

window.onload = function() {
  startTimer(2, 11, 41, $('.order-within .time'));
};

$(function() {
  // Override navbar sticky
  const overridenSticky = xs ? 60 : 90;
  const onOverrideScroll = function() {
    if (window.pageYOffset >= overridenSticky) {
      $('#sticky-navbar').addClass('active');
    } else {
      $('#sticky-navbar').removeClass('active');
    }
  };
  window.onscroll = onOverrideScroll;
  onOverrideScroll();
});
