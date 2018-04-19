import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  [x: string]: any;
  usersService: any;
  constructor() {
    
   }

   ngOnInit(): void {
    this.getUsers();
  }

   getUsers(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.usersService.getUsers(id)
      .subscribe(hero => this.hero = hero);
  }


}


