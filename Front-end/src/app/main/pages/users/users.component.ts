import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/auth/service';
import { CommonModule } from '@angular/common';
import { ChatService } from 'app/auth/service/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  Users:any;
  searchUsername: string = '';
  filteredUsers: any[]; 
currentUser:any;
  constructor(private authService:AuthenticationService,private chatService:ChatService,private Route:Router) { 
    this.authService.getAllusers().subscribe({
      next:(res)=>{
        this.Users=res
        this.filteredUsers=res
        console.log("🚀 ~ file: users.component.ts:17 ~ UsersComponent ~ this.authService.getAllusers ~ res:", res)
      },error:(error)=>{
        alert(error.message)
        console.log("🚀 ~ file: sign-up.component.ts:34 ~ SignUpComponent ~ this.authService.signup ~ err:", error)

      }
    })
    this.authService.currentUser.subscribe((user) => {
      this.currentUser = user;
    });
  }

  ngOnInit(): void {
  
  }

  filterUsers() {
    this.filteredUsers = this.Users.filter((user) => {
      const usernameMatch = user.username.toLowerCase().includes(this.searchUsername.toLowerCase());
      return usernameMatch ;
    });
  }


  

}
