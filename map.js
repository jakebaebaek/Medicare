/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function initMap() {
    const myLatLng = { lat: 37.41231155395508, lng: 127.09403991699219 };

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: myLatLng,
      zoomControl: true,
      disableDefaultUI: true,
    });
    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Hello World!",
      });  
}
  
  window.initMap = initMap;
  