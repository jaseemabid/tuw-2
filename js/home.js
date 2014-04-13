var $count = 7;
$(document).ready(function() {
	$("#about_us").slideUp();
	$("#sponsor_us").slideUp();
	$("#sponsors_image").slideUp();
	setTimeout(function() {
		$("#header").animate({left:'20px',top:'0px'},1000);
		$("#header img").animate({height:'45px'},1000);
	},2000);
	$("#about").mouseenter(function () {
		$("#about_us").css("visibility", "visible");
		$("#about_us").slideDown();
	});
	$("#about").mouseleave(function () {
		$("#about_us").slideUp();
	});
	$("#heading").mouseenter(function () {
		$("#sponsor_us").slideDown();
	});
	$("#sponsorship").click(function () {
		$("#sponsor_us").slideUp();
	});
	$("#sponsors").mouseenter(function () {
		$("#sponsors_image").slideDown();
	});
	$("#sponsors").click(function () {
		$("#sponsors_image").slideUp();
	});
	for(var i=1; i<7 ; ++i)
		$("#selector"+i).addClass("class1");
	setTimeout(function() {
		imageTransition();
	},4000);
});

function imageTransition() {
	$("#image"+$count).fadeOut();
	$count = $count - 1;
	$("#image"+$count).css({'visibility':'visible'});
	$("#image"+$count).fadeIn();
	if($count == 1) {
		$count = 7;
	}
	setTimeout("imageTransition()",3000);
}

$(document).ready(function() {
	  $("#overlay").css("height", $(document).height());
	 
	   //When the link that triggers the message is clicked fade in overlay/msgbox
	  $(".alert").click(function(){
	  	  $("#msg_img").attr("src", $(this).attr("src"));
		  $("#overlay").fadeIn();
	      return false;
	  });
	 
	   //When the message box is closed, fade out
	  $("#close").click(function(){
	      $("#overlay").fadeOut();
	      return false;
	  });
});

$(document).ready(function() {
	  $("#overlay2").css("height", $(document).height());
	 
	   //When the link that triggers the message is clicked fade in overlay/msgbox
	  $(".alertvideo").click(function(){
	  	  $( "#iframe" ).attr( "src", "//www.youtube.com/embed/"+$(this).attr("alt") );
		  $("#overlay2").fadeIn();
	      return false;
	  });
	 
	  //When the message box is closed, fade out
	  $(".close").click(function(){
	      $( "#iframe" ).attr( "src", "" );	
	      $("#overlay2").fadeOut();
	      return false;
	  });
});
