import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categories } from '../interfaces/categories.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesHttpService {
  constructor(private http: HttpClient) {}

  getAllCategory(): Observable<Categories[]> {
    return this.http.get<Categories[]>(
      `${environment.LogTimeApi}/v5/categories`
    );
  }
}
