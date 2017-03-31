function myMap() {
	var myCenter = new google.maps.LatLng(60.786062,10.699598);
	var mapProp= {
		center: myCenter,
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
		// disableDefaultUI: true
	};
	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
	var marker = new google.maps.Marker({position:myCenter});
	marker.setMap(map);
}
