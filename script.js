	function initMap() {
		var options ={
			zoom:8,
			center: {lat:31.9686, lng:-99.9018}
		}

		var map = new google.maps.Map(document.getElementById('map'), options);
	}