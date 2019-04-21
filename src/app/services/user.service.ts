import {User} from "../models/User.model";
import {Subject} from "rxjs/Rx";

export class UserService{
  private users: User[] = [
    {
      firstName:'James',
      lastName:'Smith',
      email:'james@Smith.com',
      drinkPreference:'Coca',
      hobbies:[
        'coder',
        'dégustation de café',
        'jeux vidéos'
      ]
    }
  ];
  userSubject = new Subject<User[]>();

  emitUsers(){
    this.userSubject.next(this.users.slice())
  }

  addUser(user:User){
    this.users.push(user);
    this.emitUsers()
  }
}
