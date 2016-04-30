;
$(document).ready(function(){
	$(".navbar, .headScroll").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор блока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1000 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});
});

jQuery(document).ready(function( $ ) {
            $("#menu").mmenu({
               "extensions": [
                  "pagedim-black",
                  "theme-dark"
               ]
            });
         });
//, ".headScroll"