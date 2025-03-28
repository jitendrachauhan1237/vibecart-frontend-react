import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="main">
        <div className="card">
          <div className="fl">
            <div className="fullscreen">
              <svg className="fullscreen_svg" viewBox="0 0 100 100"><path d="M3.563-.004a3.573 3.573 0 0 0-3.527 4.09l-.004-.02v28.141c0 1.973 1.602 3.57 3.57 3.57s3.57-1.598 3.57-3.57V12.218v.004l22.461 22.461a3.571 3.571 0 0 0 6.093-2.527c0-.988-.398-1.879-1.047-2.523L12.218 7.172h19.989c1.973 0 3.57-1.602 3.57-3.57s-1.598-3.57-3.57-3.57H4.035a3.008 3.008 0 0 0-.473-.035zM96.333 0l-.398.035.02-.004h-28.16a3.569 3.569 0 0 0-3.57 3.57 3.569 3.569 0 0 0 3.57 3.57h19.989L65.323 29.632a3.555 3.555 0 0 0-1.047 2.523 3.571 3.571 0 0 0 6.093 2.527L92.83 12.221v19.985a3.569 3.569 0 0 0 3.57 3.57 3.569 3.569 0 0 0 3.57-3.57V4.034v.004a3.569 3.569 0 0 0-3.539-4.043l-.105.004zM3.548 64.23A3.573 3.573 0 0 0 .029 67.8v28.626-.004l.016.305-.004-.016.004.059v-.012l.039.289-.004-.023.023.121-.004-.023c.074.348.191.656.34.938l-.008-.02.055.098-.008-.02.148.242-.008-.012.055.082-.008-.012c.199.285.43.531.688.742l.008.008.031.027.004.004c.582.461 1.32.742 2.121.762h.004l.078.004h28.61a3.569 3.569 0 0 0 3.57-3.57 3.569 3.569 0 0 0-3.57-3.57H12.224l22.461-22.461a3.569 3.569 0 0 0-2.492-6.125l-.105.004h.008a3.562 3.562 0 0 0-2.453 1.074L7.182 87.778V67.793a3.571 3.571 0 0 0-3.57-3.57h-.055.004zm92.805 0a3.573 3.573 0 0 0-3.519 3.57v19.993-.004L70.373 65.328a3.553 3.553 0 0 0-2.559-1.082h-.004a3.573 3.573 0 0 0-3.566 3.57c0 1.004.414 1.91 1.082 2.555l22.461 22.461H67.802a3.57 3.57 0 1 0 0 7.14h28.606c.375 0 .742-.059 1.082-.168l-.023.008.027-.012-.02.008.352-.129-.023.008.039-.02-.02.008.32-.156-.02.008.023-.016-.008.008c.184-.102.34-.207.488-.32l-.008.008.137-.113-.008.004.223-.211.008-.008c.156-.164.301-.34.422-.535l.008-.016-.008.016.008-.02.164-.285.008-.02-.008.016.008-.02c.098-.188.184-.406.246-.633l.008-.023-.004.008.008-.023a3.44 3.44 0 0 0 .121-.852v-.004l.004-.078V67.804a3.569 3.569 0 0 0-3.57-3.57h-.055.004z" /></svg>
            </div>
          </div>
          <div className="card_content">
            <button>Code to Infinity!</button>
          </div>
          <div className="card_back" />
        </div>
        <div className="data">
          <div className="img">
            <svg viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g strokeLinecap="butt" fill="none" strokeWidth={2.00}>
                <path d="M 14.06 0.00
        Q 13.33 4.09 13.93 7.52
        A 1.04 1.02 -78.7 0 0 14.37 8.19
        L 32.87 20.19" stroke="#59afb1" />
                <path d="M 32.87 20.19
        L 42.25 26.79" stroke="#4fa6a8" />
                <path d="M 42.25 26.79
        C 41.40 28.26 24.14 34.92 21.32 36.20" stroke="#69cbc0" />
                <path d="M 21.32 36.20
        Q 15.81 38.21 11.00 41.21" stroke="#6fcdbb" />
                <path d="M 11.00 41.21
        L 9.75 40.96" stroke="#5ec8ab" />
                <path d="M 9.75 40.96
        Q 5.99 37.71 1.71 35.19
        A 1.00 1.00 0.0 0 0 0.22 35.85
        L 0.00 36.94" stroke="#5cae9e" />
                <path d="M 79.95 6.12
        L 62.46 11.32" stroke="#3190a6" />
                <path d="M 62.46 11.32
        Q 47.42 14.67 32.87 20.19" stroke="#3a96a3" />
                <path d="M 80.00 11.06
        L 64.50 17.46" stroke="#22a3be" />
                <path d="M 64.50 17.46
        L 62.46 11.32" stroke="#28879d" />
                <path d="M 64.50 17.46
        L 43.00 26.96" stroke="#2ba9bb" />
                <path d="M 43.00 26.96
        L 42.25 26.79" stroke="#4ab2b2" />
                <path d="M 80.00 52.31
        Q 71.64 45.91 62.46 40.67" stroke="#45ced3" />
                <path d="M 62.46 40.67
        Q 62.43 36.88 58.50 36.79" stroke="#13636e" />
                <path d="M 58.50 36.79
        Q 50.07 32.95 43.00 26.96" stroke="#45ced3" />
                <path d="M 58.50 36.79
        Q 55.85 40.04 56.86 44.07
        C 57.53 46.71 60.02 47.68 61.77 45.19
        Q 61.91 44.99 61.94 44.74
        L 62.46 40.67" stroke="#326b65" />
                <path d="M 40.81 79.86
        Q 46.22 74.94 52.34 70.94
        A 1.00 1.00 0.0 0 0 52.39 69.30
        Q 44.74 63.65 43.10 62.62
        Q 34.11 56.98 32.50 55.79" stroke="#59d4b5" />
                <path d="M 32.50 55.79
        C 36.74 55.42 30.64 48.79 29.79 47.81
        C 27.54 45.21 26.34 42.09 24.05 39.44
        Q 22.66 37.82 21.32 36.20" stroke="#6ad8c5" />
                <path d="M 48.75 39.07
        A 2.30 2.30 0.0 0 0 46.45 36.77
        L 46.05 36.77
        A 2.30 2.30 0.0 0 0 43.75 39.07
        L 43.75 44.21
        A 2.30 2.30 0.0 0 0 46.05 46.51
        L 46.45 46.51
        A 2.30 2.30 0.0 0 0 48.75 44.21
        L 48.75 39.07" stroke="#326b65" />
                <path d="M 58.63 54.41
        C 54.90 57.18 50.72 56.87 46.91 54.39
        A 1.00 0.99 51.9 0 0 46.04 54.28
        C 42.37 55.52 43.88 58.13 46.28 59.41
        Q 53.38 63.20 60.15 58.94
        C 62.54 57.43 62.47 54.80 59.41 54.23
        A 1.00 1.00 0.0 0 0 58.63 54.41" stroke="#326b65" />
                <path d="M 9.75 40.96
        Q 5.15 43.50 0.05 44.46" stroke="#4bb793" />
                <path d="M 32.50 55.79
        L 11.00 41.21" stroke="#5fd6b0" />
                <path d="M 11.19 80.00
        Q 12.51 79.61 11.57 78.67
        Q 5.99 73.11 1.70 65.70
        C 1.28 64.97 0.74 64.76 0.00 65.19" stroke="#48d08e" />
              </g>
              <path d="M 0.00 0.00
        L 14.06 0.00
        Q 13.33 4.09 13.93 7.52
        A 1.04 1.02 -78.7 0 0 14.37 8.19
        L 32.87 20.19
        L 42.25 26.79
        C 41.40 28.26 24.14 34.92 21.32 36.20
        Q 15.81 38.21 11.00 41.21
        L 9.75 40.96
        Q 5.99 37.71 1.71 35.19
        A 1.00 1.00 0.0 0 0 0.22 35.85
        L 0.00 36.94
        L 0.00 0.00
        Z" fill="#6ebfb6" />
              <path d="M 14.06 0.00
        L 80.00 0.00
        L 79.95 6.12
        L 62.46 11.32
        Q 47.42 14.67 32.87 20.19
        L 14.37 8.19
        A 1.04 1.02 -78.7 0 1 13.93 7.52
        Q 13.33 4.09 14.06 0.00
        Z" fill="#439eac" />
              <path d="M 79.95 6.12
        L 80.00 11.06
        L 64.50 17.46
        L 62.46 11.32
        L 79.95 6.12
        Z" fill="#1f81a0" />
              <path d="M 62.46 11.32
        L 64.50 17.46
        L 43.00 26.96
        L 42.25 26.79
        L 32.87 20.19
        Q 47.42 14.67 62.46 11.32
        Z" fill="#308d99" />
              <path d="M 80.00 11.06
        L 80.00 52.31
        Q 71.64 45.91 62.46 40.67
        Q 62.43 36.88 58.50 36.79
        Q 50.07 32.95 43.00 26.96
        L 64.50 17.46
        L 80.00 11.06
        Z" fill="#25c5dc" />
              <path d="M 42.25 26.79
        L 43.00 26.96
        Q 50.07 32.95 58.50 36.79
        Q 55.85 40.04 56.86 44.07
        C 57.53 46.71 60.02 47.68 61.77 45.19
        Q 61.91 44.99 61.94 44.74
        L 62.46 40.67
        Q 71.64 45.91 80.00 52.31
        L 80.00 80.00
        L 40.81 79.86
        Q 46.22 74.94 52.34 70.94
        A 1.00 1.00 0.0 0 0 52.39 69.30
        Q 44.74 63.65 43.10 62.62
        Q 34.11 56.98 32.50 55.79
        C 36.74 55.42 30.64 48.79 29.79 47.81
        C 27.54 45.21 26.34 42.09 24.05 39.44
        Q 22.66 37.82 21.32 36.20
        C 24.14 34.92 41.40 28.26 42.25 26.79
        Z
        M 48.75 39.07
        A 2.30 2.30 0.0 0 0 46.45 36.77
        L 46.05 36.77
        A 2.30 2.30 0.0 0 0 43.75 39.07
        L 43.75 44.21
        A 2.30 2.30 0.0 0 0 46.05 46.51
        L 46.45 46.51
        A 2.30 2.30 0.0 0 0 48.75 44.21
        L 48.75 39.07
        Z
        M 58.63 54.41
        C 54.90 57.18 50.72 56.87 46.91 54.39
        A 1.00 0.99 51.9 0 0 46.04 54.28
        C 42.37 55.52 43.88 58.13 46.28 59.41
        Q 53.38 63.20 60.15 58.94
        C 62.54 57.43 62.47 54.80 59.41 54.23
        A 1.00 1.00 0.0 0 0 58.63 54.41
        Z" fill="#64d6ca" />
              <path d="M 9.75 40.96
        Q 5.15 43.50 0.05 44.46
        L 0.00 36.94
        L 0.22 35.85
        A 1.00 1.00 0.0 0 1 1.71 35.19
        Q 5.99 37.71 9.75 40.96
        Z" fill="#499c85" />
              <path d="M 21.32 36.20
        Q 22.66 37.82 24.05 39.44
        C 26.34 42.09 27.54 45.21 29.79 47.81
        C 30.64 48.79 36.74 55.42 32.50 55.79
        L 11.00 41.21
        Q 15.81 38.21 21.32 36.20
        Z" fill="#70dac0" />
              <rect rx="2.30" height="9.74" width={5.00} y="36.77" x="43.75" fill="#000000" />
              <path d="M 58.50 36.79
        Q 62.43 36.88 62.46 40.67
        L 61.94 44.74
        Q 61.91 44.99 61.77 45.19
        C 60.02 47.68 57.53 46.71 56.86 44.07
        Q 55.85 40.04 58.50 36.79
        Z" fill="#000000" />
              <path d="M 9.75 40.96
        L 11.00 41.21
        L 32.50 55.79
        Q 34.11 56.98 43.10 62.62
        Q 44.74 63.65 52.39 69.30
        A 1.00 1.00 0.0 0 1 52.34 70.94
        Q 46.22 74.94 40.81 79.86
        L 11.19 80.00
        Q 12.51 79.61 11.57 78.67
        Q 5.99 73.11 1.70 65.70
        C 1.28 64.97 0.74 64.76 0.00 65.19
        L 0.05 44.46
        Q 5.15 43.50 9.75 40.96
        Z" fill="#4dd1a0" />
              <path d="M 46.91 54.39
        C 50.72 56.87 54.90 57.18 58.63 54.41
        A 1.00 1.00 0.0 0 1 59.41 54.23
        C 62.47 54.80 62.54 57.43 60.15 58.94
        Q 53.38 63.20 46.28 59.41
        C 43.88 58.13 42.37 55.52 46.04 54.28
        A 1.00 0.99 51.9 0 1 46.91 54.39
        Z" fill="#000000" />
              <path d="M 11.19 80.00
        L 0.00 80.00
        L 0.00 65.19
        C 0.74 64.76 1.28 64.97 1.70 65.70
        Q 5.99 73.11 11.57 78.67
        Q 12.51 79.61 11.19 80.00
        Z" fill="#43ce7c" />
            </svg>
          </div>
          <div className="text">
            <div className="text_m">CSS Gradient Button</div>
            <div className="text_s">Praashoo7</div>
          </div>
        </div>
        <div className="btns">
          <div className="likes">
            <svg viewBox="-2 0 105 92" className="likes_svg"><path d="M85.24 2.67C72.29-3.08 55.75 2.67 50 14.9 44.25 2 27-3.8 14.76 2.67 1.1 9.14-5.37 25 5.42 44.38 13.33 58 27 68.11 50 86.81 73.73 68.11 87.39 58 94.58 44.38c10.79-18.7 4.32-35.24-9.34-41.71Z" /></svg><span className="likes_text">22</span>
          </div>
          <div className="comments">
            <svg title="Comment" viewBox="-405.9 238 56.3 54.8" className="comments_svg"><path d="M-391 291.4c0 1.5 1.2 1.7 1.9 1.2 1.8-1.6 15.9-14.6 15.9-14.6h19.3c3.8 0 4.4-.8 4.4-4.5v-31.1c0-3.7-.8-4.5-4.4-4.5h-47.4c-3.6 0-4.4.9-4.4 4.5v31.1c0 3.7.7 4.4 4.4 4.4h10.4v13.5z" /></svg><span className="comments_text">12</span>
          </div>
          <div className="views">
            <svg title="Views" viewBox="0 0 30.5 16.5" className="views_svg"><path d="M15.3 0C8.9 0 3.3 3.3 0 8.3c3.3 5 8.9 8.3 15.3 8.3s12-3.3 15.3-8.3C27.3 3.3 21.7 0 15.3 0zm0 14.5c-3.4 0-6.2-2.8-6.2-6.2C9 4.8 11.8 2 15.3 2c3.4 0 6.2 2.8 6.2 6.2 0 3.5-2.8 6.3-6.2 6.3z" /></svg><span className="views_text">332</span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* CodePen Card */

  .card {
    width: 15em;
    height: 10em;
    background: linear-gradient(270deg, #ce68d9, #45c6db, #45db79);
    background-size: 800% 800%;
    -webkit-animation: AnimationName 3s ease infinite;
    -moz-animation: AnimationName 3s ease infinite;
    animation: AnimationName 3s ease infinite;
    transition: .4s ease-in-out;
    border-radius: 7px;
    cursor: pointer;
  }

  .fl {
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: .2s ease-in-out;
  }

  .fl:hover .fullscreen {
    scale: 1.2;
  }

  .fl:hover .fullscreen_svg {
    fill: white;
  }

  .fullscreen {
    width: 1.5em;
    height: 1.5em;
    border-radius: 5px;
    background-color: #727890;
    margin: 1em;
    margin-right: 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .2s ease-in-out;
    box-shadow: 2px 2px 6px rgba(0,0,0,.4);
  }

  .fullscreen_svg {
    width: 15px;
    height: 15px;
    fill: rgb(177, 176, 176);
    transition: .2s ease-in-out;
  }

  .card_back {
    position: absolute;
    width: 15em;
    height: 13em;
    background-color: rgba(30, 31, 38, 0.575);
    border-radius: 7px;
    margin-top: -4.7em;
    margin-left: 0.7em;
    transition: .2s ease-in-out;
    z-index: -1;
  }

  .main:hover .card_back {
    margin-top: -5.9em;
    margin-left: 0em;
    scale: 1.1;
    height: 15.25em;
    cursor: pointer;
  }

  .main:hover .fl {
    opacity: 1;
    cursor: pointer;
    margin-right: 0.5em;
  }

  .data {
    display: flex;
    flex-direction: row;
    margin-top: 1em;
  }

  .img {
    width: 2.25em;
    height: 2.25em;
    background-color: #252525;
    border-radius: 5px;
    overflow: hidden;
  }

  .text {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 0.5em;
    font-family: Montserrat;
    color: white;
  }

  .text_m {
    font-weight: bold;
    font-size: 0.9em;
  }

  .text_s {
    font-size: 0.7em;
  }

  .btns {
    display: flex;
    gap: 0.5em;
    transition: .2s ease-in-out;
  }

  .likes {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5em;
    height: 1.4em;
    border-radius: 4px;
    margin-top: -0.5em;
    opacity: 0;
    background-color: #444857;
    transition: .2s ease-in-out;
  }

  .likes_text {
    font-family: Montserrat;
    font-size: 0.8em;
    margin-left: 0.25em;
    color: white;
  }

  .likes_svg {
    width: 12px;
    height: 12px;
    fill: white;
  }

  .likes:hover {
    background-color: #5A5F73;
    cursor: pointer;
  }

  .comments {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5em;
    height: 1.4em;
    border-radius: 4px;
    margin-top: -0.5em;
    opacity: 0;
    background-color: #444857;
    transition: .24s ease-in-out;
  }

  .comments_text {
    font-family: Montserrat;
    font-size: 0.8em;
    margin-left: 0.25em;
    color: white;
  }

  .comments_svg {
    width: 12px;
    height: 12px;
    fill: white;
  }

  .comments:hover {
    background-color: #5A5F73;
    cursor: pointer;
  }

  .views {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3em;
    height: 1.4em;
    border-radius: 4px;
    margin-top: -0.5em;
    opacity: 0;
    background-color: #444857;
    transition: .28s ease-in-out;
  }

  .views_text {
    font-family: Montserrat;
    font-size: 0.8em;
    margin-left: 0.25em;
    color: white;
  }

  .views_svg {
    width: 12px;
    height: 12px;
    fill: white;
  }

  .views:hover {
    background-color: #5A5F73;
    cursor: pointer;
  }

  .main:hover .likes {
    margin-top: 0.5em;
    opacity: 1;
  }

  .main:hover .comments {
    margin-top: 0.5em;
    opacity: 1;
  }

  .main:hover .views {
    margin-top: 0.5em;
    opacity: 1;
  }



  /* The Main Switch */

  .card_content {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    padding: 0.8em;
    width: 14em;
    border-radius: 10px;
    font-family: Montserrat;
    font-size: 0.8em;
    align-self: center;
    outline: none;
    font-weight: bold;
    border: 1px solid white;
    background-color: transparent;
    color: white;
    transition: .4s ease-in-out;
  }

  button::after {
    content: "(Hold Me)";
    opacity: 0;
    position: absolute;
  }

  button::before {
    content: "∞";
    font-size: 3.5em;
    position: absolute;
    opacity: 0;
    left: 1.6em;
    top: -0.36em;
    transition: .4s ease-in-out;
  }

  button:hover {
    cursor: pointer;
    color: black;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  button:hover::after {
    position: relative;
    opacity: 1;
    font-size: 0.7em;
  }

  @keyframes AnimationName {
    0% {
      background-position: 0% 50%
    }

    50% {
      background-position: 100% 50%
    }

    100% {
      background-position: 0% 50%
    }
  }

  button:active {
    scale: 1.1;
    opacity: 1;
    color: transparent;
    background: linear-gradient(90deg, #ce68d9, #45c6db, #45db79, #9f45b0, #e54ed0, #ffe4f2);
    background-size: 800% 800%;
    -webkit-animation: AnimationName 1s ease infinite;
    -moz-animation: AnimationName 1s ease infinite;
    animation: AnimationName 1s ease infinite;
  }

  button:active::before {
    color: white;
    opacity: 1;
  }`;

export default Card;
