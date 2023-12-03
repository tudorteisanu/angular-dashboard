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
import {NgStyle} from "@angular/common";

@Component({
  selector: 'lib-icon',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements AfterViewInit{
  @Input()
    width: number = 24;
  @Input()
    height: number = 24;
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

  get iconStyle() {
    return {
      width: `${this.width}px`,
      height: `${this.height}px`
    }
  }

}
