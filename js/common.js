$(document).ready(function() {
	$("#category_details").slideUp();
	$("#category_heading").mouseenter(function() {
		$("#category_details").slideDown(); 
	});
	$("#category_heading").click(function() {
		$("#category_details").slideUp(); 
	});
	$("#category1").slideUp();
	$("#category_title1").mouseenter(function() {
		$("#category1").slideDown(); 
	});
	$("#category_title1").click(function() {
		$("#category1").slideUp(); 
	});
	$("#category2").slideUp();
	$("#category_title2").mouseenter(function() {
		$("#category2").slideDown(); 
	});
	$("#category_title2").click(function() {
		$("#category2").slideUp(); 
	});
	$("#category3").slideUp();
	$("#category_title3").mouseenter(function() {
		$("#category3").slideDown(); 
	});
	$("#category_title3").click(function() {
		$("#category3").slideUp(); 
	});
});
