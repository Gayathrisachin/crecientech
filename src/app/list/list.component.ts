import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/user.model';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users: User[];

  constructor(private router: Router, private apiService: UserService) { }

  ngOnInit() {
    // if(!window.localStorage.getItem('token')) {
    //   this.router.navigate(['form']);
    //   return;
    // }
    this.apiService.getUsers()
      .subscribe( (data:any) => {
        this.users = data
      });
  }



  editUser(user: User): void {
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['update/id']);
  };

 
}
