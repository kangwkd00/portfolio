// Google Geolocation
window.onload = function(){
    var mymap = document.getElementById('map');  
    var latlng = new google.maps.LatLng(37.4987297,127.0266639);
    var gmap = new google.maps.Map(
        mymap, {
        zoom: 17,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    // ICON pointer
    var marker = new google.maps.Marker({
        position: latlng,
        map: gmap,
        title:'하이미디어'
    });
};