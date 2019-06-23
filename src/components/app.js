import { Component } from 'preact';
import { Router } from 'preact-router';
import NavBar from './navbar';
import Home from '../routes/home';
import Attending from 'async!../routes/attending';
import Registration from 'async!../routes/registration';
import CommunityGuidelines from 'async!../routes/communityguidelines';
import NotFoundPage from 'async!../routes/404';
import Faq from 'async!../routes/faq';
import CallForPresentersPage from 'async!../routes/cfp';
import SchedulePage from 'async!../routes/schedule';
import Snackbar from 'preact-material-components/Snackbar';
import 'preact-material-components/Snackbar/style.css';

export default class App extends Component {
  handleRoute = e => {
    this.currentUrl = e.url;
    if (typeof window !== 'undefined') {
      if (window.swUpdate) return (window.location = e.url);
      if (e.previous) {
        if (
          e.url.startsWith(this.state.rootPath + 'schedule') &&
          e.previous.startsWith(this.state.rootPath + 'schedule')
        ) {
        } else if (
          e.url.startsWith(this.state.rootPath + 'speakers') &&
          e.previous.startsWith(this.state.rootPath + 'speakers')
        ) {
        } else {
          document.documentElement.scrollTop = 0;
        }
      }
      if (window.ga) {
        window.ga('set', 'page', 'window.location.pathname');
        window.ga('send', 'pageview');
      }
    }
  };

  showRefreshSnack = () => {
    this.snackbar.MDComponent.show({
      message: 'Site updated. Refresh this page for better experience.',
      actionText: 'Refresh',
      timeout: 5000,
      actionHandler: () => {
        window.location.reload();
      },
    });
  };

  componentDidMount() {
    window.addEventListener('showRefreshSnack', this.showRefreshSnack);
  }

  componentWillUnmount() {
    window.removeEventListener('showRefreshSnack', this.showRefreshSnack);
  }

  constructor() {
    super();

    this.state = {
      schedule: [],
      partners: {},
      sessions: {},
      speakers: {},
      userSchedule: {},
      info: {},
      rootPath: '/',
    };

    if (typeof window !== 'undefined') {
      this.setState({ rootPath: window.GlobalVars.rootPath || '/' });
    }
  }

  render({}, { currentUser, partners, info, rootPath }) {
    return (
      <div id="app">
        <NavBar rootPath={rootPath} />
        <Router onChange={this.handleRoute}>
          <Attending path={rootPath + 'attending/'} rootPath={rootPath} info={info} />
          <Registration
            path={rootPath + 'registration/'}
            user={currentUser}
            info={info}
            rootPath={rootPath}
          />
          <CommunityGuidelines path={rootPath + 'faq/communityguidelines/'} rootPath={rootPath} />
          <Faq path={rootPath + 'faq/'} rootPath={rootPath} />
          <Home path={rootPath} rootPath={rootPath} partners={partners} />
          <CallForPresentersPage path={rootPath + 'cfp/'} rootPath={rootPath} info={info} />
          <SchedulePage path={rootPath + 'schedule/'} />
          <NotFoundPage rootPath={rootPath} default />
        </Router>
        <Snackbar
          ref={snackbar => {
            this.snackbar = snackbar;
          }}
        />
      </div>
    );
  }
}
