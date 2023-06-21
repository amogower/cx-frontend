import { css } from 'styled-components';

css`
  :global() {
    :root {
      --ogm-white: #fff;
      --ogm-black: #20242e;
      --ogm-bg-grey: #f7f8f9;
      --ogm-subtext-grey: #9d9da3;

      --ogm-timberwolves: #00182e;
      --ogm-pelicans: #052643;
      --ogm-seahawks: #1ed560;
      --ogm-seahawks_hover: #1ed56026;
      --ogm-seahawks_disabled: #1ed56090;
      --ogm-mavericks: #eeeff4;
      --ogm-grizzlies: #9dafbd;
      --ogm-bucks: #167c3f;
      --ogm-zircon: #f6f7f7;
    }

    .OC-theme {
      --ogm-header-bg-color-1: var(--ogm-white);
      --ogm-header-color-1: var(--ogm-black);

      --ogm-header-bg-color-2: var(--ogm-bg-grey);
      --ogm-header-color-2: var(--ogm-black);

      --ogm-header-bg-color-3: var(--ogm-white);
      --ogm-header-color-3: var(--ogm-black);

      --ogm-dropdown-pill-color-hover-1: var(--ogm-bg-grey);

      --ogm-font-family-1: 'Nunito Sans';
      --ogm-font-family-2: 'Nunito Sans';

      .ogm-subevent-header__breadcrumb {
        font-family: var(--ogm-font-family-1);
        font-size: 12px;
      }

      .ogm-subevent-header__title {
        font-family: var(--ogm-font-family-1);
        font-weight: 800;
        font-size: 22px;

        @media (min-width: 768px) {
          font-size: 26px;
        }
      }
    }

    .US-theme {
      --ogm-header-bg-color-1: var(--ogm-timberwolves);
      --ogm-header-color-1: var(--ogm-white);

      --ogm-header-bg-color-2: var(--ogm-pelicans);
      --ogm-header-color-2: var(--ogm-grizzlies);

      --ogm-header-bg-color-3: var(--ogm-white);
      --ogm-header-color-3: var(--ogm-black);

      --ogm-dropdown-pill-color-hover-1: transparent;

      --ogm-font-family-1: octin-college;
      --ogm-font-family-2: urw-din;

      .ogm-subevent-header__breadcrumb {
        font-family: var(--ogm-font-family-1);
        font-size: 14px;
      }

      .ogm-subevent-header__title {
        font-family: var(--ogm-font-family-1);
        font-weight: 700;
        font-size: 24px;

        @media (min-width: 768px) {
          font-size: 32px;
        }
      }
    }
  }
`;
