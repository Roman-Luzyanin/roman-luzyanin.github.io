const player = document.querySelector('.player');
const video = document.querySelector('.video');
const playBtn = document.querySelector('.playBtn');
const skipBtns = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('input[type="range"]');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progressBar');
const time = document.querySelector('.time');
const fullscreen = document.querySelector('.fullscreen');

function toggle() {
  if (video.paused) {
    video.play();
    playBtn.textContent = '\u2759 \u2759';
  } else {
    video.pause();
    playBtn.textContent = '\u25BA';
  }

  // const method = video.paused ? 'play' : 'pause';
  // video[method]();
}

function skip() {
  video.currentTime += Number(this.dataset.skip);
}

function handleRange() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = video.currentTime / video.duration * 100;
  progress.style.width = `${percent}%`;

  const timer = `${Math.round(video.currentTime)}`;
  if (timer < 60) {
    time.textContent = `${timer}s`;
  } else if (timer >= 60) {
    time.textContent = `${Math.floor(timer / 60)}min ${timer % 60}s`;
  };
  // else if (timer >= 3600) {
  //   let hours;
  //   time.textContent = `${Math.floor(timer / 3600)}hour ${(timer % 3600) / 60}min`;
  // };
}

function scrub(e) {
  video.currentTime = e.offsetX * video.duration / progressBar.offsetWidth;
}

video.addEventListener('click', toggle);
playBtn.addEventListener('click', toggle);
skipBtns.forEach(skipBtn => skipBtn.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('mousemove', handleRange));
ranges.forEach(range => range.addEventListener('change', handleRange));
video.addEventListener('timeupdate', handleProgress);

let mousedown = false;
progressBar.addEventListener('click', scrub);
progressBar.addEventListener('mousemove', (e) => mousedown && scrub(e));
progressBar.addEventListener('mousedown', () => mousedown = true);
progressBar.addEventListener('mouseup', () => mousedown = false);

fullscreen.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    player.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

