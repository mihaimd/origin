import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Game120Page } from './game1-20.page';

describe('Game120Page', () => {
  let component: Game120Page;
  let fixture: ComponentFixture<Game120Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Game120Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
