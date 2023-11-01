import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model/user';
import { UserService } from 'src/app/service/user.service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userAll: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUserAll()
  }

  public getUserAll() {
    this.userService.getUserAll().subscribe((user)=>{
      this.userAll = user
      console.log('====================================');
      console.log(this.userAll);
      console.log('====================================');
    })
  }

}
