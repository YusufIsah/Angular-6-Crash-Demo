import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) {
   }
   getUsersOnline() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
   }
   getUsersLocal() {
     return this.http.get('http://localhost:8080/AngularBackEnd/rs/emps');
   }
   getUserLocal(luserId) {
    return this.http.get('http://localhost:8080/AngularBackEnd/rs/emps/' + luserId);
  }
   getUser(userid) {
      return this.http.get('https://jsonplaceholder.typicode.com/users/' + userid);
   }
   getPosts() {
     return this.http.get('https://jsonplaceholder.typicode.com/posts');
   }
   changeMessage(message: string) {
    this.messageSource.next(message);
  }

}
