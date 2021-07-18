import styled from "styled-components";

export const StyleAddBooks = styled.div`
  .add-books__column {
  }
  .add-books {
    &__column {
      &:first-of-type {
        background: #f3f3f3;
      }
    }
    &-book {
      max-width: 300px;
      margin: 0 auto;
      &__top {
        margin-top: 63px;
      }
      &__title {
        margin-top: 13.67px;
        font-weight: 900;
        font-size: 24px;
        font-family: sans-serif;
        line-height: 34px;
        color: #000000;
      }
      &__btn {
        width: 100%;
        height: 46px;
        margin-top: 17px;
        background: #152540;
        border-radius: 99px;
        font-weight: 500;
        font-size: 18px;
        line-height: 36px;
        color: #ffffff;
        cursor: pointer;
      }
    }
  }
`;
