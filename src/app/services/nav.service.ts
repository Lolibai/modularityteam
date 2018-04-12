import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { routes } from '../app-routing.module';

@Injectable()
export class NavService {
    users: User[] = [];
    constructor(private router: Router) { }

    public navToPage(id: string) {
        const result = routes.find(e => e.path === id );
        if (result) {
            this.router.navigate([id]);
        } else {
            console.log('there is wrong name!');
        }
    }
}
