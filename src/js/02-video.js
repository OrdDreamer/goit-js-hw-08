import Player from "@vimeo/player";
import throttle from 'lodash.throttle';

const CURRENT_TIME_STORAGE_KEY = "videoplayer-current-time";

function getStartTime() {
  const savedPreviousTime = Number(localStorage.getItem(CURRENT_TIME_STORAGE_KEY));
  return Number.isNaN(savedPreviousTime) ? 0 : savedPreviousTime;
}

function setCurrentTime({ seconds }) {
  localStorage.setItem(
    CURRENT_TIME_STORAGE_KEY,
    seconds
  );
}

const player = new Player(document.querySelector('iframe'));

player.setCurrentTime(getStartTime());

player.on('timeupdate', throttle(setCurrentTime, 1000));

