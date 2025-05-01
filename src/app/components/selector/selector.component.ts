import { Component, Input } from '@angular/core';
import { Selector, Supply } from '../selectors-list/services/selectors-list';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-selector',
  imports: [CommonModule, FormsModule , ReactiveFormsModule],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.scss',
})
export class SelectorComponent {
  @Input() selectorInformation!: Selector;

  filterText: string = '';

  filteredSupplies(fullsplies: Supply[]) {
    if (!fullsplies || fullsplies.length < 3) {
      return fullsplies;
    }
    if (!this.filterText) {
      return [];
    }
    return fullsplies
      .filter(
        (supplier) =>
          supplier.address
            .toLowerCase()
            .includes(this.filterText.toLowerCase()) ||
          supplier.location
            .toLowerCase()
            .includes(this.filterText.toLowerCase()) ||
          supplier.alias.toLowerCase().includes(this.filterText.toLowerCase())
      )
      .slice(0, 2); // ✅ solo devuelve los primeros 2
  }
}
