import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { note } from './note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {


  constructor() {  }

  ngOnInit(): void {

  }

}
