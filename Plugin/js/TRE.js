$(document).ready(function(){
	var type = 'carousel';
	var slides = null;
	var orientation = 'horizontal';
	// vervangen met JSON data van de backend
	var data = '{"1":{"title":"Laptop 1","description":"Description for laptop 1","img":"img/laptop1.jpg","url":"http://www.google.be"},"2":{"title":"Laptop 2","description":"Description for laptop 2","img":"img/laptop2.jpg","url":"http://www.google.be"},"3":{"title":"Laptop 3","description":"Description for laptop 3","img":"img/laptop3.jpg","url":"http://www.google.be"},"4":{"title":"Laptop 4","description":"Description for laptop 4","img":"img/laptop4.jpg","url":"http://www.google.be"},"5":{"title":"Laptop 5","description":"Description for laptop 5","img":"img/laptop5.jpg","url":"http://www.google.be"}}';
	var data = $.parseJSON(data);

	if (data != null && data != "")
	{
		if (type == "carousel")
		{
			// ophalen uit JSON
			slides = 3
		}
		else if (type == "top5")
		{
			// ophalen uit JSON
			slides = 5
		}
		else
		{
			$('#recommendations').html("<p style='color: red;'><strong>TRE Error:</strong> Unknown type!</p>");
			return;
		}
		
		// Dynamisch opvullen van artikelen
		$.each(data, function(i, item) {
			$('#recommendations').append("<li><a href='" + item.url + "' target='_blank'><h3>" + item.title + "</h3><p>" + item.description + "</p><img src='" + item.img + "' /></li></a>");
		});
		
		// CSS link naar FontAwesome
		$('<link/>', {
			rel: 'stylesheet',
			type: 'text/css',
			href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css'
		}).appendTo('head');
		
		// Init van slider
		$('#recommendations').bxSlider({
			controls: true,
			mode: orientation,
			minSlides: slides,
			maxSlides: slides,
			pager: false,
			slideWidth: 300
		});	
	}
	else
	{
		$('#recommendations').html("<p style='color: red;'><strong>TRE Error:</strong> No JSON data received!</p>");
		return;
	}
});