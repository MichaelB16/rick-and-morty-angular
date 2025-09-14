import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';
import { caseStatus, statusType } from '../../models/card-dashboard.mode';

@Component({
  selector: 'app-card-dashboard',
  imports: [CardModule, ButtonModule, BadgeModule, TooltipModule],
  templateUrl: './card-dashboard.component.html',
  styleUrl: './card-dashboard.component.scss',
})
export class CardDashboardComponent {
  @Input() name: string = '';
  @Input() species: string = '';
  @Input() image: string = '';
  @Input() status: string = '';
  @Input() location: string = '';

  private readonly caseStatus: Record<statusType, caseStatus> = {
    alive: {
      color: 'success',
      label: 'Vivo',
      status: 'alive',
    },
    dead: {
      color: 'danger',
      label: 'Morto',
      status: 'dead',
    },
    unknown: {
      color: 'warn',
      label: 'Desconhecido',
      status: 'unknown',
    },
    default: {
      color: 'secondary',
      label: 'Desconhecido',
      status: 'default',
    },
  };

  get getStatus(): caseStatus {
    const status = this.status.toLowerCase() as statusType;
    return this.caseStatus[status] || this.caseStatus.default;
  }
}
