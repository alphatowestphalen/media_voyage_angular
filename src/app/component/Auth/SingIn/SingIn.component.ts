import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-SingIn',
  templateUrl: './SingIn.component.html',
  styleUrls: ['./SingIn.component.css']
})
export class SingInComponent implements OnInit {
  username: string = '';
  password: string = '';
  showModal: boolean = false;
  constructor( private route: Router) { }

  ngOnInit() {
  }

  singIn(){
    if (this.username === 'admin@admin.com' && this.password === '123') {
      this.route.navigate(['/dash']);      
    } else {
      this.showModal = true;
      console.log('====================================');
      console.log(this.username, this.password);
      console.log('====================================');
    }
  }
}
