import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

type Person = {
  id: number;
  name: string;
};

export type Student = Person;
export type Teacher = Person;

export class CourseModel {
  id: number;
  name: string;
  description: string;
  city: string;
  startDate: NgbDateStruct;
  endDate: NgbDateStruct;
  students?: Student[];
  teacher?: Teacher;
}
