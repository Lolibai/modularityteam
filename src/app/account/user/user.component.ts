import { Component, OnInit, Input, OnChanges } from '@angular/core';
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

  constructor(public route: ActivatedRoute, public userService: UsersService) { }

  ngOnInit(): void {}
}
