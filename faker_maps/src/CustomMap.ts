export class CustomMap {
  private googleMap: google.maps.Map;
  public googleMarker: google.maps.Marker;

  constructor(public elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 2,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  public addMarker() {
    this.googleMarker.setPosition
  }
}