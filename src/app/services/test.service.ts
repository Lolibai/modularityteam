import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UsersService {
  user: any = "";
  constructor(private http: HttpClient) {}

  addUser(user: any) {
    return this.http.post("http://192.168.88.131:8081/api/user", user);
  }
  getUser(id) {
    return this.http.get(`http://192.168.88.131:8081/api/user/${id}`);
  }
  getAll() {
    return this.http.get("http://192.168.88.131:8081/api/users");
  }
  editInput(id: number, name: string) {
    return this.http.put(`http://192.168.88.131:8081/api/user`, { id, name });
  }
  getUsers() {
    return this.http.get("http://192.168.88.131:8081/api/users");
  }

  delOne(id) {
    return this.http.delete(`http://192.168.88.131:8081/api/user/${id}`);
  }
  delAll() {
    return this.http.delete("http://192.168.88.131:8081/api/users");
  }

  editArr(id: number, name: string) {
    return this.http.put("http://192.168.88.131:8081/api/user", { id, name });
  }
}
