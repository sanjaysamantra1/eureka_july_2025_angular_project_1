import { Component, ViewEncapsulation } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { Directives } from '../directives/directives';
import { MyModal } from '../my-modal/my-modal';
import { UserList } from '../user-list/user-list';
import { EmployeeList } from '../employee-list/employee-list';
import { ProductList } from '../product-list/product-list';
import { Demo1 } from '../demo1/demo1';
import { PipesDemo } from '../pipes-demo/pipes-demo';
import { ParentDemo } from '../parent-demo/parent-demo';
import { TrafficDemo } from '../traffic-demo/traffic-demo';
import { Math1Demo } from '../math1-demo/math1-demo';
import { Math2Demo } from '../math2-demo/math2-demo';
import { HttpDemo1 } from '../http-demo1/http-demo1';
import { Products } from '../products/products';
import { CommentList } from '../comment-list/comment-list';

@Component({
  selector: 'app-body',
  imports: [
    // Databinding,
    // Directives
    // MyModal
    // UserList
    // EmployeeList
    // ProductList
    // Demo1
    // PipesDemo
    // TrafficDemo,
    // ParentDemo
    // Math1Demo,
    // Math2Demo
    // HttpDemo1
    // Products
    CommentList
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
  // encapsulation: ViewEncapsulation.Emulated
})
export class Body {

}
