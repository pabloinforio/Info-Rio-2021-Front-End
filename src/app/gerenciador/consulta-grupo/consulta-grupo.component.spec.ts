import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaGrupoComponent } from './consulta-grupo.component';

describe('ConsultaGrupoComponent', () => {
  let component: ConsultaGrupoComponent;
  let fixture: ComponentFixture<ConsultaGrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaGrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
