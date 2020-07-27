import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { TeacherModel } from "./teacher-model";

@Injectable({
  providedIn: "root",
})
export class TeacherService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`${environment.API_URL}teachers`);
  }

  addTeacher(teacher: TeacherModel): Observable<any> {
    return this.http.post(`${environment.API_URL}teachers`, teacher);
  }

  editTeacher(id: number, teacher: TeacherModel): Observable<any> {
    return this.http.put(`${environment.API_URL}teachers/${id}`, teacher);
  }

  deleteTeacher(id: number): Observable<any> {
    return this.http.delete(`${environment.API_URL}teachers/${id}`);
  }
}
