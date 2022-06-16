import { Component, Input, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/Client/client.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {
  @Input() isToolbarVisible: boolean = true;

  displayedColumns: string[] = ['id', 'name', 'surname', 'email'];

  // public clients = [
  //   { id: 1, name: 'Jan', surname: 'Kowalski'},
  //   { id: 2, name: 'Adam', surname: 'Nowak'},
  //   { id: 3, name: 'Anna', surname: 'Kwiatkowska'},
  // ];

  constructor(public clientService: ClientService) { }

  ngOnInit(): void {

  }

}
