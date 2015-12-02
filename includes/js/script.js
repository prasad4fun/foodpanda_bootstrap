/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/

  $(function(){
    $('#alertMe').click(function(e){
      e.preventDefault();
      $('#hidden').slideDown();
    });
    $('.close').click(function(e){
      e.preventDefault();
      $('#hidden').slideUp();
    });
    $(function (){
      $(window).scroll(scroll_fix_stick);
    })
  });

  function scroll_fix_stick() {
  var window_top = $(window).scrollTop();
  var div_top=$('#sticky-anchor').offset().top;
  if(window_top > div_top){
    $('#scroll-fix').addClass('stick');
       }
  else {
      $('#scroll-fix').removeClass('stick');
    }
  }
