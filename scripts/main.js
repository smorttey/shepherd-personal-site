var myImage = document.querySelector('#firstimg');
var myWorldSmile = document.querySelector('#worldsmile')
var smileyImg = document.querySelector('#smiley');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/shepherd-mest.png') {
      myImage.setAttribute('src','images/shepherd-yaw-morttey.jpg');
    } else {
      myImage.setAttribute('src','images/shepherd-mest.png');
    }
}
var myButton = document.querySelector('#firstbutton');
myButton.onmouseover = function(){
    var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/shepherd-mest.png') {
      myImage.setAttribute('src','images/shepherd-yaw-morttey.jpg');
    } else {
      myImage.setAttribute('src','images/shepherd-mest.png');
    }
}
myButton.onmouseout = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/shepherd-mest.png') {
      myImage.setAttribute('src','images/shepherd-yaw-morttey.jpg');
    } else {
      myImage.setAttribute('src','images/shepherd-mest.png');
    }
}
myWorldSmile.ondblclick = function(){
	myWorldSmile.style.display = 'none';
	smileyImg.style.display = 'block';
}