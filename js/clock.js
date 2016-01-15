function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
function initializeClock(id, endtime){
  var clock = document.getElementById(id);
  var timeinterval = setInterval(function(){
    var t = getTimeRemaining(endtime);
    clock.innerHTML =  '<center>' +	t.days + ' Days, ' +
                       t.hours + ' Hours, ' +
                       t.minutes + ' Minutes, and ' +
                       ('0' + t.seconds).slice(-2) + ' Seconds! :^) </center>';
    if(t.total<=0){
      clearInterval(timeinterval);
    }
  },1000);
}
date = new Date();
if (date.getMonth() + 1 == 12){
	if (date.getDate() == 25){
		// its Christmas
		var deadline = date;
	}
	if (date.getDate() > 25){
		var deadline = ( (date.getFullYear() + 1)+'-12-25');
	}
	
}
else{
	var deadline = ( (date.getFullYear())+'-12-25')
}


initializeClock('clockdiv', deadline);