import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  public getUserId(){
    return "admin";
  }

}
