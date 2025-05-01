import { Component, OnInit } from '@angular/core';
import { SelectorComponent } from '../selector/selector.component';
import { SelectorListService } from './services/selector-list.service';
import { Selector } from './services/selectors-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-selectors-list',
  imports: [CommonModule, SelectorComponent],
  templateUrl: './selectors-list.component.html',
  styleUrl: './selectors-list.component.scss',
})
export class SelectorsListComponent implements OnInit {
  selectorsList: Selector[] = [];
  constructor(private selectorListService: SelectorListService) {}

  ngOnInit(): void {
    this.selectorsList = this.selectorListService.getSelectorsList();
  }
}
