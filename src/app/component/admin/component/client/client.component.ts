import { Component, OnInit } from '@angular/core';
import { Client, ClientDTO } from 'src/app/model/client.model/client';
import { ClientService } from 'src/app/service/client.service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clientAll: Client[] = [];
  clientToUpdate: ClientDTO = {
    name: '',
    adresse: '',
    number: ''
  };
  idToUpdate: number = 0;
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getClientAll();
  }

  public getClientAll() {
    this.clientService.getAllClient().subscribe((data)=>{
      this.clientAll = data;
    })
  }

  public setPhoneNumber(number: string) {
    return number.replace(/(\d{2})(\d{2})(\d{3})(\d{2})/, '$1 $2 $3 $4')
  }

  public getClient(id : number) {
    this.idToUpdate = id
    this.clientService.getClientById(id).subscribe((data)=>{
      this.clientToUpdate = data;
    })
  }

  public updateClient() {
    this.clientService.updateClient(this.idToUpdate, this.clientToUpdate).subscribe((data) => {
      this.getClientAll()
    });
  }

}
