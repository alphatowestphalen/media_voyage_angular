import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cathegorie, CathegorieAdd } from 'src/app/model/cathegorie/cathegorie';
import { CathegorieService } from 'src/app/service/categotie/cathegorie.service';

@Component({
  selector: 'app-cathegorie',
  templateUrl: './cathegorie.component.html',
  styleUrls: ['./cathegorie.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class CathegorieComponent implements OnInit {
  cathegorie: any;
  showEdit: boolean = false;
  showAdd: boolean = true;
  id:string = '';
  cathegorieGetData: CathegorieAdd = {
    type: ''
  }
  constructor(private cathegorieService: CathegorieService, private route:Router) {
    this.getCathegorie();
   }

  ngOnInit() {  
   this.getCathegorie();
  }

  public getCathegorie(){
    this.cathegorieGetData = {type: ''}
    this.cathegorieService.getCathegorie().subscribe((data)=>{
      this.cathegorie = data;
      console.log('====================================');
      console.log(this.cathegorie);
      console.log('====================================');
    })
  }

  public saveCathegorie(){
    this.cathegorieService.saveCathegorie(this.cathegorieGetData).subscribe((data)=>{
      this.route.navigate(['/adminCathegorie']) 
      this.getCathegorie();

    })
  }

  public findById(id:string){
    if(id != null){
      console.log('==================findById==================');
      console.log(id);
      console.log('====================================');
      this.showEdit = !this.showEdit;
      this.showAdd = !this.showAdd;
    }else{
      this.showEdit = false;
      this.showAdd = true;
    }
    this.cathegorieService.findById(id).subscribe((data)=>{
      console.log('====================================');
      console.log(typeof(data));
      console.log('====================================');
      this.cathegorieGetData = data;
      this.id = data.id;
    })
  }

  public updated() {
    this.cathegorieService.updateCathegorie(this.id,this.cathegorieGetData).subscribe((data)=>{
      // window.location.reload();
      this.id = '';
      this.cathegorieGetData
      this.route.navigate(['/adminCathegorie']) 
      this.getCathegorie();
    })
  }

  public delate(id:string){
    console.log('====================================');
    console.log(id);
    console.log('====================================');
    this.cathegorieService.delateCathegorie(this.id).subscribe((data)=>{
      this.id = '';
      this.cathegorieGetData
      this.route.navigate(['/adminCathegorie']) 
      this.getCathegorie();
    })
  }

  public add(){
    this.cathegorieGetData = {type: ''}
    this.showEdit = false;
    this.showAdd = true;
  }
}
