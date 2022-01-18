import { Component } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [Geolocation]
})
export class HomePage {

  public latitud: number;
  public longitud: number;
  public speed: number;

  constructor(
    private geolocation: Geolocation
  ) {
    this.latitud = 0;
    this.longitud = 0;
    this.speed = 0;

    this.geolocation.watchPosition().subscribe(
      (res: GeolocationPosition )=> {
        this.latitud = res.coords.latitude;
        this.longitud = res.coords.longitude;
        this.speed = res.coords.speed;
      }
    )
    // this.geolocation.getCurrentPosition().then((resp) => {
    //   console.log(resp);
    //   // resp.coords.latitude
    //   // resp.coords.longitude
    //  }).catch((error) => {
    //    console.log('Error getting location', error);
    //  });
  }

}
