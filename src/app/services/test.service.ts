import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/operator/map'
  
@Injectable()
export class UserService{
  
    constructor(private http: HttpClient){ }
      

getUsers() {
    return this.http.get ('http://192.168.88.210:8080/api/users');
}

delOne(id) {
    return this.http.delete (`http://192.168.88.210:8080/api/user/${id}`);
  
}
delAll() {
    return this.http.delete ('http://192.168.88.210:8080/api/users');
}

editArr(id: number ,name: string) {
        return this.http.put ("http://192.168.88.210:8080/api/user",{id,name});
        
}
  
}