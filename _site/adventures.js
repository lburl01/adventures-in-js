
$( ".btn" ).click(function() {
  $( "#slide-one" ).hide( "slow")
  // body.removeClass().addClass("slide-two")
  $( "#slide-two" ).show( "slow")
});

$( ".mtns" ).click(function() {
  $( "#slide-two" ).hide( "slow")
  $( "#slide-three-mtn" ).show( "slow")
});

$( ".river" ).click(function() {
  $( "#slide-two" ).hide( "slow")
  $( "#slide-three-river" ).show( "slow")
});
