import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorsListComponent } from './selectors-list.component';

describe('SelectorsListComponent', () => {
  let component: SelectorsListComponent;
  let fixture: ComponentFixture<SelectorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectorsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
