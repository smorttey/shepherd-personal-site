var myImage = document.querySelector('#firstimg');
var myWorldSmile = document.querySelector('#worldsmile')
var smileyImg = document.querySelector('#smiley');
var introHi = document.querySelector('#introhi')

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
introHi.onclick = function() {
  introHi.style.fontSize = '72px';
}