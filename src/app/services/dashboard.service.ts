import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IResponseCharacter } from '../models/dashboard.model';
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
}
