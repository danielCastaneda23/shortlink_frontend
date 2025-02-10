import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  imports: [ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.sass',
})
export class UserComponent {
  @Input() dashboardInfo: string = '';
  @Output() dashboardReturnInfo = new EventEmitter<string>()

  formHandler = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required),
  });
  constructor(private userService: UserService) {}

  async handlerUserService() {
    const payload = {
      email: this.formHandler.value.email,
      password: this.formHandler.value.password,
    };


      this.userService.loginUser({ payload });

    // You can now use this.userService to access UserService methods
  }
}
