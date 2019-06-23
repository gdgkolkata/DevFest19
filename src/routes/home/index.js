import { Component } from 'preact';
import IoLogo from '../../components/io_logo';
import SocialFooter from '../../components/social_footer';
import Footer from '../../components/footer';
import GalleryBlock from '../../components/gallery_block';
import Countdown from '../../components/Countdown';
import style from './style';

export default class Home extends Component {
  handleScroll() {
    const ele = document.querySelector('.topappbar.mdc-top-app-bar');
    if (document.documentElement.scrollTop < 56) {
      ele.setAttribute('top', true);
    } else {
      ele.removeAttribute('top');
    }
  }

  componentDidMount() {
    document.title = 'GDG Kolkata DevFest 2019';
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.querySelector('.topappbar.mdc-top-app-bar').removeAttribute('top');
  }

  render({ rootPath, partners }) {
    return (
      <div>
        <div class={`${style.hero} hero`}>
          <div class={style.hero_title}>
            <h2>
              GDG Kolkata DevFest 2019
            </h2>
            <br />
            <h4 style={{ marginBottom: '12px' }}>03 August 2019</h4>
          </div>
          <Countdown />
        </div>
        <div class={`${style.belt} belt`}>
          <img src="/assets/images/intro.jpg" alt="GDG Kolkata DevFest 2019" />
        </div>
        <div class={style.home_info}>
          <div class={style.text}>
            <h3>What to expect</h3>
            <p>
              DevFests are large, community-run developer events happening around the globe focused on community building and learning about Google’s technologies. <br />
Hosted by GDG Kolkata, WTM Kolkata, and GCDC Kolkata, DevFest Kolkata will cover multiple product areas such as (but are not limited to) Android, Firebase, Google Cloud Platform, Google Assistant, Flutter, machine learning with TensorFlow, and Mobile Web.
            </p>
          </div>
          <div class={style.stats}>
            <div class={style.stat}>
              <div class={style.number}>500+</div>
              <div class={style.label}>Attendees</div>
            </div>
            <div class={style.stat}>
              <div class={style.number}>1</div>
              <div class={style.label}>Day</div>
            </div>
          </div>
        </div>
       
        <SocialFooter rootPath={rootPath} />
        <Footer rootPath={rootPath} />
      </div>
    );
  }
}
