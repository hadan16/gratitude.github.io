
var savedEntries= new Object()

$(document).ready(function() { //wait until HTML loads
var count = 3

  //add new form and delete button
  $('.add-btn').click(function() {
    count++
    console.log(count);

    $('.list-style').append ('<li>' + '<input type="value" class="entry entry-'+count+'-val" name="entry'+count+'" placeholder=" Entry '+count+'"/>' + '<input class="delete" type="button" value="X">' + '</li>');

    $('.printed-entries').append('<p>'+'<span>'+''+count+') '+'</span>'+'<span class="entry-'+count+'-input">'+'</span>'+'</p>');
  });

  //delete form
  $('.list-style').on('click', '.delete', function() {
    $(this).parents('li').remove();

    count--
  });

  //save button to print entry, save to database, and clear form
  $('.save-btn').click(function() {

    var hello = $('.date-val').val(); //save date
    $('.date-input').html(hello);

    var entry_1 = $('.entry-1-val').val();
    $('.entry-1-input').html(entry_1);
    //save and print entry

    var entry_2 = $('.entry-2-val').val();
    $('.entry-2-input').html(entry_2);
    //save and print entry

    var entry_3 = $('.entry-3-val').val();
    $('.entry-3-input').html(entry_3);
    //save and print entry

    var entry_4 = $('.entry-4-val').val();
    $('.entry-4-input').html(entry_4);
    //save and print entry

    var entry_5 = $('.entry-5-val').val();
    $('.entry-5-input').html(entry_5);
    //save and print entry

    var entry_6 = $('.entry-6-val').val();
    $('.entry-6-input').html(entry_6);
    //save and print entry

    var entry_7 = $('.entry-7-val').val();
    $('.entry-7-input').html(entry_7);
    //save and print entry

    var entry_8 = $('.entry-8-val').val();
    $('.entry-8-input').html(entry_8);
    //save and print entry

    $('.entry').val("");

    savedEntries["entry"+count] = { hello : [entry_1, entry_2, entry_3]}

    count++
    console.log(count);
    console.log("Entries:", savedEntries)
  });

  //enter to submit block
  $(window).keydown(function(event){
   if(event.keyCode == 13) {
     event.preventDefault();
     return false;
   }
  });

  //pre-populates today's date
  var today = new Date();
  document.getElementById("toDate").value = parseInt(today.getMonth()+1) + "-" + today.getDate() + "-" + today.getFullYear();;

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

//marquee clouds text
  function marquee(a, b) {
      var width = b.width();
      var start_pos = a.width();
      var end_pos = -width;

      function scroll() {
          if (b.position().left <= -width) {
              b.css('left', start_pos);
              scroll();
          }
          else {
              time = (parseInt(b.position().left, 10) - end_pos) *
                  (20000 / (start_pos - end_pos)); // Increase or decrease speed by changing value 10000
              b.animate({
                  'left': -width
              }, time, 'linear', function() {
                  scroll();
              });
          }
      }

      b.css({
          'width': width,
          'left': start_pos
      });
      scroll(a, b);

      b.mouseenter(function() {     // Remove these lines
          b.stop();                 //
          b.clearQueue();           // if you don't want
      });                           //
      b.mouseleave(function() {     // marquee to pause
          scroll(a, b);             //
      });                           // on mouse over

  }

  $(document).ready(function() {
      marquee($('#display'), $('.text'));  //Enter name of container element & marquee element
      marquee($('#display'), $('.text-2'));  //Enter name of container element & marquee element
      marquee($('#display'), $('.text-3'));  //Enter name of container element & marquee element
      marquee($('#display'), $('.text-4'));  //Enter name of container element & marquee element

  });




});
