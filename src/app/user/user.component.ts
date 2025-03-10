import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { UserModel } from '../../models/user.model';
import { MatTableModule } from '@angular/material/table';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-user',
  imports: [NgIf, NgFor, MatButtonModule, MatCardModule, MatTableModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  public displayedColumns: string[] = ['id', 'destination', 'flightNumber', 'airline', 'count', 'price', 'total', 'status', 'rating', 'actions'];
  public user : UserModel | null = null

  constructor(private router : Router){
    if(!UserService.getActiveUser()){
      router.navigate(['/home'])
      return 
    }

    this.user = UserService.getActiveUser()

  }

  public doChangePassword(){
    
    const newPassword = prompt('Enter your new password')
    if(newPassword == '' || newPassword == null){
      alert('Password cant be empty')
      return
    }
    alert(UserService.changePassword(newPassword) ? 'Password has been changed' : 'Failed to change password')

  }

}
