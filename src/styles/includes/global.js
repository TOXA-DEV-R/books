import styled from "styled-components";
import card_body_img from "../../assets/images/card_body_bg.png";

export const StyleTabs = styled.div`
  > .container {
    max-width: 1272px;
  }

  .tab {
    &__title {
      margin: 0 auto;
      margin-top: 148px;
      font-size: 31px;
      line-height: 34px;
      font-family: "Italiana", serif;
      color: #c9ac8c;
    }
    &__block {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      &-btn {
        margin: 0 35px;
        margin-top: 30.5px;
        font-family: sans-serif;
        font-size: 20px;
        line-height: 20px;
        color: rgba(255, 255, 255, 0.6);
        background: transparent;
        border: none;
        cursor: pointer;
        &.active {
          color: #c9ac8c;
        }
      }
    }
    &__content {
      margin: 0 -34px;
      margin-top: 30.5px;
      padding-bottom: 200px;
    }
    &-card {
      width: 173px;
      height: 260px;
      margin: 0 18px;
      margin-top: 20px;

      background: linear-gradient(209.09deg, #191919 -1.68%, #212121 135.36%);
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      &__top {
        width: 100%;
        height: 132.19px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &__body {
        width: 100%;
        height: 100%;
        padding: 0 17px;
        padding-top: 8px;
        padding-bottom: 11px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        background: url(${card_body_img}) no-repeat center center / cover;
      }
      &__title {
        text-align: center;
        font-size: 20px;
        line-height: 20px;
        color: #c9ac8c;
        font-family: "Italiana", serif;
      }
      &__date {
        display: block;
        text-align: center;
        margin-top: 9px;
        font-size: 12px;
        line-height: 12px;
        color: rgba(255, 255, 255, 0.6);
      }
      &__info {
        display: flex;
        justify-content: space-between;
        span {
          display: flex;
          align-items: center;
          font-size: 16px;
          line-height: 16px;
          font-family: sans-serif;
          color: #fff;
          .ic {
            background: #fff;
            margin-right: 8px;
          }
        }
      }
    }
  }
`;
