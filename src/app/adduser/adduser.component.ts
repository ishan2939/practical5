import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { user } from '../app.component';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {

  @Input() users: user[] = [];

  onSubmit(form: NgForm){
    let newUser:user = form.value;
    newUser.createdAt = new Date();

    console.log(newUser)
    this.users.push(newUser);
    this.reset(form);
  }

  reset(form: NgForm){
    form.reset();
  }

}
