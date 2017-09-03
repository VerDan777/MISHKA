
    window.initMap=function() {

    var location = {lat: 54.7104260, lng:20.4522140};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: location
});
        var imagemarker = new google.maps.MarkerImage(
            './img/pin.png',
            new google.maps.Size(100,100),
            new google.maps.Point(0,0),
            new google.maps.Point(16,32)
        );
            var marker = new google.maps.Marker({
                draggable: false,   
                raiseOnDrag: false,
                animation: google.maps.Animation.BOUNCE,
                icon: imagemarker,
                map: map,
                position: location
});
}