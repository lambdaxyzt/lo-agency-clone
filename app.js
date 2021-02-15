let cursor = document.querySelector('.cursor');
document.addEventListener('mousemove',animateProp);
function animateProp(e) {
    anime({
      targets: cursor,
      left: e.clientX-15,
      top: e.clientY-15,
      duration:50,
      easing:'linear'
    });
  }