	function initMap() {
		var options ={
			zoom:8,
			center: {lat:41.9686, lng:-79.9018}
		}

		var map = new google.maps.Map(document.getElementById('map'), options);

		var marker = new google.maps.Marker({
			position: {lat:42.4668, lng:-79.9495},
			map:map
		})
	}