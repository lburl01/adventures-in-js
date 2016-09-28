// function changeBGImage(whichImage){
//    document.getElementById('page-body').className=whichImage;
// }

$( ".btn" ).click(function() {
  $( "#slide-one" ).hide( "slow")
  $("body").css("background-size", "cover");
  $("body").css("background", "url('https://hd.unsplash.com/45/eDLHCtzRR0yfFtU0BQar_sylwiabartyzel_themap.jpg') no-repeat");
  $( "#slide-two" ).show( "slow")
});

$( ".mtns" ).click(function() {
  $( "#slide-two" ).hide( "slow")
  $("body").css("background-size", "cover");
  $("body").css("background", "url('http://i.imgur.com/5udpudl.jpg') no-repeat");
  $( "#slide-three-mtn" ).show( "slow")
});

$( ".river" ).click(function() {
  $( "#slide-two" ).hide( "slow")
  $("body").css("background-size", "cover");
  $("body").css("background", "url('https://hd.unsplash.com/photo-1466384920976-6d2352dd04c4') no-repeat");
  $( "#slide-three-river" ).show( "slow")
});
