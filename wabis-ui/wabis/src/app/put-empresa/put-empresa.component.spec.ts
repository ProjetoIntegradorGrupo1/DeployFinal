import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutEmpresaComponent } from './put-empresa.component';

describe('PutEmpresaComponent', () => {
  let component: PutEmpresaComponent;
  let fixture: ComponentFixture<PutEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PutEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
