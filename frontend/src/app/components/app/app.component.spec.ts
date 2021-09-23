import { fakeAsync } from '@angular/core/testing';
import { of } from 'rxjs';

describe('Async Testing Examples', () => {
  // Will the assertion pass?
  fit('setTimeout()', () => {
    let test = false;
    console.log('Test start');

    setTimeout(() => {
      test = true;
      expect(test).toBeTruthy();
    }, 500);
  });

  // Will the assertion pass?
  // Guess the order of the console logs
  it('setTimeout() vs Promise()', () => {
    let test = false;
    console.log('Test start');

    setTimeout(() => {
      console.log('setTimeout() first callback triggered.');
    });

    setTimeout(() => {
      console.log('setTimeout() second callback triggered.');
    });

    Promise.resolve()
      .then(() => {
        console.log('Promise first then() evaluated successfully');
        return Promise.resolve();
      })
      .then(() => {
        console.log('Promise second then() evaluated successfully');
        test = true;
      });

    console.log('Running test assertions');
    expect(test).toBeTruthy();
  });

  // Which expect is going to be asserted?
  // How would we modify the code to pass all assertions?
  it('should control the passage of time', fakeAsync(() => {
    let counter = 0;

    Promise.resolve().then(() => {
      counter += 10;

      setTimeout(() => {
        counter += 1;
      }, 1000);
    });

    expect(counter).toBe(0);
    expect(counter).toBe(10);
    expect(counter).toBe(11);
  }));

  // Is the assertion going to pass?
  // What if we pipe delay to our observable?
  it('Asynchronous test example - Observables', fakeAsync(() => {
    let test = false;

    console.log('Creating Observable');

    const test$ = of(test);

    test$.subscribe(() => {
      test = true;
    });

    console.log('Running test assertions');

    expect(test).toBe(true);
  }));
});
