function setTime() {
  
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();

  if (minutes.toString().length < 2){
    minutes = "0"+minutes;
  };
  $(".hours").html(hours);
  $(".minutes").html(minutes);
}

let week = $(".days").children();
week.removeClass("active");


let day = new Date().getDay();

$(week[day-1]).addClass("active");

setInterval(setTime, 1000);
