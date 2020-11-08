function relogio() {
  var data=new Date();
  var hor=data.getHours();
  var min=data.getMinutes();
  var seg=data.getSeconds();

  document.getElementById('rel1').innerHTML=hor;
  document.getElementById('rel2').innerHTML=min;
  document.getElementById('rel3').innerHTML=seg;
}

var tempo=setInterval(relogio,1000);
