import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poke-profile',
  templateUrl: './poke-profile.component.html',
  styleUrls: ['./poke-profile.component.scss']
})
export class PokeProfileComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  home() {
    this.router.navigateByUrl('/homeCatalogue');
  }
}
