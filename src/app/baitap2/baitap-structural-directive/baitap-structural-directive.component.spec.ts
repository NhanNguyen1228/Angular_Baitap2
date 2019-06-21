import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapStructuralDirectiveComponent } from './baitap-structural-directive.component';

describe('BaitapStructuralDirectiveComponent', () => {
  let component: BaitapStructuralDirectiveComponent;
  let fixture: ComponentFixture<BaitapStructuralDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapStructuralDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapStructuralDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
