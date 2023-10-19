import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'app/auth/service';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss']
})
export class ActivateAccountComponent implements OnInit {

  constructor(private route: ActivatedRoute,private authService:AuthenticationService,private router:Router) { }
  username:any;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const username = params['username'];
      this.authService.enableUser(username).subscribe({
        next:(res)=>{
          alert("Account Activated successfully");

        },error:(error)=>{
          alert(error.message)
          console.log("🚀 ~ file: sign-up.component.ts:34 ~ SignUpComponent ~ this.authService.signup ~ err:", error)
  
        }
      })


    });
  }

  goBack(){
    this.router.navigate(['/'])
  }

}
