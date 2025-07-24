import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {LoginRequest, RegisterRequest, UserData} from '../../../types/types';
import {MainController} from './main-controller';

@Injectable({
  providedIn: 'root'
})

export class UserController {
  private userPath: string = '/user';

  private registerUrl: string = `${this.userPath}/register`;
  private loginUrl: string = `${this.userPath}/login`;
  private logoutUrl: string = `${this.userPath}/logout`;
  private getUserUrl: string = `${this.userPath}/get`;

  constructor(private mainController: MainController) {
  }

  register(registerRequest: RegisterRequest): Observable<UserData> {
    return this.mainController.httpPostRequest<RegisterRequest, UserData>(this.registerUrl, registerRequest);
  }

  login(loginRequest: LoginRequest): Observable<UserData> {
    return this.mainController.httpPostRequest<LoginRequest, UserData>(this.loginUrl, loginRequest);
  }

  logout(): Observable<Boolean> {
    return this.mainController.httpPostRequest<void, Boolean>(this.logoutUrl, null);
  }

  getUser(): Observable<UserData> {
    return this.mainController.httpGetRequest<UserData>(this.getUserUrl);
  }
}
