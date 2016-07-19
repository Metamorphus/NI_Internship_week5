$(document).ready(function() {
	$('#shopping-cart-badge').hide();
	
	$('#add-to-cart-button').click(function(){
		var pastValue = parseInt($('#shopping-cart-badge').text());
		if (checkQuantity(pastValue))
		{
			animateBadge();
			var orderedCount = parseInt($('#get-count option:selected').val());	
			$('#shopping-cart-badge').text(pastValue + orderedCount);
			$('#shopping-cart-badge').show();
		}
	});
		
	$('.dark-button').hover(function() {
		$(this).css('background-color', '#630');
	});
	
	$('.light-dropdown').mouseleave(function() {
        $(this).css('background-color', '#FF9');
    }); 
	
	$('.preview').click(function() {
		$('#main-image').attr('src', $(this).attr('src'));
	});
	
	var old_src;
	$('.recommended').on({
		mouseenter: function() {
			old_src = $('#main-image').attr('src');
			$('#main-image').attr('src', $(this).attr('src'));
		},
		mouseleave: function() {
			$('#main-image').attr('src', old_src);
		}
	});
	
	$('#getShipping').change(function() {
		var selected = $('#getShipping').val();
		if (selected == "Ukraine")
		{
			$('.Toy:even').text("Shipping to Ukraine");
		}
		else
		{
			$('.Toy').text("Violin");
		}
	});
	
	$('circle').click(function() {
		$('circle').attr('stroke-width', '1');
		$(this).attr('stroke-width', '5');
	});
	
	$('#add-to-cart-button').click(function() {
		var new_link = "cart.html?quan=" + $('#shopping-cart-badge').text();
		console.log(new_link);
		$('#cart-link').attr('href', new_link);
	});
	
	if ($('#quantity_cell') != undefined)
	{
		$('#quantity_cell').text($.url('?quan'));
		$('#total_cell').text(100 * parseInt($.url('?quan')) + '$');
	}
});

function checkQuantity(count)
{
	if (count > 4)
	{
		alert("Don't be greedy! Pay first!");
		return false;
	}
	else
	{
		return true;
	}
}

function animateBadge()
{
	$('#cart').animate({
		color: '#ff0000'
	}, "slow", function() {
		$('#cart').animate({
			color: '#FF0'
		}, 1000)
	});
}