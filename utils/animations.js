import { TimelineLite, TimelineMax } from 'gsap';

function fadeIn(el, done, delay = '+=0') {
  const tl = new TimelineLite({ onComplete: done });

  tl.set(el, { opacity: 0, transition: 'none' })
    .to(el, 0.3, { opacity: 1, clearProps: 'opacity, transition' }, delay);
}

function fadeOut(el, done, delay = '+=0') {
  const tl = new TimelineLite({ onComplete: done });

  tl.set(el, { opacity: 1, transition: 'none' })
    .to(el, 0.3, { opacity: 0 }, delay);
}

function fadeInUp(el, done, delay = '+=0') {
  const tl = new TimelineLite({ onComplete: done });

  tl.set(el, { opacity: 0, y: 40, transition: 'none' })
    .to(el, 0.6, { opacity: 1, y: 0, clearProps: 'opacity, y, transition' }, delay);
}

function fadeInDown(el, done, delay = '+=0') {
  const tl = new TimelineLite({ onComplete: done });

  tl.set(el, { opacity: 0, y: -20, transition: 'none' })
    .to(el, 0.3, { opacity: 1, y: 0, clearProps: 'opacity, y, transition' }, delay);
}

function fadeOutUp(el, done, delay = '+=0') {
  const tl = new TimelineLite({ onComplete: done });

  tl.set(el, { opacity: 1, y: 0, transition: 'none' })
    .to(el, 0.3, { opacity: 0, y: -20 }, delay);
}

function fadeOutDown(el, done, delay = '+=0') {
  const tl = new TimelineLite({ onComplete: done });

  tl.set(el, { opacity: 1, y: 0, transition: 'none' })
    .to(el, 0.6, { opacity: 0, y: 40 }, delay);
}

function scaleIn(el, done, delay = '+=0') {
  const tl = new TimelineLite({ onComplete: done });

  tl.set(el, { scale: 0, transition: 'none' })
    .to(el, 0.3, { scale: 1, clearProps: 'scale, transition' }, delay);
}

function scaleOut(el, done, delay = '+=0') {
  const tl = new TimelineLite({ onComplete: done });

  tl.set(el, { scale: 1, transition: 'none' })
    .to(el, 0.3, { scale: 0 }, delay);
}

function slideIn(el, done, delay = '+=0') {
  const tl = new TimelineLite({ onComplete: done });

  tl.set(el, { height: 0, overflow: 'hidden', transition: 'none' })
    .to(el, 0.3, { height: el.firstChild.offsetHeight, clearProps: 'overflow, height, transition' }, delay);
}

function slideOut(el, done, delay = '+=0') {
  const tl = new TimelineLite({ onComplete: done });

  tl.set(el, { height: el.offsetHeight, transition: 'none', overflow: 'hidden' })
    .to(el, 0.3, { height: 0 }, delay);
}

function chunksIn(el, done, selector = '.a-text-chunk') {
  const tl = new TimelineMax({ onComplete: done });

  const words = el.querySelectorAll(selector);

  tl.staggerFrom(words, 0.7, {
    opacity: 0,
    y: '200%',
    // x: '-20em',
    clearProps: 'x, y, opacity',
  }, 0.04);
}

function chunksOut(el, done, selector = '.a-text-chunk') {
  const tl = new TimelineMax({ onComplete: done });

  const words = el.querySelectorAll(selector);

  tl.staggerTo(words, 0.7, {
    opacity: 0,
    y: '-200%',
    // x: '20em',
  }, 0.04);
}

function angleIn(el, done, angleFrom = 'top-left') {
  const tl = new TimelineMax({ onComplete: done });
  const x = ['top-left', 'bottom-left'].includes(angleFrom)
    ? '-100vw'
    : '100vw';
  const y = ['top-left', 'top-right'].includes(angleFrom)
    ? '-100vh'
    : '100vh';

  tl.from(el, 0.8, {
    opacity: 0,
    x,
    y,
    clearProps: 'x, y, opacity',
  });
}

function angleOut(el, done, angleTo = 'top-left') {
  const tl = new TimelineMax({ onComplete: done });

  const y = ['top-left', 'top-right'].includes(angleTo)
    ? '-100vh'
    : '100vh';

  const x = ['top-left', 'bottom-left'].includes(angleTo)
    ? '-100vw'
    : '100vw';

  tl.to(el, 0.8, {
    opacity: 0,
    x,
    y,
    clearProps: 'x, y, opacity',
  });
}

export {
  angleIn,
  angleOut,
  chunksIn,
  chunksOut,
  fadeIn,
  fadeOut,
  fadeInUp,
  fadeInDown,
  fadeOutUp,
  fadeOutDown,
  scaleIn,
  scaleOut,
  slideIn,
  slideOut,
};
