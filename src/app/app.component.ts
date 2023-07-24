import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practical5';

  users:user[] = [];
}

export type user = {
  name: string,
  email: string,
  department: string,
  password: string,
  designation: string,
  salary: number,
  createdAt: Date
}