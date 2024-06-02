import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurriculumsComponent } from './curriculums.component';

describe('CurriculumsComponent', () => {
  let component: CurriculumsComponent;
  let fixture: ComponentFixture<CurriculumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurriculumsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurriculumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
