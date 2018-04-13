import { Component, OnInit } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';
import { Title } from '@angular/platform-browser';
import { User } from '../models/user.model';
import { UsersService } from '../services/test.service';


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


  constructor(public usersService: UsersService) { }

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
  delAll() {
    this.usersService.delAll().subscribe(res => {
      console.log(res);
      this.profiles = res;
    });
  }
  delOne(id) {
    this.usersService.delOne(id).subscribe(res => {
      console.log(res);
      this.getAll();
    });
  }

  ngOnInit(): void {
  }

}
