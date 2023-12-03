import {Component, computed, EventEmitter, Input, Output, WritableSignal, signal} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-customers-pagination',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './customers-pagination.component.html',
  styleUrl: './customers-pagination.component.css'
})
export class CustomersPaginationComponent {
  @Input() currentPage: WritableSignal<number> = signal(1);
  @Input() displayPages: number = 5;
  @Output() changePage = new EventEmitter();

  pages = signal([...new Array(7)].map((item, index) => index + 1));
  pagesToDisplay = computed(() => {
    if (this.currentPage() < this.displayPages) {
      return this.pages().slice(0, this.displayPages)
    }

    const isLess = this.pages().length - this.displayPages

    if (this.currentPage() > isLess) {
      return this.pages().slice(isLess, this.pages().length)
    }
    const start = this.currentPage() - Math.ceil(this.displayPages / 2);
    const end = this.currentPage() + Math.round(this.displayPages / 2);
    return this.pages().slice(start, end);
  })
  handleChangePage(page: number): void {
    this.currentPage.set(page);
    this.changePage.emit(page);
  }

  nextPage() {
    this.handleChangePage(this.currentPage()+1);
  }

  prevPage() {
    this.handleChangePage(this.currentPage() -1);
  }
}
