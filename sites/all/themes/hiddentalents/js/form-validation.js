(function($) 
	{

		$(function(){

		if (document.location.href.indexOf('submitted') > -1  )
		{
			$('#block-block-13').fadeIn();
			$('#block-block-13').addClass('overlay');	
		}

		$(document).mouseup(function (e)
		{	
			var container =$('#block-block-13');
			if (!container.is(e.target)
				        && container.has(e.target).length === 0) 
				    {
				        container.fadeOut();
				    }
		});
		$(".webform-submit").click(function(event) {
		
		
			console.log('clicked');
			var email = $(".webform-component--email input").val();

			var emailReg = new RegExp(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i);
			var valid = emailReg.test(email);

			if ( !valid ) 
			{	
			 event.preventDefault();
			 
			 var div="<div id=\"error\"><span>Please fill the fields correctly</span></div>";
			 $('#error').remove();
			 $(".block-webform").append(div);
			 return false;
			}
			else
			{	
				return true;
			} 
	
		
  
		});

	});

		
}(jQuery));