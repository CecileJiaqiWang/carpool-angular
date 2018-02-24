import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {Ride} from "../../models/ride";
import {RideService} from "../../services/ride-service/ride.service";
import {FormBuilder, FormGroup} from "@angular/forms";



@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent implements OnInit {
  @Output() ridesSearch = new EventEmitter<Ride[]>();
  private rides : Ride[];
  private newSearchForm: FormGroup;

  constructor(private rideService: RideService, private fb: FormBuilder) { }

  ngOnInit() {
    this.newSearchForm = this.fb.group({
      departing_from: [''],
      arriving_at: [''],
      departure_time: ['']
    });

    this.rideService.searchRides(this.newSearchForm.value['departing_from'], this.newSearchForm.value['arriving_at'], this.fb['departure_time'] )
      .then(rides => {
        this.rides = rides;
        this.ridesSearch.emit(this.rides);
      })
      .catch(err => console.log(err));


  }

  search() {
    console.log("search()");
    this.rideService.searchRides(this.newSearchForm.value['departing_from'], this.newSearchForm.value['arriving_at'], this.fb['departure_time'] )
      .then(rides => this.rides = rides)
      .catch(err => console.log(err));
    this.ridesSearch.emit(this.rides);

  }

}
