


$(document).ready(function() { //wait until HTML loads

$('.save-btn').click(function() {

    $('.hide-till-print').show();

    var gratitude_1 = $('.gratitude-1').val(); //save gratitude entry
    $('.gratitude-recap').append("<li>"+gratitude_1+"</li>"); //print to summary

    var gratitude_2 = $('.gratitude-2').val(); //save gratitude entry
    $('.gratitude-recap').append("<li>"+gratitude_2+"</li>"); //print to summary

    var gratitude_3 = $('.gratitude-3').val(); //save gratitude entry
    $('.gratitude-recap').append("<li>"+gratitude_3+"</li>"); //print to summary

    var gratitude_4 = $('.gratitude-4').val(); //save gratitude entry
    $('.gratitude-recap').append("<li>"+gratitude_4+"</li>"); //print to summary

    var gratitude_5 = $('.gratitude-5').val(); //save gratitude entry
    $('.gratitude-recap').append("<li>"+gratitude_5+"</li>"); //print to summary



    var fogless_1 = $('.fogless-1').val(); //save fogless thoughts entry
    $('.fogless-recap').append("<li>"+fogless_1+"</li>"); //print to summary

    var fogless_2 = $('.fogless-2').val(); //save fogless thoughts entry
    $('.fogless-recap').append("<li>"+fogless_2+"</li>"); //print to summary

    var fogless_3 = $('.fogless-3').val(); //save fogless thoughts entry
    $('.fogless-recap').append("<li>"+fogless_3+"</li>"); //print to summary


    var tomorrow_1 = $('.tomorrow-1').val(); //save tomorrow's actions entry
    $('.tomorrow-recap').append("<li>"+tomorrow_1+"</li>"); //print to summary

    var tomorrow_2 = $('.tomorrow-2').val(); //save tomorrow's actions entry
    $('.tomorrow-recap').append("<li>"+tomorrow_2+"</li>"); //print to summary

    var tomorrow_3 = $('.tomorrow-3').val(); //save tomorrow's actions entry
    $('.tomorrow-recap').append("<li>"+tomorrow_3+"</li>"); //print to summary


    var future_1 = $('.future-1').val(); //save future actions entry
    $('.future-recap').append("<li>"+future_1+"</li>"); //print to summary

    var future_2 = $('.future-2').val(); //save future actions entry
    $('.future-recap').append("<li>"+future_2+"</li>"); //print to summary

    var future_3 = $('.future-3').val(); //save future actions entry
    $('.future-recap').append("<li>"+future_3+"</li>"); //print to summary

    var future_4 = $('.future-4').val(); //save future actions entry
    $('.future-recap').append("<li>"+future_4+"</li>"); //print to summary

    var future_5 = $('.future-5').val(); //save future actions entry
    $('.future-recap').append("<li>"+future_5+"</li>"); //print to summary

    var future_6 = $('.future-6').val(); //save future actions entry
    $('.future-recap').append("<li>"+future_6+"</li>"); //print to summary


    var habits_1 = $('.habits-1').val(); //save habit actions entry
    $('.habits-recap').append("<li>"+habits_1+"</li>"); //print to summary

    console.log(habits_1)

    var habits_2 = $('.habits-2').val(); //save habit actions entry
    $('.habits-recap').append("<li>"+habits_2+"</li>"); //print to summary

    var habits_3 = $('.habits-3').val(); //save habit actions entry
    $('.habits-recap').append("<li>"+habits_3+"</li>"); //print to summary

  }); //end save-btn click

  //readmore toggle
  $(".readmore").click( function(event) {
    event.preventDefault();
    $('.hide-show').slideToggle('fast');
    $('.readless').show();
    $('.readmore').hide();
  });

  $(".readless").click( function(event) {
    event.preventDefault();
    $('.hide-show').slideToggle('fast');
    $('.readless').hide();
    $('.readmore').show();
  });

  //readmore2 toggle
  $(".readmore2").click( function(event) {
    event.preventDefault();
    $('.hide-show2').slideToggle('fast');
    $('.readless2').show();
    $('.readmore2').hide();
  });

  $(".readless2").click( function(event) {
    event.preventDefault();
    $('.hide-show2').slideToggle('fast');
    $('.readless2').hide();
    $('.readmore2').show();
  });

  //readmore3 toggle
  $(".readmore3").click( function(event) {
    event.preventDefault();
    $('.hide-show3').slideToggle('fast');
    $('.readless3').show();
    $('.readmore3').hide();
  });

  $(".readless3").click( function(event) {
    event.preventDefault();
    $('.hide-show3').slideToggle('fast');
    $('.readless3').hide();
    $('.readmore3').show();
  });
});
