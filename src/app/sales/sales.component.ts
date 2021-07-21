import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  checkedWithCampagne = false;
  checkedWithoutCampagne = false;

  selectedT = 'optionPeriode';
  selectedQ = 'optionQ1';
  selectedM = 'optionJanuar';
}
