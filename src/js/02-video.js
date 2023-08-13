import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', throttle(timeUpdate, 1000));
  
function timeUpdate(data) {
   localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds))
}

player.setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')));

