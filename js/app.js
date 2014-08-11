$(document).ready(function(){
	$('.enter').click(function() {
		var addItem = $('input[name=food-item]').val();
		$('.lister').append('<li class="active"><button class="check"></button><p>' + addItem + '</p><button class="delete"></button></li>');
		$('input').val("");
	});
	$(document).keydown(function(event) {
		if(event.which== 13) {
		var addItem = $('input[name=food-item]').val();
		$('.lister').append('<li class="active"><button class="check"></button><p>' + addItem + '</p><button class="delete"></button></li>');
		$('input').val("");
		}
	});

	//if nothing or space only then alert-------------------------


	//------------------------------------------------------------


	$(document).on('click', '.check', function() {
		$(this).siblings('p').toggleClass('checked');
	});
	$(document).on('click', '.delete', function() {
		$(this).parent('li').remove();
	});
});