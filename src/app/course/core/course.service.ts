import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CourseModel } from "./courseModel";

@Injectable({
  providedIn: "root",
})
export class CourseService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`${environment.API_URL}courses`);
  }

  addCourse(course: CourseModel): Observable<any> {
    return this.http.post(`${environment.API_URL}courses`, course);
  }

  editCourse(id: number, course: CourseModel): Observable<any> {
    return this.http.put(`${environment.API_URL}courses/${id}`, course);
  }

  deleteCourse(id: number): Observable<{}> {
    return this.http.delete(`${environment.API_URL}courses/${id}`);
  }

  getCourseById(id: number): Observable<any> {
    return this.http.get(`${environment.API_URL}courses/${id}`);
  }
}
