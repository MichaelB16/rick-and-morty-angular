import { Component, inject } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { ICharacter } from '../../models/dashboard.model';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-details',
  imports: [AsyncPipe, CardModule, ButtonModule, HeaderComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  dashboardService = inject(DashboardService);
  router = inject(ActivatedRoute);

  get id() {
    return this.router.snapshot.paramMap.get('id') as string;
  }

  details$: Observable<{
    loading: boolean;
    error: boolean;
    data: ICharacter;
  }> = this.dashboardService.getDetails(this.id).pipe(
    startWith({
      loading: true,
      error: false,
      data: {} as ICharacter,
    }),
    map(res => ({
      loading: false,
      error: false,
      data: res as ICharacter,
    })),
    catchError(() =>
      of({
        loading: false,
        error: true,
        data: {} as ICharacter,
      })
    )
  );
}
