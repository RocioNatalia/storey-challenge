import { Component } from '@angular/core';
import { LateralMenuComponent } from './lateral-menu/lateral-menu.component';
import { SelectorsListComponent } from '../selectors-list/selectors-list.component';

@Component({
  selector: 'app-layout',
  imports: [LateralMenuComponent , SelectorsListComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
