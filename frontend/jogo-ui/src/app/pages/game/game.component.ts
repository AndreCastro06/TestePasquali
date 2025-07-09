import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { ResultModalComponent } from '../../components/result-modal/result-modal.component';
import { ResultadosService } from '../../services/resultados.service';
import { CommonModule } from '@angular/common';


type Jogador = 'x' | 'o' | 'empate';

@Component({
  selector: 'app-game',
  standalone: true,
   imports: [CommonModule, RouterModule, ResultModalComponent],
  templateUrl: './game.html',
  styleUrls: ['./game.scss']
})
export class GameComponent {
  board: string[] = Array(9).fill('');
  currentPlayer: 'X' | 'O' = 'X';
  gameOver = false;
  mensagemResultado: string = '';

  placar: Record<Jogador, number> = {
    x: 0,
    o: 0,
    empate: 0
  };

  constructor(private resultadosService: ResultadosService) {}

  fazerJogada(index: number): void {
    if (this.board[index] || this.gameOver) return;

    this.board[index] = this.currentPlayer;

    if (this.verificarVitoria()) {
      const key = this.currentPlayer.toLowerCase() as Jogador;
      this.placar[key]++;
      this.mensagemResultado = this.currentPlayer === 'X'
      ? 'Player 1 (X) venceu!'
      : 'Player 2 (O) venceu!';
      this.resultadosService.addResultado(this.currentPlayer).subscribe({
      next: () => console.log('Resultado salvo com sucesso'),
      error: err => console.error('Erro ao salvar resultado', err)
    });

      this.gameOver = true;
      return;
    }

    if (!this.board.includes('')) {
      this.placar.empate++;
      this.mensagemResultado = 'Empate!';
      this.gameOver = true;
      return;
    }

    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }

  reiniciarJogo(): void {
    this.board = Array(9).fill('');
    this.currentPlayer = 'X';
    this.gameOver = false;
    this.mensagemResultado = '';
  }

zerarPlacar(): void {
    this.placar = {
      x: 0,
      o: 0,
      empate: 0
    };
  }

  private verificarVitoria(): boolean {
    const combinacoes = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    return combinacoes.some(([a, b, c]) =>
      this.board[a] &&
      this.board[a] === this.board[b] &&
      this.board[b] === this.board[c]
    );
  }
  
  
}