import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

export interface ImageSlider {
  imageUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  @Input() sliders: ImageSlider[] = [];
  // static: 如果这个元素是包含在ngIf或者ngFor下，是动态的，那么static就是false; 如果没在ngIf或ngFor包含之下，这个元素就是静态的，那么static为true
  // tslint:disable-next-line:max-line-length
  @ViewChild('imageSlider', { static: true }) imgSlider: ElementRef; // @ViewChild是用来在类中access到html里的某个element，angular用ElementRef封装成DOM element的引用

  constructor() { }

  ngOnInit() {
    console.log(this.imgSlider);
    // 其实每个element里面有个nativeElement就是DOM node element
    // this.imgSlider.nativeElement
  }

}
