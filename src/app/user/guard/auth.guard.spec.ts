import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { TestBed } from '@angular/core/testing';

describe('AuthGuard', () => {
  const routerSpy = {navigate: jest.fn()}
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => AuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: Router, useValue: routerSpy}]
    });
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('should run to login' , () => {
    const routeSnapshot = {} as ActivatedRouteSnapshot;
    const stateSnapshot = {} as RouterStateSnapshot;
    executeGuard(routeSnapshot, stateSnapshot);

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard/login'])
  })
  it('should run to wherever it wants' , () => {
    localStorage.setItem('token','token-value')
    const routeSnapshot = {} as ActivatedRouteSnapshot;
    const stateSnapshot = {} as RouterStateSnapshot;

    expect( executeGuard(routeSnapshot, stateSnapshot)).toBe(true)
  })
});
