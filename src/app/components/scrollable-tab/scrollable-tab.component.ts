import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface TopMenu {
  title: string;
  link?: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit {
  title = 'pinduoduo';
  selectedIndex = -1;
  @Input() menus: TopMenu[] = []; // @Input decorator 代表这个变量的值是被传入的 - 从父组件传入
  @Input() menuBackGroundColor = '#fff'; // give default value
  @Input() titleActiveColor = 'red';
  @Input() titleColor = 'black';
  @Input() indicatorBackgroundColor = 'brown';
  @Output() tabSelected = new EventEmitter(); // @Ooutput decorator 创建一个新的事件触发器 - 用来让父组件监听子组件上事件的触发然后做出相应的动作

  constructor() { }

  ngOnInit() {
  }

  handleSelection(index: number) {
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex]); // 当某个tab被点击，触发我们自己定义的事件触发器发射出去这个事件并且携带你想带的数据 - 这个是携带了menu上被选中的tab
  }

}
