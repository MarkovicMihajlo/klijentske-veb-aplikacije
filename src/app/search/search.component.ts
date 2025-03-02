import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { FlightModel } from '../../models/flight.model';
import { NgIf } from '@angular/common';
import { FlightService } from '../../services/flight.service';
import {MatButtonModule} from '@angular/material/button';
import { UtilsService } from '../../services/utils.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-search',
  imports: [MatTableModule, NgIf, MatButtonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  displayedColumns: string[] = ['id', 'destination', 'flightNumber', 'scheduledAt', 'actions'];
  dataSource: FlightModel[] | null = null

  public constructor(public utils: UtilsService){
    FlightService.getFlights(0, 8).then(rsp=>this.dataSource = rsp.data.content)
  }

}
