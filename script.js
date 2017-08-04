	function initMap() {
		var options ={
			zoom:8,
			center: {lat:41.9686, lng:-79.9018}
		}

		var map = new google.maps.Map(document.getElementById('map'), options);

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

	addMarkers({lat:41.9686, lng:-79.9018});

	// function to add multiple markers to the map

	function addMarkers(coords) {
		var marker = new google.maps.Marker ({
			position: coords,
			map: map,
			icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
		});
	}
}
