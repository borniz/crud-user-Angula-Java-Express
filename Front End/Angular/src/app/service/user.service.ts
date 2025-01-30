import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../interface/Iuser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}


  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.apiUrl}/data`);
  }


  postUsers(usuario: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.apiUrl}/data`, usuario);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/data/${id}`);
  }

  updateUser(id: number, usuario: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this.apiUrl}/data/${id}`, usuario);
  }
}
