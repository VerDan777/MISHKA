function initMap() {
    var location = {lat: 54.7104260, lng:20.4522140};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
    center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}