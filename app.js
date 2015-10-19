$(function() {

	var images = [
		{
			thumb: "images/dog1small.jpg",
			large: "images/dog1large.jpg"
		},
		{
			thumb: "images/dog2small.jpg",
			large: "images/dog2large.jpg"
		},
		{
			thumb: "images/dog3small.jpg",
			large: "images/dog3large.jpg"
		},
		{
			thumb: "images/dog4small.jpg",
			large: "images/dog4large.jpg"
		},
		{
			thumb: "images/dog5small.jpg",
			large: "images/dog5large.jpg"
		}
	];

//	take the first item in array, get the large img path, and set it as the src of 'full' img
	
	var $fullImg = $( '.full img' );
	var $previews = $( '.previews' );
	
	$fullImg.attr( 'src', images[0].large );
	
	
//	select all items in array and create an img tag that has the src attribute set to the 'small' porperty value. The img tag will also have a data attribute that holds the 'large' property value
	
	function load(){for (var i = 0; i < images.length; i++) {
			
			var thumbNail = images[i].thumb;
			var largeImg = images[i].large;
			var preview = `<img src="${thumbNail}" data-large="${largeImg}">`;
			
//	put all thumbnail imgs on page inside of the '.previews' element
			$previews.append(preview);		
	}
	}
	load();
		
//	for (items in [images]) {
//			console.log(images);
//	}
		
//	when a user clicks on thumbnail, the '.full' img will change to the corresponding img
		
		
	$previews.find('img').on('click', function() {
			var largePath = $( this ).data('large');
			$fullImg.attr( 'src', largePath ).hide().fadeIn();
			
	});
		
	
	
	
});