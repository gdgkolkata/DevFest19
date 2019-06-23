import { Component } from 'preact';
import style from './style';

export default class Footer extends Component {
  render({ rootPath }) {
    return (
      <div class={style.footer}>
        <div class={style.footer_logo}>
          <a href="https://gdgkolkata.herokuapp.com/" target="_blank"><img alt="GDG Kolkata Logo" src="/assets/images/gdgkol.png" /></a>
        </div>
      </div>
    );
  }
}
