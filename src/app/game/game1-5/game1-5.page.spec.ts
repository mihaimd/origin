import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Game15Page } from './game1-5.page';

describe('Game15Page', () => {
  let component: Game15Page;
  let fixture: ComponentFixture<Game15Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Game15Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
