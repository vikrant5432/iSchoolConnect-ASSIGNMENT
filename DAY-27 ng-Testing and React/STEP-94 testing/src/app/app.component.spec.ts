import { AppComponent } from './app.component';
describe('Test AppComponent', () => {
  let app: AppComponent;
  describe('Testing Title', () => {
    beforeAll(() => {
      app = new AppComponent();
      console.log('BeforeALL is Called');
    });
    beforeEach(() => {
      console.log('BeforeEach is called');
    });
    afterAll(() => {
      console.log('AfterAll is called');
    });
    afterEach(() => {
      console.log('afterEach is called');
    });

    it('should check for app to be defined', () => {
      console.log('1 test is called');
      expect(app).toBeDefined();
    });
    it('should check for title on app', () => {
      console.log('2 test is called');
      expect(app.title).toBe('testing');
    });
    it('should check for title on app is define', () => {
      console.log('3 test is called');
      expect(app.title).toBeDefined();
    });

    it('should check for title length on app 7', () => {
      console.log('4 test is called');
      expect(app.title.length).toBe(7);
    });
  });
  describe('Testing for UserAge', () => {
    beforeAll(() => {
      app = new AppComponent();
      console.log('Before ALL is callled');
    });
    it('Should check for userage to be defined', () => {
      expect(app.userage).toBeDefined();
    });
    it('Should check for userage to be 18', () => {
      expect(app.userage).toBe(18);
    });
    it('should check for userage to be 17', () => {
      app.increase();
      expect(app.userage).toBe(19);
    });
    afterEach(() => {
      app.userage = 18;
    });
  });
});
