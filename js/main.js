$(function(){
	
	var slideCount = $(".single-slide").length;
	var slideWidth = 100 / slideCount;
	var slideShow = $(".slide-show");
	var slideIndex = 0;
	
	slideShow.css("width", slideCount * 100 + "%");	
	
	slideShow.find(".single-slide").each(function(index){
		$(this).css("width", slideWidth + "%");
		$(this).css("left", index*slideWidth + "%");
	});
	
	$(".prev-slide").click(function (e) {
		e.preventDefault();
		slide(slideIndex - 1);
	});
	
	$(".next-slide").click(function (e) {
		e.preventDefault();
		slide(slideIndex + 1);
	});
	
	function slide(newSlideIndex){
		
		if (newSlideIndex < 0 || newSlideIndex >= slideCount){
			return;
		}
		
		var napisPoprzedzajacy = $(".slider-caption").eq(newSlideIndex);
		
		napisPoprzedzajacy.hide();
		
		var marginLeft = (newSlideIndex * (-100)) + "%";
		
		slideShow.animate({"margin-left": marginLeft}, 800, function (){
			slideIndex = newSlideIndex;
			napisPoprzedzajacy.fadeIn("slow");
		});
		
		
	}
	
});