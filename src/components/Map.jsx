import React, { useEffect } from 'react';

function Map() {
  useEffect(() => {
    // Joylashuv
    const location = { lat: 41.3111, lng: 69.2401 };

    // Haritani yaratish
    const initMap = () => {
      // Harita obyekti yaratish va joylashuvni joylash
      const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
      });

      // Joylashuv markerini joylashish
      new window.google.maps.Marker({
        position: location,
        map: map,
        title: 'Toshkent'
      });
    };

    // Harita yuklandi
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    document.body.appendChild(script);

    // Skript bekor qilindi
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1>Harita Joylashuvi</h1>
      <div id="map" style={{ height: '400px', width: '100%' }}></div>
    </div>
  );
}

export default Map;
