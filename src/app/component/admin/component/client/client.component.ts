import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/model/client.model/client';
import { ClientService } from 'src/app/service/client.service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clientAll: Client[] = [];
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getClientAll();
  }

  public getClientAll() {
    this.clientService.getAllClient().subscribe((data)=>{
      console.log('====================================');
      console.log(data);
      console.log('====================================');
      this.clientAll = data;
    })
  }

}
