import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-influence',
  templateUrl: './influence.component.html',
  styleUrls: ['./influence.component.css']
})
export class InfluenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedSocks = 'optionS';
  selectedC = 'optionFarbe';
  selectedA = 'optionF';
  selectedM = 'optionL';
  
}