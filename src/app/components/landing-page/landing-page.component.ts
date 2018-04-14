import { Component, OnInit } from '@angular/core';
import {CONFIG} from "../../config";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  private authUrl: string = `${CONFIG.cas_auth_url}?service=${CONFIG.service_url}`;

  constructor() { }

  ngOnInit() {
  }



}
