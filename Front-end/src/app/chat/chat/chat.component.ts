import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService, UserService } from 'app/auth/service';
import { ChatService } from 'app/auth/service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit  {

  @ViewChild('popup', {static: false}) popup: any;

  public roomId: string;
  public messageText: string;
  public messageArray: { user: string, message: string }[] = [];
  private storageArray = [];
  public showScreen = false;
  public phone: string;
  public currentUser;
  public selectedUser;
  public user;
public username;
  public userList = [

  ];


  constructor(
    private modalService: NgbModal,
    private chatService: ChatService,
    private _user:AuthenticationService,
    private _route:ActivatedRoute
  ) {
  }

  ngOnInit(): void {

    this._user.currentUser.subscribe(user => {
      this.currentUser = user;
    });

    //username of sender
this.username=this._route.snapshot.params.username;
this._user.getByUsername(this.username).subscribe((data)=>{
this.user=data
console.log(this.user.username)});
(error) => {
  console.log(error);
};

    this.chatService.getMessage()
      .subscribe((data: { user: string, room: string, message: string }) => {
         this.messageArray.push(data);
        if (this.username) {
          setTimeout(() => {
            this.storageArray = this.chatService.getStorage();
            const storeIndex = this.storageArray
              .findIndex((storage) => storage.unsername === this.username);
            this.messageArray = this.storageArray[storeIndex].chats;
          }, 500);
        }
      });
  }

  // ngAfterViewInit(): void {
  //   this.openPopup(this.popup);
  // }

  openPopup(content: any): void {
    this.modalService.open(content, {backdrop: 'static', centered: true});
  }

  // login(dismiss: any): void {
  //   this.currentUser = this.userList.find(user => user.phone === this.phone.toString());
  //   this.userList = this.userList.filter((user) => user.phone !== this.phone.toString());

  //   if (this.currentUser) {
  //     this.showScreen = true;
  //     dismiss();
  //   }
  // }

  // selectUserHandler(phone: string): void {
  //   this.unsername = this.selectedUser.unsername[this.currentUser.id];
  //   this.messageArray = [];

  //   this.storageArray = this.chatService.getStorage();
  //   const storeIndex = this.storageArray
  //     .findIndex((storage) => storage.unsername === this.unsername);

  //   if (storeIndex > -1) {
  //     this.messageArray = this.storageArray[storeIndex].chats;
  //   }

  //   this.join(this.currentUser.name,);
  // }

  join(username: string): void {
    this.chatService.joinRoom({user: username, room: this.username});
  }

  sendMessage(): void {
    this.chatService.sendMessage({
      user: this.currentUser.username,
      room: this.username,
      message: this.messageText
    });

    this.storageArray = this.chatService.getStorage();
    const storeIndex = this.storageArray
      .findIndex((storage) => storage.unsername === this.username);

    if (storeIndex > -1) {
      this.storageArray[storeIndex].chats.push({
        user: this.currentUser.name,
        message: this.messageText
      });
    } else {
      const updateStorage = {
        unsername: this.username,
        chats: [{
          user: this.currentUser.name,
          message: this.messageText
        }]
      };

      this.storageArray.push(updateStorage);
    }

    this.chatService.setStorage(this.storageArray);
    this.messageText = '';
  }

}