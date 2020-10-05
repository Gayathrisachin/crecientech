import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../Models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:User
url:string="http://localhost:3000/user"
id:number
  constructor(private http:HttpClient) { }


  setCurrentId(id){
    this.id=id;
  }
  getCurrentId(){
   return  this.id;
  }
  getUsers() : Observable<User> {
    return this.http.get<User>(this.url);
  }
  createAdmission(data:User):Observable<any>{
    // this is using api
   //// return this.http.post<User[]>(this.url+'/addstudent',data)
  //  commented "return" is usin json
     return this.http.post<User[]>(this.url+'/',data)
  }


  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.url + '/' + user.id, user);
  }

  getById(id):Observable<User>{
    return this.http.get<User>(this.url + '/' + id)
   
  }
 
}
