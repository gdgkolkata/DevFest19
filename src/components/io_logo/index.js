import { h, Component } from 'preact';

import style from './style';
export default class IoLogo extends Component {
  render({ rootPath }) {
    return (
      <div class={style.logo_container}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="1200"
          height="324.316"
          viewBox="0 0 1200 324.316"
        >
          <defs>
            <clipPath id="b">
              <rect width="1200" height="324.316" />
            </clipPath>
          </defs>
          <g id="a" clip-path="url(#b)">
            <rect width="1200" height="324.316" fill="#fff" />
            <g transform="translate(-605.589 -399.278)">
              <text
                transform="translate(1088.741 549.223)"
                fill="#5f6368"
                font-size="168"
                font-family="GoogleSans-Regular, Google Sans"
              >
                <tspan x="0" y="0">
                  Extended
                </tspan>
              </text>
              <text
                transform="translate(1099.975 669.411)"
                fill="#5f6368"
                font-size="114"
                font-family="GoogleSans-Regular, Google Sans"
              >
                <tspan x="0" y="0">
                  Seoul
                </tspan>
              </text>
              <g transform="translate(605.589 408.094)">
                <rect
                  width="108.357"
                  height="216.713"
                  transform="translate(0 40.007)"
                  fill="#d3e3f9"
                />
                <path
                  d="M776.661,422.874a101.279,101.279,0,1,1-101.28,101.279,101.393,101.393,0,0,1,101.28-101.279m0-10.947A112.227,112.227,0,1,0,888.888,524.154,112.226,112.226,0,0,0,776.661,411.927Z"
                  transform="translate(-467.07 -375.791)"
                  fill="#4285f4"
                />
                <rect
                  width="308.486"
                  height="11.858"
                  transform="translate(122.452 300.884) rotate(-77.254)"
                  fill="#5bb974"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  }
}
