


$(document).ready(function() {
	AOS.init();

	$('#shop_button_wrap').on('click', 'a', function() {
		$('#shop_container div').removeClass('show_img');
		
		var newImage = $(this).index();
		
		$('#shop_container div').eq(newImage).addClass('show_img');
		
		$('#shop_button_wrap a').removeClass('selected');
		$(this).addClass('selected');
	});	
	
});

var aux = 0;
var aux_gif = 0;
var aux_gif2 = 0;

$(window).scroll(function() {
	

	$(".anchor-fade-selfie").each(function() {
		var image = $("#img_change");
		
		if ($(this).visible(true))
		{					
			if (aux_gif == 0)
			{
				image.fadeOut(300, function () {
					image.attr('src', 'assets/images/img/selfie_bg2.png');
					image.fadeIn(700);
				});
				aux_gif = 1;
			}	
			
		}
		else	
		{
			if (aux_gif == 1)
			{
				image.fadeOut('slow', function () {
					image.attr('src', 'assets/images/img/selfie_bg1.png');
					image.fadeIn('slow');
				});							
				aux_gif = 0;
			}
		}
	});

	$(".right_wide_flex").each(function() {
		if ( ($(this).visible(true)) && (aux_gif2 == 0)){			
			$('#img_change2').attr('src','assets/images/img/animacao_flash_loop.gif');
			aux_gif2 = 1;
		}
	});
	


	$('.tripla_content').each(function() {
        if ($(this).visible(true)) {
			if (aux == 0)
			{
				$("#vid")[0].play();
				aux = 1;
			}	
			
        } else {		
			
			if (aux == 1)
			{
				$("#vid")[0].pause();
				$("#vid")[0].currentTime = 0;								
				aux = 0;
			}
		}
		//console.log(aux)	;
    })
});



