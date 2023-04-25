import {AgmMap, MapsAPILoader} from '@agm/core';
import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})
export class LocationFormComponent implements OnInit {
  public form!: FormGroup;

  @ViewChild(AgmMap, {static: true}) public agmMap!: AgmMap;
  constructor(private formBuilder: FormBuilder,
              private mapsAPILoader: MapsAPILoader) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      country: new FormControl(''),
      region: new FormControl(''),
      district: new FormControl(''),
      road: new FormControl(''),
      apartment: new FormControl(''),
      zip: new FormControl('')
    });

    this.mapsAPILoader.load().then(() => {
      const autoComplete = new google.maps.places.Autocomplete(
        // Input field element for location input
        // Replace with appropriate selector for your form
        <HTMLInputElement>document.getElementById('locationInput'),
        {types: ['geocode']}
      );
      autoComplete.addListener('place_changed', () => {
        const place = autoComplete.getPlace();
        if (place.geometry) {
          // Extract the address components from place object
          const addressComponents = place.address_components;

          // Use the address components to populate your form from the fields
          const country = addressComponents?.find(component => component.types.includes('country'));

          const region = addressComponents?.find(component => component.types.includes('administrative_area_level_1'));

          const district = addressComponents?.find(component => component.types.includes('administrative_area_level_2'));

          const road = addressComponents?.find(component => component.types.includes('route'));

          const apartment = addressComponents?.find(component => component.types.includes('subpremise'));

          const zip = addressComponents?.find(component => component.types.includes('postal_code'));

          // Use the extracted data to set form field values
          this.form.controls['country'].setValue(country?.long_name || '');
          this.form.controls['region'].setValue(region?.long_name || '');
          this.form.controls['district'].setValue(district?.long_name || '');
          this.form.controls['road'].setValue(road?.long_name || '');
          this.form.controls['apartment'].setValue(apartment?.long_name || '');
          this.form.controls['zip'].setValue(zip?.long_name || '');
        }
      });
    })
  }

}
