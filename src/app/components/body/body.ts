import { Component, ViewEncapsulation } from '@angular/core';
import { Databinding } from '../databinding/databinding';

@Component({
  selector: 'app-body',
  imports: [
    Databinding
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
  // encapsulation: ViewEncapsulation.Emulated
})
export class Body {

}
