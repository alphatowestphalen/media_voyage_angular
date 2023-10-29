import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-SingIn',
  templateUrl: './SingIn.component.html',
  styleUrls: ['./SingIn.component.css']
})
export class SingInComponent implements OnInit {

  constructor( private route: Router) { }

  ngOnInit() {
  }

  singIn(){
    this.route.navigate(['/dash']);
  }
}
