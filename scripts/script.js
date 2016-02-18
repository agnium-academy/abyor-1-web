$(document).ready(function(){
	//$('body').removeClass('jsOff').addClass('jsOn');
	$("#tabs a").on("click", function(e){
		$(this.hash).show();
		//$(this).addClass('current');
		e.preventDefault();
	})

});
