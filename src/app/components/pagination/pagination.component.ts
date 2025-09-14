import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-pagination',
  imports: [PaginatorModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  @Input() total!: number;
  @Input() currentPage: number = 0;
  @Output() setPage = new EventEmitter<number>();

  get rows() {
    return 20;
  }

  get totalRecords() {
    return this.total;
  }

  get first() {
    return this.currentPage * this.rows;
  }

  onPageChange({ page }: PaginatorState) {
    this.setPage.emit(page || 0);
  }
}
