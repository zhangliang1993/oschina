window.onload = startTime;
function startTime()
{
	var today=new Date()

	var y=today.getFullYear()
	var month=today.getMonth()+1;
	var d=today.getDate()

	var h=today.getHours()
	var m=today.getMinutes()
	var s=today.getSeconds()
	// add a zero in front of numbers<10
	m=checkTime(m)
	s=checkTime(s)
	document.getElementById("txt1").innerHTML=y+"年"+month+"月"+d+"日"
	document.getElementById('txt2').innerHTML=h+":"+m+":"+s
	setTimeout('startTime()')
}
function checkTime(i)
{
	if (i<10) 
	  {i="0" + i}
	return i
}