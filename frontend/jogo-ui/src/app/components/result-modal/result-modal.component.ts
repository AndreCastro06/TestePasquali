import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✔️ Importado

@Component({
  standalone: true, 
  selector: 'app-result-modal',
  templateUrl: './result-modal.component.html',
  styleUrls: ['./result-modal.component.scss'],
  imports: [CommonModule]
})
export class ResultModalComponent {
  @Input() mostrar: boolean = false;
  @Input() mensagem: string = '';
  @Output() aoReiniciar = new EventEmitter<void>();
}