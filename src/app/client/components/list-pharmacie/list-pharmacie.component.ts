import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-pharmacie',
  templateUrl: './list-pharmacie.component.html',
  styleUrls: ['./list-pharmacie.component.css']
})
export class ListPharmacieComponent implements OnInit {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor() { }

  ngOnInit(): void {
  }

}
