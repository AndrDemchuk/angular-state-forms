import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskForm } from './task-form';

describe('TaskForm', () => {
  let component: TaskForm;
  let fixture: ComponentFixture<TaskForm>;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskForm],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskForm);
    component = fixture.componentInstance;
    host = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders every class that the stylesheet targets', () => {
    expect(host.querySelector('section.form-section')).not.toBeNull();
    expect(host.querySelector('.form-heading h2')).not.toBeNull();
    expect(host.querySelector('.form-heading p')).not.toBeNull();
    expect(host.querySelector('.form-row')).not.toBeNull();
    expect(host.querySelectorAll('.form-row label').length).toBe(2);
    expect(host.querySelector('button[type="submit"]')).not.toBeNull();
  });

  it('applies the component styles to the form elements', () => {
    const section = host.querySelector('.form-section') as HTMLElement;
    const row = host.querySelector('.form-row') as HTMLElement;
    const form = host.querySelector('form') as HTMLElement;

    expect(getComputedStyle(section).borderRadius).toBe('1.25rem');
    expect(getComputedStyle(row).display).toBe('grid');
    expect(getComputedStyle(form).display).toBe('flex');
  });

  it('shows styled .field-error messages for touched invalid fields', async () => {
    const button = host.querySelector('button[type="submit"]') as HTMLButtonElement;
    expect(button.disabled).toBe(true);

    for (const name of ['title', 'description', 'dueDate']) {
      const el = host.querySelector(`[formControlName="${name}"]`) as HTMLElement;
      el.dispatchEvent(new Event('blur'));
    }
    fixture.detectChanges();
    await fixture.whenStable();

    const errors = host.querySelectorAll<HTMLElement>('.field-error');
    expect(errors.length).toBe(3);
    expect(host.querySelector('.field-errors')).toBeNull();
    errors.forEach((error) => {
      expect(getComputedStyle(error).color).toBe('rgb(185, 28, 28)');
    });

    const title = host.querySelector('[formControlName="title"]') as HTMLElement;
    expect(title.classList).toContain('ng-invalid');
    expect(title.classList).toContain('ng-touched');
  });
});
