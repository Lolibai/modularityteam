import { Component, OnInit, Input } from '@angular/core';
import { routes } from '../../app-routing.module';
import { User } from '../../models/user.model';
import { NavService } from '../../services/nav.service';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/test.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: any;

  constructor(public route: ActivatedRoute, public userService: UsersService) { }

  ngOnInit(): void {
    this.getUser2();
  }

  getUser2(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => {console.log(user); this.user = user; });
  }
}
