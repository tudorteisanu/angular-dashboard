import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  Input,
  ViewChild,
} from '@angular/core';
import {IconService} from "./icon.service";

@Component({
  selector: 'lib-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements AfterViewInit{
  @Input()
    width: string = '24';
  @Input()
    height: string = '24';
  @Input({required: true})
    src: string = '';

  @ViewChild('elementRef') elementRef!: ElementRef;

  service = inject(IconService);

  ngAfterViewInit(): void {
    this.service.loadIcon(this.src)
      .subscribe({
      next: (content) => {
        this.elementRef.nativeElement.innerHTML = content;
      }
    })
  }
}
