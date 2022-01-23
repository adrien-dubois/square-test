import styled from "styled-components";


export const FormContact = styled.form`
    max-width: 50%;
    position: relative;
    max-width: 350px;

    @media screen and (max-width: 740px){
      margin: 2rem 0 0 30%;
    }
    @media screen and (max-width: 440px){
      margin-left: 2rem;
    }

    .form-content {
      display: grid;
      grid-template-rows: repeat(4, 1fr) 100px;

      input,
      textarea {
        background: none;
        font-family: $font-1;
        font-size: 1.2rem;
        border-bottom: 1px solid var(--blue1-color);
        color: var(--white-color);

        @media screen and (min-width: 1200px){
          font-size: 1.5rem;
        }
      }
      input {
        padding: 24px 0 12px;
        width: 100%;

        @media screen and (max-width: 540px){
          width: 75%;
          padding: 12px 0 6px;
        }
      }
      .email-content {
        position: relative;
        width: 100%;
        border-bottom: 1px solid var(--blue1-color);

        @media screen and (max-width: 540px){
          width: 75%;
        }

        #not-mail {
          display: none;
          position: absolute;
          top: 8px;
          color: red;
          right: 0;
          transform-origin: 50% 50%;
        }
        @keyframes dongle {
          0% {
            transform: translate(0px, 0px);
          }
          10% {
            transform: translate(-10px, 0px);
          }
          20% {
            transform: translate(10px, 0px);
          }
          30% {
            transform: translate(-10px, 0px);
          }
          40% {
            transform: translate(10px, 0px);
          }
          50% {
            transform: translate(-10px, 0px);
          }
          60% {
            transform: translate(10px, 0px);
          }
          70% {
            transform: translate(-10px, 0px);
          }
          80% {
            transform: translate(10px, 0px);
          }
          90% {
            transform: translate(-10px, 0px);
          }
          100% {
            transform: translate(0px, 0px);
          }
        }
        input {
          border: none;
        }
      }
      textarea {
        resize: none;
        padding: 24px 0;

        @media screen and (max-width: 540px){
          width: 75%;
          padding: 12px 0;
        }
      }
    }
    .error::placeholder {
      color: red;
    }
    .form-message {
      margin-top: 10px;
      padding: 12px;
      opacity: 0;
      background: var(--blue1-color);
      transition: 0.3s ease;
      color: var(--white-color);
      border-radius: 4px;
      box-shadow: 0 0 2px rgba(51, 51, 51, 0.3);
      font-size: 1.5em;
    }
    .button {
        background: var(--blue1-color);
        color: var(--white-color);
        height: 55px;
        width: 126px;
        border-radius: 4px;
        margin-top: 18px;
        font-size: 1.2rem;
        cursor: pointer;
        transition: 0.2s;
        line-height: 1;

        &:hover {
            letter-spacing: 1px;
            color: var(--black-color);
        }
    }
`;