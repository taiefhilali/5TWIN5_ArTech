import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ProfileService } from 'app/main/pages/profile/profile.service';
import { AuthenticationService } from 'app/auth/service';
import { User } from 'app/auth/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit, OnDestroy {
  // public
  public contentHeader: object;
  public data: any;
  public toggleMenu = true;
  public Monthly = false;
  public toggleNavbarRef = false;
  public loadMoreRef = false;
  editMode = false;
  public currentUser: User;
  profileForm: FormGroup;

  // private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {PricingService} _pricingService
   */
  constructor(
    private _pricingService: ProfileService, 
    private sanitizer: DomSanitizer,
    private fb: FormBuilder,
    private authService:AuthenticationService,
    ) {
      this.authService.currentUser.subscribe(user => {
        this.currentUser = user;
      });
      this.profileForm = this.fb.group({
        password:[this.currentUser.password],
        username:[this.currentUser.username],
        role:[this.currentUser.role],
        firstName: [this.currentUser.firstName, [Validators.required]], 
        lastName: [this.currentUser.lastName, [Validators.required]],
        email: [this.currentUser.email, [Validators.required]],
        description:[this.currentUser.description],
        address:[this.currentUser.address],
        phone:[this.currentUser.phone],
        github:[this.currentUser.github],
        facebook:[this.currentUser.facebook],
        twitter:[this.currentUser.twitter],
        instagram:[this.currentUser.instagram]
      });
    this._unsubscribeAll = new Subject();
  }

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Load More
   */
  loadMore() {
    this.loadMoreRef = !this.loadMoreRef;
    setTimeout(() => {
      this.loadMoreRef = !this.loadMoreRef;
    }, 2000);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {  
    console.log("🚀 ~ file: profile.component.ts:59 ~ ProfileComponent ~  this.profileForm:",  this.profileForm)

    this._pricingService.onPricingChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.data = response;
    });

    // content header
    this.contentHeader = {
      headerTitle: 'Profile',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Pages',
            isLink: true,
            link: '/'
          },
          {
            name: 'Profile',
            isLink: false
          }
        ]
      }
    };
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  saveChanges() {
    if(this.editMode){

      if (this.profileForm.invalid) {
        return;
      }
  
      const userObj = this.profileForm.value;
  
        this.authService.edit(userObj,this.currentUser.id).subscribe({
          next:(res)=>{
            alert("Profile edited successfully");
          },error:(error)=>{
            alert(error.message)
            console.log("🚀 ~ file: sign-up.component.ts:34 ~ SignUpComponent ~ this.authService.signup ~ err:", error)
          }
        })
    this.editMode = false;

    }
    
  }

  selectAvatar(avatarUrl: string) {
    this.profileForm.get('password').setValue(avatarUrl);
  }

}
