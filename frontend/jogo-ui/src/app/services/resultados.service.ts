import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resultado } from '../models/resultado.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {
  private apiUrl = 'http://localhost:5052/api/resultados';

  constructor(private http: HttpClient) {}

  getUltimosVencedores(): Observable<Resultado[]> {
    return this.http.get<Resultado[]>(`${this.apiUrl}/ultimos-dez-vencedores`);
  }

  addResultado(vencedor: 'X' | 'O' | 'Empate'): Observable<any> {
    const payload = {
      vencedor: vencedor === 'Empate' ? 'E' : vencedor
    };
    return this.http.post(`${this.apiUrl}`, payload);
  }
}


