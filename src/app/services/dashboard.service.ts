import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ICharacter, IResponseCharacter } from '../models/dashboard.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private apiUrl = 'https://rickandmortyapi.com/api';
  private http = inject(HttpClient);

  getCards(params: any = {}): Observable<IResponseCharacter> {
    return this.http.get<IResponseCharacter>(`${this.apiUrl}/character`, { params, cache: 'no-cache' });
  }

  getDetails(id: string | number): Observable<ICharacter> {
    return this.http.get<ICharacter>(`${this.apiUrl}/character/${id}`);
  }
}
