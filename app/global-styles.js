import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
@-webkit-keyframes marquee1 {
  0% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%); }
  100% {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%); } }

@keyframes marquee1 {
  0% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%); }
  100% {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%); } }

@-webkit-keyframes marquee2 {
  0% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%); }
  100% {
    -webkit-transform: translateX(-200%);
            transform: translateX(-200%); } }

@keyframes marquee2 {
  0% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%); }
  100% {
    -webkit-transform: translateX(-200%);
            transform: translateX(-200%); } }

@-webkit-keyframes marquee3 {
  0% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%); }
  100% {
    -webkit-transform: translateX(-300%);
            transform: translateX(-300%); } }

@keyframes marquee3 {
  0% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%); }
  100% {
    -webkit-transform: translateX(-300%);
            transform: translateX(-300%); } }

@-webkit-keyframes marquee4 {
  0% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%); }
  100% {
    -webkit-transform: translateX(-400%);
            transform: translateX(-400%); } }

@keyframes marquee4 {
  0% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%); }
  100% {
    -webkit-transform: translateX(-400%);
            transform: translateX(-400%); } }

@-webkit-keyframes marquee5 {
  0% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%); }
  100% {
    -webkit-transform: translateX(-500%);
            transform: translateX(-500%); } }

@keyframes marquee5 {
  0% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%); }
  100% {
    -webkit-transform: translateX(-500%);
            transform: translateX(-500%); } }

.noselect {
  cursor: default;
  /* http://stackoverflow.com/a/4407335/4956731 */
  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Chrome/Safari/Opera */
  /* Konqueror */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* IE/Edge */
  user-select: none;
  /* non-prefixed version, currently
                                  not supported by any browser */ }

.hidden {
  display: none !important; }

.audio_player {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
          flex-direction: row;
  height: 50px;
  background-color: #333;
  width: 100%;
  /* http://codepen.io/aralon/pen/NqGWXZ */ }
  .audio_player .audio_controls {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
            flex-direction: row;
    margin-left: 10px;
    margin-right: 10px; }
  .audio_player .audio_progress_container {
    position: relative;
    height: 100%;
    -webkit-box-flex: 1;
            flex-grow: 1; }
  .audio_player .audio_progress {
    background-color: #4a4a4a;
    height: 100%;
    width: 0;
    will-change: width; }
  .audio_player .audio_progress_overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
            flex-direction: row;
    -webkit-box-pack: justify;
            justify-content: space-between; }
  .audio_player .audio_info_marquee {
    overflow: hidden;
    /* to make room for .audio_time_progress */
    width: calc(100% - 180px);
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
            flex-direction: row;
    -webkit-box-align: center;
            align-items: center;
    margin-left: 10px; }
  .audio_player .audio_info {
    display: none;
    width: 100%;
    white-space: nowrap;
    word-break: break-all;
    margin: 0;
    font-size: 19.2px;
    color: #fff; }
  .audio_player .audio_time_progress {
    margin-right: 20px;
    -ms-grid-row-align: center;
        align-self: center;
    color: #fff;
    font-size: 23px; }
  .audio_player .audio_button {
    padding-left: 11px;
    padding-right: 11px;
    margin-left: 4px;
    margin-right: 4px;
    cursor: pointer;
    align-self: center;
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
            justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
            flex-direction: column;
    height: 50px; }
  .audio_player .play_pause_button .play_pause_inner {
    height: 30px;
    width: 30px;
    overflow: hidden;
    position: relative; }
  .audio_player .play_pause_button .left {
    height: 100%;
    float: left;
    background-color: #fff;
    width: 36%;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
    overflow: hidden; }
  .audio_player .play_pause_button .triangle_1 {
    -webkit-transform: translate(0, -100%);
            transform: translate(0, -100%); }
  .audio_player .play_pause_button .triangle_2 {
    -webkit-transform: translate(0, 100%);
            transform: translate(0, 100%); }
  .audio_player .play_pause_button .triangle_1,
  .audio_player .play_pause_button .triangle_2 {
    position: absolute;
    top: 0;
    right: 0;
    background-color: transparent;
    width: 0;
    height: 0;
    border-right: 30px solid #333;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    -webkit-transition: -webkit-transform 0.25s ease;
    transition: -webkit-transform 0.25s ease;
    transition: transform 0.25s ease;
    transition: transform 0.25s ease, -webkit-transform 0.25s ease; }
  .audio_player .play_pause_button .right {
    height: 100%;
    float: right;
    width: 36%;
    background-color: #fff;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease; }
  .audio_player .play_pause_button.paused .left {
    width: 50%; }
  .audio_player .play_pause_button.paused .right {
    width: 50%; }
  .audio_player .play_pause_button.paused .triangle_1 {
    -webkit-transform: translate(0, -50%);
            transform: translate(0, -50%); }
  .audio_player .play_pause_button.paused .triangle_2 {
    -webkit-transform: translate(0, 50%);
            transform: translate(0, 50%); }
  .audio_player .skip_button.back {
    -webkit-transform: rotate(180deg);
            transform: rotate(180deg); }
  .audio_player .skip_button .skip_button_inner {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
            flex-direction: row; }
  .audio_player .skip_button .right_facing_triangle {
    width: 0;
    height: 0;
    border-left: 16px solid #fff;
    border-top: 16px solid transparent;
    border-bottom: 16px solid transparent; }
  @media screen and (min-width: 370px) {
    .audio_player .audio_info {
      display: initial;
      -webkit-animation: marquee5 10s cubic-bezier(0, 0.23, 0.6, -0.09) infinite;
              animation: marquee5 10s cubic-bezier(0, 0.23, 0.6, -0.09) infinite; } }
  @media screen and (min-width: 450px) {
    .audio_player .audio_info {
      -webkit-animation: marquee4 10s cubic-bezier(0, 0.23, 0.7, -0.09) infinite;
              animation: marquee4 10s cubic-bezier(0, 0.23, 0.7, -0.09) infinite; } }
  @media screen and (min-width: 550px) {
    .audio_player .audio_info {
      -webkit-animation: marquee3 10s cubic-bezier(0, 0.23, 0.85, -0.09) infinite;
              animation: marquee3 10s cubic-bezier(0, 0.23, 0.85, -0.09) infinite; } }
  @media screen and (min-width: 650px) {
    .audio_player .audio_info {
      -webkit-animation: marquee2 10s cubic-bezier(0, 0.23, 1, -0.09) infinite;
              animation: marquee2 10s cubic-bezier(0, 0.23, 1, -0.09) infinite; } }
  @media screen and (min-width: 720px) {
    .audio_player .audio_info {
      -webkit-animation: initial;
              animation: initial; } }

`;
