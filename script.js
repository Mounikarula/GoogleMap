	function initMap() {
		var options ={
			zoom:8,
			center: {lat:41.9686, lng:-79.9018}
		}

		var map = new google.maps.Map(document.getElementById('map'), options);

		google.maps.event.addListener(map, 'click', 
			function(event){
				addMarker({coords:event.latLng});
		       });

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


	var markers =[
	{
		coords:{lat:41.9686, lng:-79.9018},
        iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content: '<h1>Beautiful lake<h1>'
              },
        {coords:{lat:40.4406, lng:-79.9959}},
        {coords:{lat:41.4993, lng:-81.6944}},
        {
		coords:{lat:39.9612, lng:-82.9988},
        iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content: '<h1>Beautiful place<h1>'  
              }
             
	];

	for(var i=0; i<markers.length; i++){
		addMarker(markers[i]);
	}

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


