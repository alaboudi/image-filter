(function( $ ) {
 
    $('.image-filter').each(function(){

    	var styles={
    		"background-color":$(this).data('color'),
    		"opacity":$(this).data('opacity'),
    		"position":"absolute",
    		"top":0,
    		"bottom":0,
    		"left":0,
    		"right":0,
    	};

    	$(this).wrap( "<div style='position:relative' class='image-filter-parent'></div>" );
    	$(this).after("<div class='actual-filter'></div>");
    	$(this).siblings('.actual-filter').css(styles)
    });
 
}( jQuery ));