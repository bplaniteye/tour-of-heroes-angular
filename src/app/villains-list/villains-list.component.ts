import { Component, OnInit } from '@angular/core';
import Villain from '../types/villain.type';

@Component({
  selector: 'app-villains-list',
  templateUrl: './villains-list.component.html',
  styleUrls: ['./villains-list.component.css']
})
export class VillainsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  villains : Villain[] = [
    { id: 1, name: 'Lex Luthor' },
    { id: 2, name: 'Joker' },
    {id : 3, name : 'Venom'},
  ];
  
}
