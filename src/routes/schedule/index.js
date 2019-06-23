import { h, Component, Fragment } from 'preact';
import Dialog from '../../components/dialog';
import { route } from 'preact-router';
import IoLogo from '../../components/io_logo';
import SocialFooter from '../../components/social_footer';
import Footer from '../../components/footer';
import 'preact-material-components/Switch/style.css';
import style from './style';
import data from './schedule-data';

export default class Schedule extends Component {
  state = {
    schedule: [],
    sessions: {},
    dialogOpened: false,
    toggleDialog: false,
    showMyIO: false,
  };

  toggleDialog = (id, item) => e => {
    if (e.target.id !== 'star' && e.target.id !== 'slides') {
      route(this.props.rootPath + 'schedule/' + id);
      this.dialog.toggle(id, item, 'schedule');
    }
  };

  star = id => e => {
    let star = this.props.userSchedule ? !this.props.userSchedule[id] : true;
    const ref = this.props.db.ref(
      '/events_site/ioxkl18/users/' + this.props.user.uid + '/schedule/' + id
    );
    ref.set(star ? true : null);
  };

  parseTopic(topic) {
    topic = topic.replace('_', ' ');
    return topic.charAt(0).toUpperCase() + topic.slice(1);
  }

  showEvents(item, userSchedule, user) {
    if (!user && this.state.showMyIO) return false;
    if (!user || !this.state.showMyIO) return true;
    let showEvent = false;
    item.sessions.map(item => {
      if (userSchedule && userSchedule[item]) {
        showEvent = true;
      }
    });
    return showEvent;
  }

  showEvent(sessions, item, userSchedule, user) {
    if (sessions && sessions[item]) {
      if (!user && this.state.showMyIO) return false;
      if (!user || !this.state.showMyIO) return true;
      if (userSchedule[item]) return true;
    }
  }

  showMyIO = state => e => {
    this.setState({ showMyIO: state });
  };

  handleScroll() {
    const ele = document.querySelector('.topappbar.mdc-top-app-bar');
    if (document.documentElement.scrollTop < 56) {
      ele.setAttribute('top', true);
    } else {
      ele.removeAttribute('top');
    }
  }

  constructor(props) {
    super(props);

    this.id = props.id;
    if (this.id) {
      this.setState({ toggleDialog: true });
    }
  }

  componentDidMount() {
    document.title = '행사일정 - I/O Extended 2019 Seoul';
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.querySelector('.topappbar.mdc-top-app-bar').removeAttribute('top');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.id) {
      if (nextProps.id) {
        this.dialog.toggle(nextProps.id, nextProps.sessions[nextProps.id], 'schedule');
      } else {
        this.dialog.close();
      }
    }
    if (nextProps.id && nextProps.sessions && nextProps.schedule && this.state.toggleDialog) {
      if (nextProps.sessions[nextProps.id]) {
        this.setState({ toggleDialog: false });
        this.dialog.toggle(nextProps.id, nextProps.sessions[nextProps.id], 'schedule');
      }
    }
  }

  render({ rootPath, sessions, schedule }) {
    return (
      <div>
        <div class={`${style.hero} hero`}>
          <IoLogo rootPath={rootPath} />
          <h2>행사일정</h2>
        </div>

        <div class={style.schedule}>
          {data.map(row => (
            <div class={style.schedule_section}>
              <div class={style.schedule_content}>
                <div class={style.schedule_time}>
                  <span class="ampm">{row.ampm}</span>
                  {row.time}
                </div>
                <div class={style.schedule_events}>
                  {row.events.map(event => (
                    <div class={style.schedule_event}>
                      <div class={style.schedule_event_details}>
                        <div class={style.schedule_event_title}>
                          {event.title}
                          {event.speaker && (
                            <span class={style.schedule_event_speaker}>{event.speaker}</span>
                          )}
                        </div>
                        <div class={style.schedule_event_meta}>
                          <div class={style.schedule_event_description}>
                            {event.duration} / {event.location}
                          </div>
                          <div class={style.schedule_event_topics}>
                            {event.topics.map(topic => (
                              <div class="session_topic">
                                <span>{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* <a
                      class={style.slides}
                      id="slides"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="#"
                    >
                      <svg id="slides" viewBox="0 0 24 24">
                        <g id="slides">
                          <path
                            id="slides"
                            d="M19,16H5V8H19M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"
                          />
                        </g>
                      </svg>
                      <span id="slides">View Slides</span>
                    </a> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {schedule && (
          <div class={style.schedule}>
            {schedule.map(
              item =>
                this.showEvents(item, userSchedule, user) && (
                  <div class={style.schedule_section}>
                    <div class={style.schedule_content}>
                      <div class={style.schedule_time}>
                        {item.startTime}
                        <span>{item.ampm}</span>
                      </div>
                      <div class={style.schedule_events}>
                        {item.sessions.map(
                          item =>
                            this.showEvent(sessions, item, userSchedule, user) && (
                              <div
                                class={style.schedule_event}
                                onClick={this.toggleDialog(item, sessions[item])}
                              >
                                <div class={style.schedule_event_details}>
                                  <div class={style.schedule_event_title}>
                                    {sessions[item].title}
                                  </div>
                                  <div class={style.schedule_event_meta}>
                                    <div class={style.schedule_event_description}>
                                      {sessions[item].duration} / {sessions[item].location}
                                    </div>
                                    <div class={style.schedule_event_topics}>
                                      {sessions[item].topics &&
                                        sessions[item].topics.map(item => (
                                          <div id={item} class="session_topic">
                                            <span>{this.parseTopic(item)}</span>
                                          </div>
                                        ))}
                                    </div>
                                  </div>
                                  {sessions[item].slides && (
                                    <a
                                      class={style.slides}
                                      id="slides"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      href={sessions[item].slides}
                                    >
                                      <svg id="slides" viewBox="0 0 24 24">
                                        <g id="slides">
                                          <path
                                            id="slides"
                                            d="M19,16H5V8H19M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"
                                          />
                                        </g>
                                      </svg>
                                      <span id="slides">View Slides</span>
                                    </a>
                                  )}
                                </div>
                              </div>
                            )
                        )}
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        )}
        <div class={style.footer}>
          <SocialFooter rootPath={rootPath} />
          <Footer rootPath={rootPath} />
        </div>
      </div>
    );
  }
}
