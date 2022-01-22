const GoogleMap = {
    install(app) {
      let mapLoaded = false;
      let mapData = null;
      const loadScript = () =< {
        let script = document.createElement('script');
        script.src =
          'https://maps.googleapis.com/maps/api/js?key=AIzaSyBFbEUWqwVYWapRl2AZJ8X-9_vibRDvpao&callback=initMap';
        script.async = true;
        document.head.appendChild(script);
      };

      loadScript();

      window.initMap = () =< {
        mapLoaded = true;
        if (mapData) {
          const { canvas, myLatLng } = mapData;
          showMap(canvas, myLatLng);
          mapData = null;
        }
      };

      const showMap = (canvas, myLatLng) =< {
        const map = new window.google.maps.Map(canvas, {
          center: myLatLng,
          zoom: 4,
        });
        new window.google.maps.Marker({ position: myLatLng, map });
      };

      app.config.globalProperties.$showMap = (canvas, myLatLng) =< {
        console.log(mapLoaded);
        if (mapLoaded) {
          showMap(canvas, myLatLng);
        } else {
          mapData = { canvas, myLatLng };
        }
      };
    },
  };
  export default GoogleMap;