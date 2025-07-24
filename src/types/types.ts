export class LoginRequest {
  constructor(public email: string,
              public password: string) {
  }
}

export class RegisterRequest {
  constructor(public fullName: string,
              public email: string,
              public password: string) {
  }
}

export class UserData {
  constructor(public id: number,
              public fullName: string,
              public email: string) {
  }
}
