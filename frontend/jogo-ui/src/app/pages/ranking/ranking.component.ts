import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ResultadosService } from '../../services/resultados.service';
import { Resultado } from '../../models/resultado.model';

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ranking.html',
  styleUrls: ['./ranking.scss']
})
export class RankingComponent implements OnInit {
  vencedores: Resultado[] = [];

  constructor(private resultadosService: ResultadosService) {}

  ngOnInit(): void {
    this.resultadosService.getUltimosVencedores().subscribe({
      next: (data) => this.vencedores = data,
      error: (err) => console.error('Erro ao buscar vencedores', err)
    });
  }
}