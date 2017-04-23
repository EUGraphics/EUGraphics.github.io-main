$(document).ready(function() {
  var $readmore = $("#rm-readmore");
  var $contact = $(".ct-btn");
  var $membersbtn = $('.am-btn');
  var $pfcard = $('.profile-container');
  var $midcard = $('.mid-pf-container');
  var $tpgh = $('.tpgh-container');
  var $amb = $('.allmembers-btn');
  var $cbtn = $('.close-btn');
  var $cbtna = $('.cbtn-active');
  var $srbtn = $('#slide-r');
  var $slbtn = $('#slide-l');
  var $pfr = $('.all-pf-wrapper')
  var $slctrl = $('.slide-ctrl');
  $readmore.on("click", function() {
  $("#main").moveTo(2);
  });

  $contact.on("click", function() {
    $("#main").moveTo(4);
  });
  $membersbtn.on("click", function() {
    $pfcard.toggleClass('card-active');
    $midcard.toggleClass('mc-active');
    $tpgh.toggleClass('am-active');
    $amb.toggleClass('am-active');
    $cbtn.toggleClass('cbtn-active');
    $membersbtn.toggleClass('am-active');
    setTimeout(function(){
      $slctrl.css('opacity', '1');
    }, 1000);
    $("body").toggleClass("scroll-disabled");
  });
  if ( $membersbtn.hasClass('am-active') ) {
    return false;
  };

$cbtn.on("click", function() {
  $pfcard.toggleClass('card-active');
  $midcard.toggleClass('mc-active');
  $tpgh.toggleClass('am-active');
  $amb.toggleClass('am-active');
  $cbtn.toggleClass('cbtn-active');
  $membersbtn.toggleClass('am-active');
  $slctrl.css('opacity', '0');
  $("body").toggleClass("scroll-disabled");
});
  var $slval = 0;
  var $srval = 0;
  var $sval = 0;
  $srbtn.on("click", function() {
    $srval = $slval - 100;
    $pfr.css('transform', 'translateX('+$srval+'vw)');
    $sval = slval;
  });
  $slbtn.on("click", function() {
    $slval += ($slval === 0 ? 0 : -100)
    $pfr.css('transform', 'translateX('+$slval+'vw)');
    $sval = srval;
  });
});
