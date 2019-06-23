/**
 * Copyright 2016 Oleh Zasadnyy, GDG Lviv
 * Source: https://github.com/gdg-x/hoverboard
 */

import { Component } from 'preact';
import style from './style';

export default class GalleryBlock extends Component {
  render() {
    return (
      <div class={style.photos_grid}>
        <img class={style.grid_item} src="/assets/images/highlight-1.jpg" />
        <img class={style.grid_item} src="/assets/images/highlight-2.jpg" />
        <img class={style.grid_item} src="/assets/images/highlight-3.jpg" />
        <img class={style.grid_item} src="/assets/images/highlight-4.jpg" />
        <img class={style.grid_item} src="/assets/images/highlight-5.jpg" />
        <img class={style.grid_item} src="/assets/images/highlight-6.jpg" />
        <img class={style.grid_item} src="/assets/images/highlight-7.jpg" />
        <img class={style.grid_item} src="/assets/images/highlight-8.jpg" />
        <div class={style.gallery_info}>
          <div>
            <h2>I/O Extended 2018 Seoul 현장 스케치</h2>
            <p>작년 뜨거웠던 I/O Extended 2018 Seoul 현장의 열기를 사진으로 확인해보세요.</p>
          </div>
        </div>
      </div>
    );
  }
}
