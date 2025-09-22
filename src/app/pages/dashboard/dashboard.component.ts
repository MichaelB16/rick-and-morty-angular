import { Component, inject } from '@angular/core';
import { CardDashboardComponent } from '../../components/card-dashboard/card-dashboard.component';
import { DashboardService } from '../../services/dashboard.service';
import { ICharacter, IInfo } from '../../models/dashboard.model';
import { catchError, startWith, map, of, Observable, BehaviorSubject, switchMap } from 'rxjs';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';

import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { ErrorComponent } from '../../components/error/error.component';
import { HeaderComponent } from '../../components/header/header.component';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    CardDashboardComponent,
    LoadingComponent,
    ErrorComponent,
    AsyncPipe,
    InputTextModule,
    FloatLabelModule,
    FormsModule,
    ButtonModule,
    PaginationComponent,
    HeaderComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  filter = new BehaviorSubject<{ search: string; page: number }>({ search: '', page: 0 });

  private dashboardService = inject(DashboardService);

  listCardDashboard$: Observable<{
    loading: boolean;
    error: boolean;
    pagination: IInfo;
    data: ICharacter[];
  }> = this.filter.pipe(
    switchMap(filter =>
      this.dashboardService.getCards({ name: filter.search, page: filter.page }).pipe(
        map(response => ({
          loading: false,
          error: false,
          pagination: response.info,
          data: response.results,
        })),
        startWith({
          loading: true,
          error: false,
          pagination: {} as IInfo,
          data: [] as ICharacter[],
        }),
        catchError(() =>
          of({ loading: false, error: true, pagination: {} as IInfo, data: [] as ICharacter[] })
        )
      )
    )
  );

  handleSearch() {
    this.filter.next({ ...this.filter.value, search: this.filter.value.search });
  }

  handleSetPage(page: number) {
    this.filter.next({ ...this.filter.value, page });
  }
}
