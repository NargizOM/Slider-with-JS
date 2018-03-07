var left_btn=document.querySelector(".left")
var right_btn=document.querySelector(".right")
var slideImg=document.querySelector(".slideItems img")
count=1;
var imgs=["images/norway.jpg","images/fjords.jpg","images/picture.jpg","images/vigelandspark.jpg"]

left_btn.addEventListener("click",function(){

	slideImg.setAttribute("src",imgs[count])
	count--;
	if(count<0){
		count=imgs.length-1;
	}
	console.log(count)
})

right_btn.addEventListener("click",function(){
	slideImg.setAttribute("src",imgs[count])
	count++;
	if(count>=imgs.length){
		count=0;
	}
})