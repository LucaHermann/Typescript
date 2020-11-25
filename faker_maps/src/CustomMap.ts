interface IMappable {
  location: {
    lat: number,
    lng: number
  }
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(public elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 2,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mappable: IMappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })
  }
}