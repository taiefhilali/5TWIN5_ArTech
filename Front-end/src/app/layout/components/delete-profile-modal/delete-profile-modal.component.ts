import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'app/auth/models';
import { AuthenticationService } from 'app/auth/service';

@Component({
  selector: 'app-delete-profile-modal',
  templateUrl: './delete-profile-modal.component.html',
  styleUrls: ['./delete-profile-modal.component.scss']
})
export class DeleteProfileModalComponent implements OnInit {
  public currentUser: User;
  userId:any;
   constructor(public modal: NgbActiveModal , private authService:AuthenticationService , private route:Router) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(x => (this.currentUser = x));
    this.userId=this.currentUser.id
  }

deleteAccount(){
  console.log("🚀 ~ file: delete-profile-modal.component.ts:23 ~ DeleteProfileModalComponent ~ deleteAccount ~ this.currentUser.id:", this.currentUser.id)
  this.authService.deleteAccount(this.userId,this.currentUser.username).subscribe({
    next:(res)=>{
      this.modal.close();
      alert("Profile deleted successfully");
      this.authService.logout();
      this.route.navigate(['/'])

    },error:(error)=>{
      alert("Please Activate your account first")
      console.log("🚀 ~ file: sign-up.component.ts:34 ~ SignUpComponent ~ this.authService.signup ~ err:", error)

    }
  })

}
  

}
