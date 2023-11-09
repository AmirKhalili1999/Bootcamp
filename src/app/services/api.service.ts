import {Injectable} from "@angular/core";
import {GlobalVariableService} from "./global-variable.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(
    private gvs: GlobalVariableService,
    private http: HttpClient
  ) {
  }

  // admins  -----------------------------------------------------------------------
  getAdmins() {
    return this.http.get(`${this.gvs.admin}/list`);
  }

  searchAdmin(body: any) {
    return this.http.post(`${this.gvs.admin}/search`, body);
  }

  createAdmin(body: any) {
    return this.http.post(`${this.gvs.admin}/create`, body);
  }

  getAdmin(id: any) {
    return this.http.get(`${this.gvs.admin}/one/${id}`);
  }

  updateAdmin(id: any, body: any) {
    return this.http.put(`${this.gvs.admin}/update/${id}`, body);
  }

  deleteAdmin(id: any) {
    return this.http.delete(`${this.gvs.admin}/delete/${id}`);
  }

  login(body: any) {
    return this.http.post(`${this.gvs.admin}/login`, body);
  }
}
