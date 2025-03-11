import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { FlightService } from '../../services/flight.service';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-signup',
  imports: [MatButtonModule, MatFormFieldModule, MatCardModule, MatInputModule, RouterLink, FormsModule, MatSelectModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  public destinationList : string[] = []
  public email = ''
  public password = ''
  public repeatPassword = ''
  public firstName = ''
  public lastName = ''
  public phone = ''
  public address = ''
  public destination = ''

  public doSignup(){

  }

  public constructor(){
    FlightService.getDestinations().then(rsp=> this.destinationList = rsp.data)
  }

}
