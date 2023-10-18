import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'environments/environment';
import { User, Role } from 'app/auth/models';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  //public
  public currentUser: Observable<User>;

  //private
  private currentUserSubject: BehaviorSubject<User>;

  /**
   *
   * @param {HttpClient} _http
   * @param {ToastrService} _toastrService
   */
  constructor(private _http: HttpClient, private _toastrService: ToastrService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // getter: currentUserValue
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  /**
   *  Confirms if user is admin
   */
  get isAdmin() {
    return this.currentUser && this.currentUserSubject.value.role === Role.Admin;
  }

  /**
   *  Confirms if user is client
   */
  get isTeacher() {
    return this.currentUser && this.currentUserSubject.value.role === Role.Teacher;
  }

  /**
   * User login
   *
   * @param email
   * @param password
   * @returns user
   */

  signup(userObj:any){
    return this._http.post<any>(`${environment.apiUrl}/user/register` , userObj)
  }

  deleteAccount(userId:any,username:any){
    return this._http.delete<any>(`${environment.apiUrl}/user/delete/${username}/${userId}` )
  }
  
  login(userObj: String) {
    return this._http
      .post<any>(`${environment.apiUrl}/user/login`, userObj)
      .pipe(
        map(response => {
          // Check if the response contains a JWT token
          if (response && response.access_token) {
            // Store user details and JWT token in local storage
            const user = {
              username: response.user.username,
              email:response.user.email,
              firstName: response.user.firstName,
              lastName: response.user.lastName,
              role: response.user.role,
              id: response.user.id,
              github: response.user?.github || '',
              facebook: response.user?.facebook || '',
              twitter: response.user?.twitter || '',
              instagram: response.user?.instagram || '',
              description: response.user?.description || '',
              address: response.user?.address|| '',
              phone: response.users?.phone || '',
            };
  
            localStorage.setItem('access_token', response.access_token);
            localStorage.setItem('currentUser', JSON.stringify(user));
  
            // Display welcome toast
            setTimeout(() => {
              this._toastrService.success(
                'You have successfully logged in as an ' +
                user.role +
                ' user to Vuexy. Now you can start to explore. Enjoy! 🎉',
                '👋 Welcome, ' + user.firstName + '!',
                { toastClass: 'toast ngx-toastr', closeButton: true }
              );
            }, 2500);
  
            // Notify subscribers with the user details
            this.currentUserSubject.next(user);
          }
  
          return response;
        })
      );
  }
  
  
  /**
   * User logout
   *
   */
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('access_token');

    // notify
    this.currentUserSubject.next(null);
  }

  edit(userObj:any,id:any){
    return this._http.put<any>(`${environment.apiUrl}/user/update/${id}` , userObj)
    .pipe(
      map((res) => {
        // Update the currentUser object with the new data
        const updatedUser = {
          username: res.username,
          firstName: res.firstName,
          lastName: res.lastName,
          email:res.email,
          role: res.role,
          userName: res.userName,
          id: res.id,
          github: res.github,
          facebook: res.facebook,
          twitter: res.twitter,
          instagram: res.instagram,
          description: res.description,
          address: res.address,
          phone: res.phone
        };
  
        // Store user details and JWT token in local storage
        localStorage.setItem('currentUser', JSON.stringify(updatedUser));
  
        // Notify subscribers with the updated user details
        this.currentUserSubject.next(updatedUser);
  
        return res; // You can return the response if needed
      })
    
    )

}

enableUser(username:any){
  return this._http.put<any>(`${environment.apiUrl}/user/enableUser` , username)
}


getAllusers(){
  return this._http.get<any>(`${environment.apiUrl}/user/all`)
}

  }

