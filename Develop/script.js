$(function () {
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
var clearBtn = $(".clearBtn");

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
  clearBtn.hide();
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
  clearBtn.hide();
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
  clearBtn.hide();
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
  clearBtn.hide();
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
  clearBtn.hide();
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
  clearBtn.hide();
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
  clearBtn.hide();
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
  clearBtn.hide();
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
  clearBtn.hide();
  hour5.addClass('focus-element');
});

$(document).ready(function() {
  var savedValue9 = localStorage.getItem('hour9');
  if (savedValue9 !== null) {
    $(".content9").val(savedValue9);
  }
  var savedValue10 = localStorage.getItem('hour10');
  if (savedValue10 !== null) {
    $(".content10").val(savedValue10);
  }
  var savedValue11 = localStorage.getItem('hour11');
  if (savedValue11 !== null) {
    $(".content11").val(savedValue11);
  }
  var savedValue12 = localStorage.getItem('hour12');
  if (savedValue12 !== null) {
    $(".content12").val(savedValue12);
  }
  var savedValue1 = localStorage.getItem('hour1');
  if (savedValue1 !== null) {
    $(".content1").val(savedValue1);
  }
  var savedValue2 = localStorage.getItem('hour2');
  if (savedValue2 !== null) {
    $(".content2").val(savedValue2);
  }
  var savedValue3 = localStorage.getItem('hour3');
  if (savedValue3 !== null) {
    $(".content3").val(savedValue3);
  }
  var savedValue4 = localStorage.getItem('hour4');
  if (savedValue4 !== null) {
    $(".content4").val(savedValue4);
  }
  var savedValue5 = localStorage.getItem('hour5');
  if (savedValue5 !== null) {
    $(".content5").val(savedValue5);
  }
});

saveBtn.on("click", function () {
  var textAreaValue9 = $.trim($(".content9").val());
  localStorage.setItem('hour9', textAreaValue9);
  var textAreaValue10 = $.trim($(".content10").val());
  localStorage.setItem('hour10', textAreaValue10);
  var textAreaValue11 = $.trim($(".content11").val());
  localStorage.setItem('hour11', textAreaValue11);
  var textAreaValue12 = $.trim($(".content12").val());
  localStorage.setItem('hour12', textAreaValue12);
  var textAreaValue1 = $.trim($(".content1").val());
  localStorage.setItem('hour1', textAreaValue1);
  var textAreaValue2 = $.trim($(".content2").val());
  localStorage.setItem('hour2', textAreaValue2);
  var textAreaValue3 = $.trim($(".content3").val());
  localStorage.setItem('hour3', textAreaValue3);
  var textAreaValue4 = $.trim($(".content4").val());
  localStorage.setItem('hour4', textAreaValue4);
  var textAreaValue5 = $.trim($(".content5").val());
  localStorage.setItem('hour5', textAreaValue5);
  location.reload();
});

clearBtn.on("click", function () {
  localStorage.clear();
  location.reload();
});
});

