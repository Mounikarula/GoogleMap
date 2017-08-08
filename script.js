	function initMap() {
		var options ={
			zoom:8,
			center: {lat:41.9686, lng:-79.9018}
		}

		var map = new 
		google.maps.Map(document.getElementById('map'), options);

	/*	var marker = new google.maps.Marker({
			position: {lat:42.4668, lng:-79.9495},
			map:map,
			icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
		});

		var infoWindow = new google.maps.InfoWindow({
			content:'<h1>Beautiful Lake</h1>'
		});

		marker.addListener('click', function(){
			infoWindow.open(map, marker);
		})
	*/

	addMarker({
		coords:{lat:41.9686, lng:-79.9018},
        iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content: '<h1>Beautiful lake<h1>'
              });
	addMarker({coords:{lat:40.4406, lng:-79.9959}});
	addMarker({coords:{lat:41.4993, lng:-81.6944}});
	addMarker({
		coords:{lat:39.9612, lng:-82.9988},
        iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content: '<h1>Beautiful place<h1>'  
              });

	// function to add multiple markers to the map

	function addMarker(props) {
		var marker = new google.maps.Marker ({
			position: props.coords,
			map: map,
			//icon: props.iconImage
		});

		if(props.iconImage){
			marker.setIcon(props.iconImage);
		}


		if(props.content) {
			var infoWindow = new google.maps.InfoWindow({
			content:props.content
		});

		marker.addListener('click', function(){
			infoWindow.open(map, marker);
		});
	} 
}

}


