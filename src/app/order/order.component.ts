import { Component } from '@angular/core';
import { FlightModel } from '../../models/flight.model';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from '../../services/flight.service';
import { UtilsService } from '../../services/utils.service';
import { MatCardModule } from '@angular/material/card';
import { NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-order',
  imports: [MatCardModule, NgIf, MatButtonModule, MatInputModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  public flight : FlightModel | null = null
    public constructor (private route : ActivatedRoute, public utils: UtilsService){
      route.params.subscribe(params=>{
        FlightService.getFlightById(params['id']).then(rsp =>{
          this.flight = rsp.data
        })
      })
    }

    public doOrder(){}

}
