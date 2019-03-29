import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAddedDialogComponent } from './hero-added-dialog.component';

describe('HeroAddedDialogComponent', () => {
  let component: HeroAddedDialogComponent;
  let fixture: ComponentFixture<HeroAddedDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroAddedDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroAddedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
