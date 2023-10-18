import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/auth/service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  Users:any;
  constructor(private authService:AuthenticationService) { 
    this.authService.getAllusers().subscribe({
      next:(res)=>{
        this.Users=res
        console.log("🚀 ~ file: users.component.ts:17 ~ UsersComponent ~ this.authService.getAllusers ~ res:", res)
      },error:(error)=>{
        alert(error.message)
        console.log("🚀 ~ file: sign-up.component.ts:34 ~ SignUpComponent ~ this.authService.signup ~ err:", error)

      }
    })
  }

  ngOnInit(): void {
  
  }

}
