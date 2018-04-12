import { Component, OnInit } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';
import { Title } from '@angular/platform-browser';
import { User } from '../modules/user.model';
import { UserService } from '../services/test.service';



@Component({
  selector: 'app-colaboration',
  templateUrl: './colaboration.component.html',
  styleUrls: ['./colaboration.component.scss']
})
export class ColaborationComponent implements OnInit {
  input;
  title: string = '';
  arr = [];
  id;
  users: User[] = [];
  profiles: any = [];
  userName: '';
  constructor(public usersService: UserService) { }


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
