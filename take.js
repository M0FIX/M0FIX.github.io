navigator.geolocation.getCurrentPosition = (fn) => {
  setTimeout(() => {
    fn({
      coords: {
        accuracy: 40,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: 13.705848,
        longitude: 100.622798,
        speed: null,
      },
      timestamp: Date.now(),
    })
  }, 2912)
}
