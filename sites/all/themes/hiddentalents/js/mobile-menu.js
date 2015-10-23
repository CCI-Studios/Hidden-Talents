(function($){
	
	$(function(){

		$('#block-block-9').click(function(){

			$('#block-block-9 + div.block-menu').slideToggle('slow');
			
		});

		if($(window).width()<970)
		{
			moveLogo();
		}

		$(window).resize(function(){

			if($(window).width()<970)
			{
				moveLogo();
			}
			else
			{
				$('#block-block-6,#block-block-5,#block-block-4').insertBefore('#block-menu-menu-top-menu');

			}

		});

		function moveLogo()
		{	
			$('#block-block-6,#block-block-5,#block-block-4').insertAfter('#block-menu-menu-top-menu');
			return true;
		}
	
	});

})(jQuery);