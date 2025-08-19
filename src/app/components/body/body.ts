import { Component, ViewEncapsulation } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { Directives } from '../directives/directives';
import { MyModal } from '../my-modal/my-modal';
import { UserList } from '../user-list/user-list';
import { EmployeeList } from '../employee-list/employee-list';

@Component({
  selector: 'app-body',
  imports: [
    // Databinding,
    // Directives
    // MyModal
    UserList
    // EmployeeList
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
  // encapsulation: ViewEncapsulation.Emulated
})
export class Body {

}
