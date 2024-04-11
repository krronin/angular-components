import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parallel-scroller',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parallel-scroller.component.html',
  styleUrl: './parallel-scroller.component.scss'
})
export class ParallelScrollerComponent implements OnInit, AfterViewInit {
  contentSection!: HTMLDivElement;
  scrollerSection!: HTMLDivElement;
  scrollerSectionStyles!: Object;

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.contentSection = document.querySelector('.content-section') as HTMLDivElement;
    this.scrollerSection = document.querySelector('.scrollbar-section') as HTMLDivElement;
    if (this.contentSection) {
      this.contentSection.addEventListener('scroll', ($event) => this.handleElementScroll('content', $event));
    }
    if (this.scrollerSection) {
      this.scrollerSection.addEventListener('scroll', ($event) => this.handleElementScroll('scroller', $event));
    }
  }

  ngAfterViewInit(): void {
    this.scrollerSectionStyles = { 'width': this.contentSection.scrollWidth + 'px' };
    this.changeDetector.detectChanges();
  }

  handleElementScroll(scrollFrom: string, $event: any) {
    let scrollValue = 0;
    if (scrollFrom === 'content') {
      scrollValue = this.contentSection.scrollLeft;
      this.scrollerSection.scrollLeft = scrollValue;
    } else {
      scrollValue = this.scrollerSection.scrollLeft;
      this.contentSection.scrollLeft = scrollValue;
    }
    
  }
}
