import { Component, OnInit, Input } from '@angular/core';
import { routes } from '../../app-routing.module';
import { User } from '../../models/user.model';
import { NavService } from '../../services/nav.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  // route: any;
  // userService: any;
  @Input() name: User;

  constructor() {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.userService.getUser(id)
    // .subscribe(user => this.name = name);
  }
}
