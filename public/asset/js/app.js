window.onload = () => {
  onResize();
}


let cursor = document.querySelector('.cursor');
document.addEventListener('mousemove',animateProp);
function animateProp(e) {
    anime({
      targets: cursor,
      left: e.pageX-15,
      top: e.pageY-15,
      duration:0,
      easing:'linear'
    });
  }




window.addEventListener('resize',onResize);
let listProfile = document.querySelectorAll('.meet-alien .profiles  .profile-picture');
let counter1 , sum1 , width1 ;

function onResize() {

  counter1 = 0;
  for (element of listProfile) {
    width1 = element.getBoundingClientRect().width; 
    element.style.height = `${width1}px`;
    sum1 =  (50 * Math.floor(counter1%3)); 
    element.style.transform=`translateY(${sum1}px)`
    counter1++;
  }
}




// function onResize() {
//   for (element of listProfile) {
//     width1 = element.style.height; 
//     width1 = `${element.getBoundingClientRect().width}px`;
//     sum1 =  10 * counter1 + ( width1 * counter1%3 )  
//     element.transform=`translate(${sum1}px)`
//   }
// }