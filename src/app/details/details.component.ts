import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightModel } from '../../models/flight.model';
import { FlightService } from '../../services/flight.service';
import { JsonPipe, NgIf } from '@angular/common';
import { UtilsService } from '../../services/utils.service';
import { LoadingComponent } from "../loading/loading.component";
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-details',
  imports: [JsonPipe, NgIf, LoadingComponent, MatCardModule, MatListModule, MatButtonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  
  public flight : FlightModel | null = null
  public constructor (private route : ActivatedRoute, public utils: UtilsService){
    route.params.subscribe(params=>{
      FlightService.getFlightById(params['id']).then(rsp =>{
        this.flight = rsp.data
      })
    })
  }

}
