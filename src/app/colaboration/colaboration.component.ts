import { Component, OnInit } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';
import { Title } from '@angular/platform-browser';
import { User } from '../models/user.model';
import { UsersService } from '../services/test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colaboration',
  templateUrl: './colaboration.component.html',
  styleUrls: ['./colaboration.component.scss']
})
export class ColaborationComponent implements OnInit {
  input;
  title: string;
  arr = [];
  id;
  item;
  users: User[] = [];
  userName: '';
  profiles;


  constructor(public usersService: UsersService, public router: Router) { }

  // addUser() {
  //   this.usersService.addUser({name: this.userName}).subscribe(res => {
  //     console.log(res);
  //   });
  //   this.userName = '';
  // }
  addUser() {
    this.usersService.addUser({name: this.userName}).subscribe(res => {
      console.log(res);
    });
    this.userName = '';
  }
  getUser(id) {
    this.usersService.getUser(id).subscribe(res => {
      this.item = res;
      console.log(this.item.name);
    });
  }
  getAll() {
    this.usersService.getAll().subscribe(res => {
      console.log(res);
      this.profiles = res;
    });
  }

  go(id) {
    this.router.navigate(['/account/user', id]);
    this.usersService.getUser(id)
      .subscribe(user => {console.log(user); this.usersService.user = user; });
  }

  //get user 
  getUsers() {
    this.usersService.getUsers().subscribe(res => {
      console.log(res);
      this.profiles = res;
    });

  }
  //delete all user

  delAll() {
    this.usersService.delAll().subscribe(res => {
      console.log(res);
      this.getUsers();
    });
  }
// delete one user
  delOne(id) {
    this.usersService.delOne(id).subscribe(res => {
      console.log(res);
      this.getUsers();
    });
  }

  //input take name arr
  editInput(item) {
    this.title = item.name;
    this.id = item._id;
  }
// save new name 
  save () {
    this.usersService.editArr(this.id,this.title).subscribe(res => {
      console.log(res);
      this.getUsers();
    });
  }


  ngOnInit(): void {
    this.getUsers();
  }

  

}
