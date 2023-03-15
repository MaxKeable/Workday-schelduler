var today = dayjs()
var currentTime = dayjs().format('HH');
var displayDayTime = $('#currentDay');
var currentDateDayTime = dayjs().format('dddd, MMMM D, YYYY');
var hour9 = $("#hour-9");
var hour10 = $("#hour-10");
var hour11 = $("#hour-11");
var hour12 = $("#hour-12");
var hour1 = $("#hour-1");
var hour2 = $("#hour-2");
var hour3 = $("#hour-3");
var hour4 = $("#hour-4");
var hour5 = $("#hour-5");
var saveBtn = $(".saveBtn");
var content9 = $('.content-9');
var hour9text = $('#hour9text');

displayDayTime.text(currentDateDayTime);

// if hour is clicked then hide other hours and focus on the one clicked 
if (currentTime === '09') {
  hour9.addClass("present");
} else if (currentTime > '09') {
  hour9.addClass("past");
} else if (currentTime < '09') {
  hour9.addClass("future");
};

if (currentTime === '10') {
    hour10.addClass("present");
} else if (currentTime > '10') {
    hour10.addClass("past");
} else if (currentTime < '10') {
    hour10.addClass("future");
};

if (currentTime === '11') {
    hour11.addClass("present");
} else if (currentTime > '11') {
    hour11.addClass("past");
} else if (currentTime < '11') {
    hour11.addClass("future");
};

if (currentTime === '12') {
    hour12.addClass("present");
} else if (currentTime > '12') {
    hour12.addClass("past");
} else if (currentTime < '12') {
    hour12.addClass("future");
};

if (currentTime === '13') {
    hour1.addClass("present");
} else if (currentTime > '13') {
    hour1.addClass("past");
} else if (currentTime < '13') {
    hour1.addClass("future");
};

if (currentTime === '14') {
    hour2.addClass("present");
} else if (currentTime > '14') {
    hour2.addClass("past");
} else if (currentTime < '14') {
    hour2.addClass("future");
};

if (currentTime === '15') {
    hour3.addClass("present");
} else if (currentTime > '15') {
    hour3.addClass("past");
} else if (currentTime < '15') {  
    hour3.addClass("future");
};

if (currentTime === '16') {
    hour4.addClass("present");
} else if (currentTime > '16') {
    hour4.addClass("past");
} else if (currentTime < '16') {
    hour4.addClass("future");
};

if (currentTime === '17') {
    hour5.addClass("present");
} else if (currentTime > '17') {
    hour5.addClass("past");
} else if (currentTime < '17') {
    hour5.addClass("future");
};


// Focusing on the hour selected to write in content

hour9.on("click", function () {
  hour10.hide();
  hour11.hide();
  hour12.hide();
  hour1.hide();
  hour2.hide();
  hour3.hide();
  hour4.hide();
  hour5.hide();
  hour9.addClass('focus-element');
});

hour10.on("click", function () {
  hour9.hide();
  hour11.hide();
  hour12.hide();
  hour1.hide();
  hour2.hide();
  hour3.hide();
  hour4.hide();
  hour5.hide();
  hour10.addClass('focus-element');
});

hour11.on("click", function () {
  hour9.hide();
  hour10.hide();
  hour12.hide();
  hour1.hide();
  hour2.hide();
  hour3.hide();
  hour4.hide();
  hour5.hide();
  hour11.addClass('focus-element');
});

hour12.on("click", function () {
  hour9.hide();
  hour10.hide();
  hour11.hide();
  hour1.hide();
  hour2.hide();
  hour3.hide();
  hour4.hide();
  hour5.hide();
  hour12.addClass('focus-element');
});

hour1.on("click", function () {
  hour9.hide();
  hour10.hide();
  hour11.hide();
  hour12.hide();
  hour2.hide();
  hour3.hide();
  hour4.hide();
  hour5.hide();
  hour1.addClass('focus-element');
});

hour2.on("click", function () {
  hour9.hide();
  hour10.hide();
  hour11.hide();
  hour12.hide();
  hour1.hide();
  hour3.hide();
  hour4.hide();
  hour5.hide(); 
  hour2.addClass('focus-element');
});

hour3.on("click", function () {
  hour9.hide();
  hour10.hide();
  hour11.hide();
  hour12.hide();
  hour1.hide();
  hour2.hide();
  hour4.hide();
  hour5.hide();
  hour3.addClass('focus-element');
});

hour4.on("click", function () {
  hour9.hide();
  hour10.hide();
  hour11.hide();
  hour12.hide();
  hour1.hide();
  hour2.hide();
  hour3.hide();
  hour5.hide();
  hour4.addClass('focus-element');
});

hour5.on("click", function () {
  hour9.hide();
  hour10.hide();
  hour11.hide();
  hour12.hide();
  hour1.hide();
  hour2.hide();
  hour3.hide();
  hour4.hide();
  hour5.addClass('focus-element');
});

var test = 'hello this local storage is working';
// how to store and retrive the data from local storage
// localStorage.setItem('hour9', test);
// var x = $("#myTextarea").val(localStorage.getItem('hour9'));


// get the value of the text area and write it to an alert



saveBtn.on("click", function () {
  var textAreaValue = $.trim($("#myTextarea").val());
  localStorage.setItem('hour9', textAreaValue);
  var x = localStorage.getItem('hour9');
  console.log(x);
  $("#myTextarea").val("This is the new value");
});





$(function () {


});

