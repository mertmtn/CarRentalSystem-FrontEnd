import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { CarService } from 'src/app/services/car/car.service';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})

export class ColorComponent implements OnInit {

  colors: Color[]=[];

  filterColorText='';
  constructor(private colorService:ColorService ) { }

  ngOnInit(): void {
    this.colorService.getColors().subscribe((response)=>{
      this.colors=response.data;

    });
  }




}
