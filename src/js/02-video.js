import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function(data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds)
  );
};

player.on('timeupdate', throttle(onPlay, 1000));

const getSecFromStorage = () => {
  return JSON.parse(localStorage.getItem('videoplayer-current-time'));
};
const saveTime = localStorage.getItem('videoplayer-current-time');
if (saveTime) {
  player.setCurrentTime(getSecFromStorage())
}