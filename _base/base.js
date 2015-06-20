$(document).ready(function(){
	// COOKIED DONT WORK IN CHROME LOCALLY
	// var handle = $.cookie('drawer', 'up', { expires: 7, path: '/' });

	var instructions = $('.instructions');
	var drawer;

	// toggle drwaer
	function switch_drawer(){
		if (drawer == 'closed')
		{
			drawer = 'open';
			localStorage.setItem('drawer','open');
			$(instructions).addClass('open');
		}
		else
		{
			drawer = 'closed';
			localStorage.setItem('drawer','closed');
			$(instructions).removeClass('open');
		}
	}

	/*First Run*/
	if (localStorage.getItem('drawer') === null)
	{
		instructions.addClass('open');


		localStorage.setItem('drawer','closed');
		setTimeout(function(){
			instructions.removeClass('open');
		},5000);
		
		drawer = localStorage.getItem('drawer');
	}
	else
	{
		
		drawer = localStorage.getItem('drawer');
		
		if (drawer == 'closed')
		{
			$(instructions).removeClass('open');
		}
		else
		{
			$(instructions).addClass('open');
		}
	}


	$('.instructions').click(switch_drawer);
	
});