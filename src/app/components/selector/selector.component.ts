import { Component, Input } from '@angular/core';
import { Selector } from '../selectors-list/services/selectors-list';

@Component({
  selector: 'app-selector',
  imports: [],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.scss',
})
export class SelectorComponent {
  @Input() selectorInformation!: Selector;
}
