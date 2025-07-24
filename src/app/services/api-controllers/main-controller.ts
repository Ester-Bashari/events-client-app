import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainController {
  private baseUrl: string = "http://localhost:8080";
  private apiBaseUrl: string = `${this.baseUrl}/api`;

  constructor(private http: HttpClient) {
  }

  public httpPostRequest<T, R>(url: string, body: T | null): Observable<R> {
    return this.http.post<ApiResponse<R>>(`${this.apiBaseUrl}${url}`, body, {withCredentials: true})
      .pipe(this.extractResponse<R>());
  }

  public httpGetRequest<R>(url: string): Observable<R> {
    return this.http.get<ApiResponse<R>>(`${this.apiBaseUrl}${url}`, {withCredentials: true})
      .pipe(this.extractResponse<R>());
  }

  private extractResponse<R>() {
    return map((response: ApiResponse<R>) => {
      if (response?.status !== 'OK')
        throw new Error(response.message || ('Server error: ' + response.status));
      return response.data;
    });
  }
}

export interface ApiResponse<T> {
  status: string;
  message: string;
  data: T;
}
