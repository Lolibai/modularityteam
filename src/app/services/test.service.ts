import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UsersService {
  user: any = "";
  constructor(private http: HttpClient) {}

  addUser(user: any) {
    return this.http.post("http://localhost:8080/api/user", user);
  }
  getUser(id) {
    return this.http.get(`http://localhost:8080/api/user/${id}`);
  }
  getAll() {
    return this.http.get("http://localhost:8080/api/users");
  }
  editInput(id: number, name: string) {
    return this.http.put(`http://localhost:8080/api/user`, { id, name });
  }
  getUsers() {
    return this.http.get("http://localhost:8080/api/users");
  }

  delOne(id) {
    return this.http.delete(`http://localhost:8080/api/user/${id}`);
  }
  delAll() {
    return this.http.delete("http://localhost:8080/api/users");
  }

  editArr(id: number, name: string) {
    return this.http.put("http://localhost:8080/api/user", { id, name });
  }
}
