const banner=document.getElementById("banner");
const rBt=document.getElementById("right");
const lBt=document.getElementById("left");
const bannerPics=["image/elegantLib.jpg","image/banner2.jpg","image/banner3.jpg"];
let currentIndex=0;
let slide=document.getElementById("slide");
function changeBannerRight() {
    currentIndex++;
    if(currentIndex == bannerPics.length){
        currentIndex=0
    }
    slide.style.transform = "translateX(" + -(currentIndex* 100) + "%)";
    
    
}
function changeBannerLeft(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex=bannerPics.length-1;

    }
   
    slide.style.transform = "translateX(" + -(currentIndex* 100) + "%)";

}
rBt.addEventListener("click",changeBannerRight);
lBt.addEventListener("click",changeBannerLeft);