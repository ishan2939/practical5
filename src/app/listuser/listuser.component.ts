import { Component, Input } from '@angular/core';
import { user } from '../app.component';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent {

  @Input() users: user[] = [];
}
