import { TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
MenuComponent
describe('', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MenuComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MenuComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Projeto-01'`, () => {
    const fixture = TestBed.createComponent(MenuComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Projeto-01');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MenuComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Projeto-01 app is running!');
  });
});
