import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaifuSearchComponent } from './waifu-search.component';

describe('WaifuSearchComponent', () => {
  let component: WaifuSearchComponent;
  let fixture: ComponentFixture<WaifuSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaifuSearchComponent]
    });
    fixture = TestBed.createComponent(WaifuSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
