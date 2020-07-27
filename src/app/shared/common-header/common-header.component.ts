import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-common-header",
  templateUrl: "./common-header.component.html",
  styleUrls: ["./common-header.component.css"],
})
export class CommonHeaderComponent implements OnInit {
  @Input() title: string;
  @Output() openModal: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  add() {
    this.openModal.emit();
  }
}
