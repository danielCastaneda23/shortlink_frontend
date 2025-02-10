import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { firstValueFrom, of } from 'rxjs';

import { Router } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { environment } from '../../../environments/environment.development';
import { provideHttpClient } from '@angular/common/http';

describe('UserService', () => {
  let service: UserService;
  jest.spyOn(console,'log')
  let routerSpy = {navigate: jest.fn()}
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting(), {provide: Router, useValue: routerSpy}],
    });
    service = TestBed.inject(UserService);
  });
  afterEach(() => {
    // Verify that none of the tests make any extra HTTP requests.
    TestBed.inject(HttpTestingController).verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test mock loginUser response Failed', async () => {
    const httpTesting = TestBed.inject(HttpTestingController);
    service.loginUser({ payload: { email: 'da@da.com', password: '12345' } })
    const req = httpTesting.expectOne('http://localhost:3000/login');
    expect(req.request.method).toBe('POST');


   req.error(new ErrorEvent('ErrorExpected'))
  expect(console.log).toHaveBeenCalledWith('LOGIN FAILED', "")

    httpTesting.verify();

  });

  it('test mock loginUser response Suceed', async () => {
    const httpTesting = TestBed.inject(HttpTestingController);
    service.loginUser({ payload: { email: 'da@da.com', password: '12345' } })
    const req = httpTesting.expectOne('http://localhost:3000/login');
    expect(req.request.method).toBe('POST');

   req.flush({ token: 'fake-jwt-token' })
  expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard/shortlink'])

    httpTesting.verify();

  });

});
