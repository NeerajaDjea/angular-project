import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  showStatus(name) {
    console.log(" Hi this works !", name, "Well done")
  }



  constructor() { }
}
