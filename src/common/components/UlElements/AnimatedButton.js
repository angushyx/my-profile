import styled from "styled-components";
import { border, color, text } from "../../util/Variables";

const BtnStyle = styled.button`
  border: none;
  text-decoration: none;
  padding: 10px 15px;
  border: 1.5px solid ${color.primary1};
  border-radius: ${border.radius1};
  cursor: pointer;
  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
  box-shadow: 0 2px 8px 0;
  -webkit-appearance: none;
  appearance: none;
  color: ${text.light};

  position: absolute;
  left: 500px;
  top: 500px;

  &:hover {
    transform: scale(1.03);
  }
  &:active {
    transform: scale(0.98);
  }
  &:focus {
    outline: 0;
    transform: scale(0.98);
  }
  &:before,
  &:after {
    position: absolute;
    content: "";
    display: block;
    width: 140%;
    height: 100%;
    left: -20%;
    z-index: -1000;
    transition: all ease-in-out 0.5s;
    background-repeat: no-repeat;
  }

  &:before {
    display: none;
    top: -75%;
    background-image: radial-gradient(
        circle,
        ${color.primary1} 20%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        transparent 20%,
        ${color.primary1} 20%,
        transparent 30%
      ),
      radial-gradient(circle, ${color.primary1} 20%, transparent 20%),
      radial-gradient(circle, ${color.primary1} 20%, transparent 20%),
      radial-gradient(
        circle,
        transparent 10%,
        ${color.primary1} 15%,
        transparent 20%
      ),
      radial-gradient(circle, ${color.primary1} 20%, transparent 20%),
      radial-gradient(circle, ${color.primary1} 20%, transparent 20%),
      radial-gradient(circle, ${color.primary1} 20%, transparent 20%),
      radial-gradient(circle, ${color.primary1} 20%, transparent 20%);
    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%,
      15% 15%, 10% 10%, 18% 18%;
    background-position: 0% 80%, -5% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
      50% 50%, 65% 20%, 85% 30%;
  }

  &:after {
    display: none;
    bottom: -75%;
    background-image: radial-gradient(
        circle,
        ${color.primary1} 20%,
        transparent 20%
      ),
      radial-gradient(circle, ${color.primary1} 20%, transparent 20%),
      radial-gradient(
        circle,
        transparent 10%,
        ${color.primary1} 15%,
        transparent 20%
      ),
      radial-gradient(circle, ${color.primary1} 20%, transparent 20%),
      radial-gradient(circle, ${color.primary1} 20%, transparent 20%),
      radial-gradient(circle, ${color.primary1} 20%, transparent 20%),
      radial-gradient(circle, ${color.primary1} 20%, transparent 20%);
    background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%,
      20% 20%;
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
      40% 90%, 55% 90%, 70% 90%;
  }

  &:active {
    transform: scale(0.9);
    background-color: darken(${color.primary1}, 5%);
    box-shadow: 0 2px 25px rgba(${color.primary1}, 0.2);
  }

  &:active,
  &:hover {
    &:before {
      display: block;
      animation: topBubbles ease-in-out 1s forwards;
    }
    &:after {
      display: block;
      animation: bottomBubbles ease-in-out 1s forwards;
    }
  }

  @keyframes topBubbles {
    0% {
      background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
        40% 90%, 55% 90%, 70% 90%;
    }
    50% {
      background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
        50% 50%, 65% 20%, 90% 30%;
    }
    100% {
      background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
        50% 40%, 65% 10%, 90% 20%;
      background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
    }
  }

  @keyframes bottomBubbles {
    0% {
      background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
        70% -10%, 70% 0%;
    }
    50% {
      background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,
        105% 0%;
    }
    100% {
      background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,
        110% 10%;
      background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
    }
  }
`;

const Button = styled(BtnStyle)`
  background: ${(props) =>
    props.primary ? `${color.primary4}` : "transparent"};

  &:hover {
    background: lighten($color-primary-1, 5%);
    border: 1.5px solid lighten(${color.primary1}, 10%);
  }
`;
export default Button;
