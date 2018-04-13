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
    getUser(id) {
        return this.http.get (`http://192.168.88.210:8080/api/user/${id}`);
    }
    getAll() {
        return this.http.get('http://192.168.88.210:8080/api/users');
    }
    delAll() {
        return this.http.delete('http://192.168.88.210:8080/api/users');
    }
    delOne(id) {
        return this.http.delete (`http://192.168.88.210:8080/api/user/${id}`);
    }
    editInput(id: number, name: string) {
        return this.http.put (`http://192.168.88.210:8080/api/user`, {id, name});
}
}
