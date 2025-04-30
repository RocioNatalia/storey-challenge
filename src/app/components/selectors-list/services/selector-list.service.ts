import { Injectable } from '@angular/core';
import { list } from './selectors-list';

@Injectable({
  providedIn: 'root',
})
export class SelectorListService {
  constructor() {}

  getSelectorsList() {
    return list;
  }
}
