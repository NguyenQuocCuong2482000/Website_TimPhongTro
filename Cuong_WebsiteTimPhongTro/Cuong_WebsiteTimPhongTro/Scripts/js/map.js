
    var bando = null;
    var lat = 0;
    var long = 0;
    var infowindow = null;
    var arrMarkers = [];


        function TimDiaDiem(loaidiadiem){
            if(!loaidiadiem || loaidiadiem=="") return;
            var req = {
        location: {lat:lat, lng:long },    // trung tam vung tim kiem
                radius: '1000',                 // ban kinh tim kiem theo m
                type: loaidiadiem       //loai dia diem
            }
            var service = new google.maps.places.PlacesService(bando);
            service.nearbySearch(req,function(result,status){
                if(status==google.maps.places.PlacesServiceStatus.OK && result && result.length>0){
                    for(var i in arrMarkers)
                        arrMarkers[i].setMap(null);   // xóa hết địa điểm củ để hiển thị địa điểm mới
                    arrMarkers = [];
                    for(var i in result){
                        var place = result[i];
                        console.log(place);
                        var ico = {
        url:place.icon,
                            size:new google.maps.Size(70,70),
                            origin: new google.maps.Point(0,0),
                            anchor: new google.maps.Point(17,34),
                            scaledSize: new google.maps.Size(25,25),
                        }
                        var marker = new google.maps.Marker({
        map:bando,
                            icon:ico,
                            title:place.name,
                            content:'<strong>'+place.name+"</strong><br />"+place.vicinity,
                            position:place.geometry.location,
                            data:place
                        });
                        google.maps.event.addListener(marker,'click', function(){
        infowindow.setContent(this.content);
                            infowindow.open(bando,this);
                            TimDuong(this.data);
                        });
                        arrMarkers.push(market);
                    }
                }
            });
        }

        var ddisplay = null;
        function TimDuong(place){
            var dservie = new google.maps.DirectionsService();

            if(ddisplay) ddisplay.setMap(null); // xóa đường đi củ để hiển thị đường đi mới

            ddisplay = new google.maps.DirectionsRenderer();
            ddisplay.setMap(bando);
            var req = {
        origin: {lat:lat, lng:long },
                destination:place.geometry.location,
                travelMode:"WALKING",
                provideRouteAlternatives:true
            };
            dservie.route(req,function(result,status){
                if(status=="OK") ddisplay.setDirection(result);
            });
        }


        function showMap(){
        infowindow = new google.maps.InfoWindow();
            window.navigator.geolocation.getCurrentPosition(function(pos){
        lat = pos.coords.latitude;
                long = pos.coords.longitude;
                console.log(lat,long);
                bando = new google.maps.Map(document.getElementById('map'),{
        center: {lat:lat, lng:long },
                    zoom:15
                });

                var cp = new google.maps.Marker({
        position: {lat:lat, lng:long },
                    map: bando
                });

            });


        }
