window.onload = ()=> main();
var carouselOffset = 0;
var width, carouselWidth;
const carouselItems = ['rent','shop_front','artists','event'];
const carouselText = ['Rent a Room','Shop','Meet the Artists','Events'];
var selected = Math.trunc(carouselItems.length/2-0.5);
var carouselItemWidth;
var initialSelected = selected;
console.log(selected);
function main() {
  const c = setTimeout(() => intro(),4000);
  console.log('cha');
}

function intro() {

  width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  console.log(width);
  window.onresize = () => {onResize()};
  let div = document.querySelector('#title');
  let load = document.querySelector('.fa-arrow-rotate-right');
  load.remove();
  div.style.top="10%";

  let carousel = document.querySelector('#carousel');
  var carouselObj;
  for(let i=0; i<carouselItems.length; i++) {
    let tempDiv = document.createElement('DIV');
    tempDiv.id = carouselItems[i];
    tempDiv.classList.add("carouselDiv","carouselDivs");
    let tempImg = document.createElement('IMG');
    //tempImg.style.width = "20vw";
    tempImg.style.height = "30vh";
    tempImg.classList.add('carouselImage');
    tempImg.id=carouselItems[i] + '_img';
    tempImg.src='imgs/'+carouselItems[i]+'.png';
    let tempText = document.createElement('DIV');
    tempText.id = carouselItems[i]+'_text';
    tempText.classList = 'Text';
    tempText.innerText = carouselText[i];
    tempDiv.appendChild(tempImg);
    tempDiv.appendChild(tempText);
    carousel.appendChild(tempDiv);
    if(i+1==carouselItems.length){
      let tmps = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)*0.3;
      let temps = carouselItems.length*tmps;
      console.log(initialSelected,width, tmps);
      let carouselCenter = width/2 - ((initialSelected*tmps)+(tmps/2));
      console.log(carouselCenter);
      document.querySelector('#carousel').style.left = carouselCenter+'px';
/*
      carouselWidth = document.querySelector('#carousel').clientWidth;
      console.log(carouselWidth);
      document.querySelector('#carousel').style.left = carouselCenter+"px";*/
      console.log(carousel,carousel.scrollWidth,carousel.childNodes[1].childNodes[1].offsetHeight);

    }
  }
  carouselItemWidth = carouselWidth/carouselItems.length;
  document.querySelector(`#${carouselItems[selected]}`).style.transform = 'scale(150%)';
  carousel.style.opacity="100%";
  // var offsets = document.getElementById('contact').getBoundingClientRect();
  // let t = document.createElement('DIV');
  // t.innerText = 'Follow us on socials';
  // t.id="socialsText";
  // t.style.visibility = 'hidden';
  // t.style.position='absolute';
  // t.style.top = offsets.y+"px";
  // t.style.left = offsets.x+"px";
  //document.getElementById('bodys').appendChild(t);
  document.querySelector('#controlCarousel').style.opacity="100%";
  document.querySelector('#bottomIcons').style.opacity="100%";
  document.querySelector('#carouselRight').addEventListener('click', moveRight);
  document.querySelector('#carouselLeft').addEventListener('click', moveLeft);

}

function onResize() {
  width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  carouselWidth = document.querySelector('#carousel').scrollWidth;
  console.log(carouselWidth);
  console.log(document.querySelector('#carousel'));
  carouselItemWidth = carouselWidth/carouselItems.length;
  let carouselCenter = width/2 - ((initialSelected*carouselItemWidth)+carouselItemWidth/2);
  document.querySelector('#carousel').style.left = carouselCenter+"px";
}
function moveLeft() {
  if(selected-1 >= 0){
    let carousel = document.querySelector('#carousel');
    document.querySelector(`#${carouselItems[selected]}`).style.transform = 'scale(100%)';
    document.querySelector(`#${carouselItems[selected]}`).style.zIndex = '0';
    selected--;
    document.querySelector(`#${carouselItems[selected]}`).style.transform = 'scale(150%)';
    document.querySelector(`#${carouselItems[selected]}`).style.zIndex = '1';
  let offset = document.querySelector('#carousel').childNodes[1].offsetWidth;
  console.log(offset.toString());
  carouselOffset+= offset;
  carousel.style.transform = 'translateX('+carouselOffset+'px)';
}
}
function moveRight() {
  if(selected+1 <= carouselItems.length-1) {
    let carousel = document.querySelector('#carousel');
    document.querySelector(`#${carouselItems[selected]}`).style.transform = 'scale(100%)';
    document.querySelector(`#${carouselItems[selected]}`).style.zIndex = '0';
    selected++;
    document.querySelector(`#${carouselItems[selected]}`).style.transform = 'scale(150%)';
    document.querySelector(`#${carouselItems[selected]}`).style.zIndex = '1';
  let offset = document.querySelector('#carousel').childNodes[1].offsetWidth;
  console.log(offset.toString());
  carouselOffset-= offset;
  carousel.style.transform = 'translateX('+carouselOffset+'px)';
}
}
