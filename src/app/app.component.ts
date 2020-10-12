import { Component } from '@angular/core';
import { TopMenu, ImageSlider } from './components';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topMenu: TopMenu[] = [
    {
      title: '热门',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '百货',
      link: ''
    },
    {
      title: '运动',
      link: ''
    },
    {
      title: '手机',
      link: ''
    },
    {
      title: '家纺',
      link: ''
    },
    {
      title: '食品',
      link: ''
    },
    {
      title: '电器',
      link: ''
    },
    {
      title: '鞋包',
      link: ''
    },
    {
      title: '汽车',
      link: ''
    },
    {
      title: '水果',
      link: ''
    },
    {
      title: '电脑',
      link: ''
    },
    {
      title: '内衣',
      link: ''
    },
    {
      title: '家装',
      link: ''
    },
    {
      title: '母婴',
      link: ''
    },
    {
      title: '美妆',
      link: ''
    },
    {
      title: '家具',
      link: ''
    }
  ];

  imageSliders: ImageSlider[] = [
    {
      // tslint:disable-next-line:max-line-length
      imageUrl: 'https://lh3.googleusercontent.com/2MZK6F1YpOfUBa7apE4gNHLs0hn4sTWvV5twyb7XZlmP4UTnRtQog_xs7B9fanlLn6oGZY9EZkg=w640-h400-e365-rj-sc0x00ffffff',
      link: '',
      caption: 'image 1'
    },
    {
      // tslint:disable-next-line:max-line-length
      imageUrl: 'https://embrostitch.com/wp-content/uploads/Builder_Patrick_Star_embroidery_design_embrostich.jpg',
      link: '',
      caption: 'image 2'
    },
    {
      // tslint:disable-next-line:max-line-length
      imageUrl: 'https://pmcvariety.files.wordpress.com/2020/08/patrick-star-image.jpg',
      link: '',
      caption: 'image 3'
    },
  ];

  // 子组件中定义事件触发器的时候我们自己定义了要传回来什么数据 - @scrollable-tab.component.ts
  handelTabSelected(tabSelected: TopMenu) {
    console.log(tabSelected);
  }
}
