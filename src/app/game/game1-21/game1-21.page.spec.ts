import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Game121Page } from './game1-21.page';

describe('Game121Page', () => {
  let component: Game121Page;
  let fixture: ComponentFixture<Game121Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Game121Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
