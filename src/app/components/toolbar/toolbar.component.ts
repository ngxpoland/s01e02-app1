import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {

  }

  public add(): void {
    console.log("add not implemented yet!");
  }

  public edit(): void {
    console.log("edit not implemented yet!");
  }

  public delete(): void {
    console.log("delete not implemented yet!");
  }

}
