import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
    constructor(private http: HttpClient) { }

    // getUsers() {
    //     this.http.get('http://192.168.88.210:8080/users');
    // }

    addUser(user: any) {
        return this.http.post('http://192.168.88.210:8080/api/user', user);
    }
    getUser() {
        return this.http.get('http://192.168.88.210:8080/api/user/1');
    }
    getAll() {
        return this.http.get('http://192.168.88.210:8080/api/users');
    }
    delAll() {
        return this.http.delete('http://192.168.88.210:8080/api/users');
    }
}
