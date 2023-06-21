import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
/* vietnamese */
@font-face {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local("Nunito Sans Regular"), local("NunitoSans-Regular"),
    url(https://fonts.gstatic.com/s/nunitosans/v5/pe0qMImSLYBIv1o4X1M8cceyI9tAcVwob5A.woff2)
      format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local("Nunito Sans Regular"), local("NunitoSans-Regular"),
    url(https://fonts.gstatic.com/s/nunitosans/v5/pe0qMImSLYBIv1o4X1M8ccezI9tAcVwob5A.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local("Nunito Sans Regular"), local("NunitoSans-Regular"),
    url(https://fonts.gstatic.com/s/nunitosans/v5/pe0qMImSLYBIv1o4X1M8cce9I9tAcVwo.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local("Nunito Sans SemiBold"), local("NunitoSans-SemiBold"),
    url(https://fonts.gstatic.com/s/nunitosans/v5/pe03MImSLYBIv1o4X1M8cc9iB85iU1ECVZl_86Y.woff2)
      format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local("Nunito Sans SemiBold"), local("NunitoSans-SemiBold"),
    url(https://fonts.gstatic.com/s/nunitosans/v5/pe03MImSLYBIv1o4X1M8cc9iB85jU1ECVZl_86Y.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local("Nunito Sans SemiBold"), local("NunitoSans-SemiBold"),
    url(https://fonts.gstatic.com/s/nunitosans/v5/pe03MImSLYBIv1o4X1M8cc9iB85tU1ECVZl_.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: local("Nunito Sans Bold"), local("NunitoSans-Bold"),
    url(https://fonts.gstatic.com/s/nunitosans/v5/pe03MImSLYBIv1o4X1M8cc8GBs5iU1ECVZl_86Y.woff2)
      format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: local("Nunito Sans Bold"), local("NunitoSans-Bold"),
    url(https://fonts.gstatic.com/s/nunitosans/v5/pe03MImSLYBIv1o4X1M8cc8GBs5jU1ECVZl_86Y.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: local("Nunito Sans Bold"), local("NunitoSans-Bold"),
    url(https://fonts.gstatic.com/s/nunitosans/v5/pe03MImSLYBIv1o4X1M8cc8GBs5tU1ECVZl_.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: local("Nunito Sans Black"), local("NunitoSans-Black"),
    url(https://fonts.gstatic.com/s/nunitosans/v5/pe03MImSLYBIv1o4X1M8cc8-BM5iU1ECVZl_86Y.woff2)
      format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: local("Nunito Sans Black"), local("NunitoSans-Black"),
    url(https://fonts.gstatic.com/s/nunitosans/v5/pe03MImSLYBIv1o4X1M8cc8-BM5jU1ECVZl_86Y.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: local("Nunito Sans Black"), local("NunitoSans-Black"),
    url(https://fonts.gstatic.com/s/nunitosans/v5/pe03MImSLYBIv1o4X1M8cc8-BM5tU1ECVZl_.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

:root {
    --oc-primary-blue: #033954;
    --oc-primary-green: #0edd98;
    --oc-primary-white: #fff;
    --oc-text-white: #fff;
    --oc-text-body: #20242e;
    --oc-text-subtext: #9d9da3;
    --oc-text-white-op: rgba(255,255,255,0.7);
    --oc-text-dark-op: rgba(32,36,46,0.4);
    --oc-odds-shortening: #8cccf2;
    --oc-odds-shortening-bg: rgba(140,204,242,0.4);
    --oc-odds-shortening-rgb: 140,204,242;
    --oc-odds-drifting: #ffafba;
    --oc-odds-drifting-bg: rgba(255,175,186,0.4);
    --oc-odds-drifting-rgb: 255,175,186;
    --oc-secondary-red: #ea1042;
    --oc-secondary-dark-blue: #007cd5;
    --oc-secondary-yellow-tips: #fb0;
    --oc-secondary-blue: #21b7e9;
    --oc-secondary-yellow: #fddb00;
    --oc-secondary-green: #008758;
    --oc-secondary-purple: #8200e5;
    --oc-bg-grey: #f7f8f9;
    --oc-bg-grey-light: #eaeae9;
    --oc-border: #e5e5e5;
    --oc-box-shadow: #dcdcdc;
    --oc-line-secondary: #f2f2f2;
    --oc-font-family: "Nunito Sans", "Trebuchet MS", sans-serif
}

html {
    box-sizing: border-box
}

*,*:before,*:after {
    box-sizing: inherit
}

body * {
    box-sizing: border-box
}

a,abbr,acronym,address,applet,b,big,blockquote,body,button,caption,center,cite,code,dd,del,dfn,div,dl,dt,em,embed,fieldset,figure,font,form,h1,h2,h3,h4,h5,h6,html,i,iframe,img,ins,kbd,label,legend,li,object,ol,p,pre,q,s,samp,small,span,strike,strong,table,tbody,td,tfoot,th,thead,tr,tt,u,ul,var {
    padding: 0;
    margin: 0;
    border: 0;
    outline: 0;
    font-family: 'Nunito Sans', 'Trebuchet MS', sans-serif;
    font-size: 15px;
    background: 0 0
}

h1 {
    font-family: var(--oc-font-family);
    font-size: 26px;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal
}

h2 {
    font-family: var(--oc-font-family);
    font-size: 22px;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal
}

h3 {
    font-family: var(--oc-font-family);
    font-size: 18px;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: normal
}

h4 {
    font-family: var(--oc-font-family);
    font-size: 16px;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: normal
}

.body-text-mo-2 {
    font-family: var(--oc-font-family);
    font-size: 16px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: normal;
    text-align: left;
    color: var(--text-body)
}

.body-text---mo {
    font-family: var(--oc-font-family);
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: normal
}

.subtitle {
    font-family: var(--oc-font-family);
    font-size: 15px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.47;
    letter-spacing: normal
}

.body-text {
    font-family: var(--oc-font-family);
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.47;
    letter-spacing: normal
}

.body-text-3 {
    font-family: var(--oc-font-family);
    font-size: 14px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: normal
}

.body-text-2 {
    font-family: var(--oc-font-family);
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: normal
}

.sub-text {
    font-family: var(--oc-font-family);
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal
}

.caption {
    font-family: var(--oc-font-family);
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal
}

.oc-image__andy-holding {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/andy-holding-c3cc88d623.svg")
}

.oc-image__casino-home__casino-reviews-mobile {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/casino-home/casino-reviews-mobile-a828ef84ca.svg")
}

.oc-image__casino-home__casino-reviews {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/casino-home/casino-reviews-5880e2969d.svg")
}

.oc-image__casino-home__icon-casino {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/casino-home/icon-casino-57a3699790.svg")
}

.oc-image__casino-home__icon-free-spin {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/casino-home/icon-free-spin-e74c19a656.svg")
}

.oc-image__casino-home__icon-live-dealer {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/casino-home/icon-live-dealer-d87f691a0d.svg")
}

.oc-image__casino-home__icon-slots {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/casino-home/icon-slots-f4a29efff8.svg")
}

.oc-image__casino-home__live-dealer-quadrant-mobile {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/casino-home/live-dealer-quadrant-mobile-0ae77602a7.svg")
}

.oc-image__casino-home__live-dealer-quadrant {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/casino-home/live-dealer-quadrant-ee08e50e36.svg")
}

.oc-image__casino-home__mobile-casino-quadrant-mobile {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/casino-home/mobile-casino-quadrant-mobile-7407a649c8.svg")
}

.oc-image__casino-home__mobile-casino-quadrant {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/casino-home/mobile-casino-quadrant-7dd3f01985.svg")
}

.oc-image__casino-home__newest-casino-quadrant-mobile {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/casino-home/newest-casino-quadrant-mobile-a282a1a26f.svg")
}

.oc-image__casino-home__newest-casino-quadrant {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/casino-home/newest-casino-quadrant-ebcfef3054.svg")
}

.oc-image__chrome {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/chrome-99f0b30c95.svg")
}

.oc-image__compliance__begambleaware {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/compliance/begambleaware-4b7ffa57f8.svg")
}

.oc-image__compliance__gambling-therapy {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/compliance/gambling-therapy-e6793ce506.svg")
}

.oc-image__compliance__gamstop {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/compliance/gamstop-daebf489f6.svg")
}

.oc-image__compliance__raig {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/compliance/raig-2f16262e82.svg")
}

.oc-image__edge {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/edge-06c7aa18ca.svg")
}

.oc-image__firefox {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/firefox-ffa00c8838.svg")
}

.oc-image__flags-sprite {
    background: url("https://storybook.stg.affiliate.occloud.io/theme/img/flags-sprite-b5a32fb526.svg") 0 0/1300px 1100px no-repeat
}

.oc-image__football-comps__champions-league {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/football-comps/champions-league-4e8fc4cdf4.svg")
}

.oc-image__football-comps__efl-championship {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/football-comps/efl-championship-3f55a3baa0.svg")
}

.oc-image__football-comps__english-premier-league {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/football-comps/english-premier-league-4d3116b1b6.svg")
}

.oc-image__football-comps__europa-league {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/football-comps/europa-league-b164ea9d7c.svg")
}

.oc-image__football-comps__fa-cup {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/football-comps/fa-cup-9b62795394.svg")
}

.oc-image__football-comps__fifa-world-cup {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/football-comps/fifa-world-cup-c3973f830e.svg")
}

.oc-image__football-comps__la-liga {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/football-comps/la-liga-60e9927a07.svg")
}

.oc-image__football-comps__right-arrow {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/football-comps/right-arrow-36ea3a8dc2.svg")
}

.oc-image__football-cta-mobile {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/football-cta-mobile-faca0d46d2.svg")
}

.oc-image__football-cta {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/football-cta-9d7f39e65d.svg")
}

.oc-image__football-leagues__bundesliga {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/football-leagues/bundesliga-731686f8c8.svg")
}

.oc-image__football-leagues__caraboa-cup {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/football-leagues/caraboa-cup-988b5128ef.svg")
}

.oc-image__football-leagues__efl-championship {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/football-leagues/efl-championship-760ba564ba.svg")
}

.oc-image__football-leagues__efl-league-one {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/football-leagues/efl-league-one-87510eadec.svg")
}

.oc-image__football-leagues__efl-league-two {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/football-leagues/efl-league-two-c8f58939c7.svg")
}

.oc-image__football-leagues__eredivisie {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/football-leagues/eredivisie-ca43191131.svg")
}

.oc-image__football-leagues__fa-cup {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/football-leagues/fa-cup-d111d99f5a.svg")
}

.oc-image__football-leagues__laliga {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/football-leagues/laliga-a7b9643a09.svg")
}

.oc-image__football-leagues__ligue-1 {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/football-leagues/ligue-1-b3f7b39805.svg")
}

.oc-image__football-leagues__mls {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/football-leagues/mls-80c5398761.svg")
}

.oc-image__football-leagues__placeholder {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/football-leagues/placeholder-670a3b97fd.svg")
}

.oc-image__football-leagues__premier-league {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/football-leagues/premier-league-27a42eda80.svg")
}

.oc-image__football-leagues__right-arrow {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/football-leagues/right-arrow-36ea3a8dc2.svg")
}

.oc-image__football-leagues__scottish-championship {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/football-leagues/scottish-championship-b72bd124ad.svg")
}

.oc-image__football-leagues__scottish-premiership {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/football-leagues/scottish-premiership-b72bd124ad.svg")
}

.oc-image__football-leagues__serie-a {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/football-leagues/serie-a-628e9abad4.svg")
}

.oc-image__football-leagues__uefa-champions-league {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/football-leagues/uefa-champions-league-b81f0e4f6d.svg")
}

.oc-image__football-leagues__uefa-europa-conference-league {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/football-leagues/uefa-europa-conference-league-d00c5b51e7.svg")
}

.oc-image__football-leagues__uefa-europa-league {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/football-leagues/uefa-europa-league-201c77004d.svg")
}

.oc-image__football-leagues__uefa-nations-league {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/football-leagues/uefa-nations-league-342c84328f.svg")
}

.oc-image__football-leagues__world-cup {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/football-leagues/world-cup-4ea3447f5d.svg")
}

.oc-image__horse-racing__horse-racing-cup {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/horse-racing/horse-racing-cup-2b0320d318.svg")
}

.oc-image__icons__account {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/account-c148e29ca0.svg")
}

.oc-image__icons__announcement {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/announcement-67388a7f77.svg")
}

.oc-image__icons__app {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/app-fe3a32bf15.svg")
}

.oc-image__icons__arrow-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/arrow-black-7f8ddb70fa.svg")
}

.oc-image__icons__arrow-down-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/arrow-down-black-2af73aeec9.svg")
}

.oc-image__icons__arrow-right-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/arrow-right-black-0b43b3bf16.svg")
}

.oc-image__icons__arrow-right-green {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/arrow-right-green-20b98c1f06.svg")
}

.oc-image__icons__arrow-right {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/arrow-right-6293845022.svg")
}

.oc-image__icons__arrow-up-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/arrow-up-black-b934489d98.svg")
}

.oc-image__icons__arrow-up-blue {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/arrow-up-blue-c1eb9cf5b1.svg")
}

.oc-image__icons__arrow {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/arrow-786092297e.svg")
}

.oc-image__icons__betslip {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/betslip-1fc61a52ab.svg")
}

.oc-image__icons__blank-team-shield {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/blank-team-shield-0742e6482f.png")
}

.oc-image__icons__check-green {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/check-green-92509e8a60.svg")
}

.oc-image__icons__checked {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/checked-e108801a26.svg")
}

.oc-image__icons__close-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/close-black-5f39fe2e8a.svg")
}

.oc-image__icons__close-splash {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/close-splash-dcc330452a.svg")
}

.oc-image__icons__close {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/close-3c4397d6af.svg")
}

.oc-image__icons__default-jockey-jersey {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/default-jockey-jersey-4722b3d438.svg")
}

.oc-image__icons__error-red {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/error-red-f703c7f5c7.svg")
}

.oc-image__icons__fast-withdrawals {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/fast-withdrawals-50a4ce020e.svg")
}

.oc-image__icons__filter {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/filter-489dc09e9e.svg")
}

.oc-image__icons__finished-subevent {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/finished-subevent-bd34419242.svg")
}

.oc-image__icons__first-place {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/first-place-b15843b65e.svg")
}

.oc-image__icons__go-to-channel {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/go-to-channel-5087421822.png")
}

.oc-image__icons__info {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/info-5d8d47bf1d.svg")
}

.oc-image__icons__information {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/information-17c21034fc.svg")
}

.oc-image__icons__loading-spinner {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/loading-spinner-2df2f92a5d.svg")
}

.oc-image__icons__match-stats {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/match-stats-640a579193.svg")
}

.oc-image__icons__my-bets-white {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/my-bets-white-6bbbcf2b46.svg")
}

.oc-image__icons__my-bets {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/my-bets-0c965e85ed.svg")
}

.oc-image__icons__my-bookmakers-white {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/my-bookmakers-white-5ded6af6e3.svg")
}

.oc-image__icons__my-bookmakers {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/my-bookmakers-cdf4ad29a2.svg")
}

.oc-image__icons__no-lineups {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/no-lineups-12eabab951.svg")
}

.oc-image__icons__offer-arrow-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/offer-arrow-black-e903cf3d6d.svg")
}

.oc-image__icons__offer-arrow-white {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/offer-arrow-white-f5770cd8ae.svg")
}

.oc-image__icons__play {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/play-2e7aeb5517.svg")
}

.oc-image__icons__present-blue {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/present-blue-1c0739c6d0.svg")
}

.oc-image__icons__present-green {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/present-green-2bdfc91866.svg")
}

.oc-image__icons__present-white {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/present-white-94bed247cd.svg")
}

.oc-image__icons__present {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/present-afa56aa554.svg")
}

.oc-image__icons__privacy {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/privacy-da65dd1616.svg")
}

.oc-image__icons__quick-bets {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/quick-bets-d64b5cbb24.svg")
}

.oc-image__icons__search-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/search-black-273a692ec3.svg")
}

.oc-image__icons__search-grey {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/search-grey-e1ed725ae8.svg")
}

.oc-image__icons__search-white {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/search-white-e0512d5806.svg")
}

.oc-image__icons__secure-trusted {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/secure-trusted-a4d7f71b05.svg")
}

.oc-image__icons__setting {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/setting-ca0b128953.svg")
}

.oc-image__icons__thumbs-up {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/thumbs-up-5ca47ae2a1.svg")
}

.oc-image__icons__tick-green {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/tick-green-51db345605.svg")
}

.oc-image__icons__tick-white {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/tick-white-96eb409099.svg")
}

.oc-image__icons__uk {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/uk-37b3c0f779.svg")
}

.oc-image__icons__unsupported-browser {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/unsupported-browser-84db45c245.svg")
}

.oc-image__icons__up-arrow-green {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/up-arrow-green-0a68a521d2.svg")
}

.oc-image__icons__verified-badge {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/verified-badge-99e12bb893.svg")
}

.oc-image__labels__best-odds {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/labels/best-odds-ca76223f75.svg")
}

.oc-image__logos__oddschecker {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/logos/oddschecker-3364eaa4a8.svg")
}

.oc-image__logos__stripe {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/logos/stripe-ccce11a591.svg")
}

.oc-image__logos__whoscore-predictions {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/logos/whoscore-predictions-0c6738deee.svg")
}

.oc-image__logos__whoscored {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/logos/whoscored-794c5f8e1e.svg")
}

.oc-image__menu__betting {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/menu/betting-8f0b71f99b.svg")
}

.oc-image__menu__casino-white {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/menu/casino-white-595bd125ce.svg")
}

.oc-image__menu__casino {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/menu/casino-900d482d34.svg")
}

.oc-image__menu__freebet {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/menu/freebet-193b6e262c.svg")
}

.oc-image__menu__home-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/menu/home-black-7424fa6c1e.svg")
}

.oc-image__menu__home-dark {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/menu/home-dark-ba5185c1ae.svg")
}

.oc-image__menu__home-white {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/menu/home-white-895c121c73.svg")
}

.oc-image__menu__home {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/menu/home-09d4339521.svg")
}

.oc-image__menu__insight-white {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/menu/insight-white-2815c804b0.svg")
}

.oc-image__menu__insight {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/menu/insight-8f47684472.svg")
}

.oc-image__menu__poker {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/menu/poker-adfda9547f.svg")
}

.oc-image__menu__tip-white {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/menu/tip-white-e62bace5b4.svg")
}

.oc-image__menu__tip {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/menu/tip-31dfc0201f.svg")
}

.oc-image__opera {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/opera-de2866806e.svg")
}

.oc-image__promo__inc-reg__bookie-offers-promo-hero-image-mb {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/promo/inc-reg/bookie-offers-promo-hero-image-mb-f6e0088795.png")
}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .oc-image__promo__inc-reg__bookie-offers-promo-hero-image-mb {
        background-image:url("https://storybook.stg.affiliate.occloud.io/theme/img/promo/inc-reg/bookie-offers-promo-hero-image-mb@2x-546f74c84e.png")
    }
}

.oc-image__promo__inc-reg__bookie-offers-promo-hero-image {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/promo/inc-reg/bookie-offers-promo-hero-image-e6ecbba94b.png")
}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .oc-image__promo__inc-reg__bookie-offers-promo-hero-image {
        background-image:url("https://storybook.stg.affiliate.occloud.io/theme/img/promo/inc-reg/bookie-offers-promo-hero-image@2x-2fac7c96ff.png")
    }
}

.oc-image__promo__inc-reg__inc-reg-promo-modal-img {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/promo/inc-reg/inc-reg-promo-modal-img-2223916e08.png")
}

.oc-image__safari-ios {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/safari-ios-b6d7facfb5.svg")
}

.oc-image__safer_gambling__responsible-gaming-banner-mobile {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/safer_gambling/responsible-gaming-banner-mobile-2b838628ce.png")
}

.oc-image__safer_gambling__responsible-gaming-banner {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/safer_gambling/responsible-gaming-banner-bdec35bb29.png")
}

.oc-image__social__facebook {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/social/facebook-c853828516.svg")
}

.oc-image__social__instagram {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/social/instagram-d43015d91f.svg")
}

.oc-image__social__snapchat {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/social/snapchat-2d2b6f322d.svg")
}

.oc-image__social__twitter {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/social/twitter-5e55bcfb94.svg")
}

.oc-image__social__youtube {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/social/youtube-773fc7a208.svg")
}

.oc-image__sport-icons__american-football-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/american-football-black-8e7ae4de88.svg")
}

.oc-image__sport-icons__american-football {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/american-football-f044495333.svg")
}

.oc-image__sport-icons__athletics-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/athletics-black-3124d37da2.svg")
}

.oc-image__sport-icons__athletics {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/athletics-544d328574.svg")
}

.oc-image__sport-icons__australian-rugby-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/australian-rugby-black-b00173afc1.svg")
}

.oc-image__sport-icons__australian-rugby {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/australian-rugby-725cc92a48.svg")
}

.oc-image__sport-icons__awards-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/awards-black-bec0967bfc.svg")
}

.oc-image__sport-icons__awards {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/awards-d7b997ae38.svg")
}

.oc-image__sport-icons__badminton-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/badminton-black-6e527361ed.svg")
}

.oc-image__sport-icons__badminton {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/badminton-859a9c2a01.svg")
}

.oc-image__sport-icons__baseball-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/baseball-black-75e14c9788.svg")
}

.oc-image__sport-icons__baseball {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/baseball-20042a6eca.svg")
}

.oc-image__sport-icons__basketball-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/basketball-black-db0b4c8578.svg")
}

.oc-image__sport-icons__basketball {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/basketball-fbfd1fb80d.svg")
}

.oc-image__sport-icons__bowls-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/bowls-black-ff2d429b92.svg")
}

.oc-image__sport-icons__bowls {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/bowls-a6296ed2a0.svg")
}

.oc-image__sport-icons__boxing-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/boxing-black-5ccd3c648c.svg")
}

.oc-image__sport-icons__boxing {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/boxing-97173d9bff.svg")
}

.oc-image__sport-icons__cheltenham-festival-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/cheltenham-festival-black-26e593e684.svg")
}

.oc-image__sport-icons__cheltenham-festival {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/cheltenham-festival-712f359611.svg")
}

.oc-image__sport-icons__chess-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/chess-black-2c410cd4bc.svg")
}

.oc-image__sport-icons__chess {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/chess-b7bdb279a5.svg")
}

.oc-image__sport-icons__cricket-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/cricket-black-415b8a9616.svg")
}

.oc-image__sport-icons__cricket {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/cricket-99397f8583.svg")
}

.oc-image__sport-icons__cycling-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/cycling-black-302d913299.svg")
}

.oc-image__sport-icons__cycling {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/cycling-ac5a1865d9.svg")
}

.oc-image__sport-icons__darts-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/darts-black-4a0fa2fabc.svg")
}

.oc-image__sport-icons__darts {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/darts-3c2e7652a9.svg")
}

.oc-image__sport-icons__e-sports-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/e-sports-black-d2c2b8c561.svg")
}

.oc-image__sport-icons__e-sports {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/e-sports-d2b9d4d406.svg")
}

.oc-image__sport-icons__football-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/football-black-6edee45a65.svg")
}

.oc-image__sport-icons__football {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/football-008b54ae91.svg")
}

.oc-image__sport-icons__gaelic-games-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/gaelic-games-black-d2ba6f7f9e.svg")
}

.oc-image__sport-icons__gaelic-games {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/gaelic-games-8b5ce410bb.svg")
}

.oc-image__sport-icons__goal {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/goal-66b7dfaf23.png")
}

.oc-image__sport-icons__golf-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/golf-black-5c83256d9a.svg")
}

.oc-image__sport-icons__golf {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/golf-db07703f2c.svg")
}

.oc-image__sport-icons__greyhounds-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/greyhounds-black-4df621f1fa.svg")
}

.oc-image__sport-icons__greyhounds {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/greyhounds-d197d7d9cc.svg")
}

.oc-image__sport-icons__handball-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/handball-black-896f9a4019.svg")
}

.oc-image__sport-icons__handball {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/handball-55f15cf90a.svg")
}

.oc-image__sport-icons__harness-racing-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/harness-racing-black-87d3a0b947.svg")
}

.oc-image__sport-icons__harness-racing {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/harness-racing-45f869d34b.svg")
}

.oc-image__sport-icons__horse-racing-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/horse-racing-black-26e593e684.svg")
}

.oc-image__sport-icons__horse-racing {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/horse-racing-712f359611.svg")
}

.oc-image__sport-icons__horse-silk-place-holder {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/horse-silk-place-holder-e5c7339f3a.svg")
}

.oc-image__sport-icons__ice-hockey-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/ice-hockey-black-788c5a0dcc.svg")
}

.oc-image__sport-icons__ice-hockey {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/ice-hockey-3cc512c0b1.svg")
}

.oc-image__sport-icons__motorsport-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/motorsport-black-ffe0139661.svg")
}

.oc-image__sport-icons__motorsport {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/motorsport-91a4d68720.svg")
}

.oc-image__sport-icons__netball-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/netball-black-47e2c25770.svg")
}

.oc-image__sport-icons__netball {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/netball-165e10faf5.svg")
}

.oc-image__sport-icons__novelty-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/novelty-black-bec0967bfc.svg")
}

.oc-image__sport-icons__novelty {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/novelty-d7b997ae38.svg")
}

.oc-image__sport-icons__poker-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/poker-black-8a168b4cdd.svg")
}

.oc-image__sport-icons__poker {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/poker-6e43520369.svg")
}

.oc-image__sport-icons__politics-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/politics-black-5095d3c400.svg")
}

.oc-image__sport-icons__politics {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/politics-ac3f386e1f.svg")
}

.oc-image__sport-icons__pool-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/pool-black-59e1aaddc5.svg")
}

.oc-image__sport-icons__pool {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/pool-3de00890e1.svg")
}

.oc-image__sport-icons__rowing-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/rowing-black-8c6d738692.svg")
}

.oc-image__sport-icons__rowing {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/rowing-68722929b6.svg")
}

.oc-image__sport-icons__rugby-league-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/rugby-league-black-6d5da3fa8c.svg")
}

.oc-image__sport-icons__rugby-league {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/rugby-league-8103b3c681.svg")
}

.oc-image__sport-icons__rugby-union-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/rugby-union-black-6d5da3fa8c.svg")
}

.oc-image__sport-icons__rugby-union {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/rugby-union-8103b3c681.svg")
}

.oc-image__sport-icons__snooker-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/snooker-black-59e1aaddc5.svg")
}

.oc-image__sport-icons__snooker {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/snooker-3de00890e1.svg")
}

.oc-image__sport-icons__squash-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/squash-black-687285ac0e.svg")
}

.oc-image__sport-icons__squash {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/squash-72ce97b9de.svg")
}

.oc-image__sport-icons__sub {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/sub-858aa32ae5.png")
}

.oc-image__sport-icons__surfing-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/surfing-black-f44ddc9eaa.svg")
}

.oc-image__sport-icons__surfing {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/surfing-4af63d3ea9.svg")
}

.oc-image__sport-icons__table-tennis-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/table-tennis-black-388e98da6c.svg")
}

.oc-image__sport-icons__table-tennis {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/table-tennis-70a070b834.svg")
}

.oc-image__sport-icons__tennis-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/tennis-black-cbb1b386b1.svg")
}

.oc-image__sport-icons__tennis {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/tennis-1e131935b7.svg")
}

.oc-image__sport-icons__tv-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/tv-black-193704f583.svg")
}

.oc-image__sport-icons__tv {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/tv-4092a393a5.svg")
}

.oc-image__sport-icons__ufc-mma-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/ufc-mma-black-46e681852b.svg")
}

.oc-image__sport-icons__ufc-mma {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/ufc-mma-bc52959826.svg")
}

.oc-image__sport-icons__volleyball-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/volleyball-black-f9c858e403.svg")
}

.oc-image__sport-icons__volleyball {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/volleyball-1f7b44c19c.svg")
}

.oc-image__sport-icons__water-polo-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/water-polo-black-7a96e2f8c3.svg")
}

.oc-image__sport-icons__water-polo {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/water-polo-552ce90da2.svg")
}

.oc-image__sport-icons__winter-sports-black {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/winter-sports-black-d79dfed15a.svg")
}

.oc-image__sport-icons__winter-sports {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/winter-sports-bfbc7e440d.svg")
}

.oc-image__white-opacity {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/white-opacity-eed247b9d9.png")
}

.webp .oc-image__icons__blank-team-shield {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/blank-team-shield-25f7691f5c.webp")
}

.webp .oc-image__icons__go-to-channel {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/icons/go-to-channel-62cc097fe4.webp")
}

.webp .oc-image__promo__inc-reg__bookie-offers-promo-hero-image-mb {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/promo/inc-reg/bookie-offers-promo-hero-image-mb-c0e940c146.webp")
}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .webp .oc-image__promo__inc-reg__bookie-offers-promo-hero-image-mb {
        background-image:url("https://storybook.stg.affiliate.occloud.io/theme/img/promo/inc-reg/bookie-offers-promo-hero-image-mb@2x-f56a4532cd.webp")
    }
}

.webp .oc-image__promo__inc-reg__bookie-offers-promo-hero-image {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/promo/inc-reg/bookie-offers-promo-hero-image-e03bf636e2.webp")
}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .webp .oc-image__promo__inc-reg__bookie-offers-promo-hero-image {
        background-image:url("https://storybook.stg.affiliate.occloud.io/theme/img/promo/inc-reg/bookie-offers-promo-hero-image@2x-73a7afaaf5.webp")
    }
}

.webp .oc-image__promo__inc-reg__inc-reg-promo-modal-img {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/promo/inc-reg/inc-reg-promo-modal-img-2f3e2abddc.webp")
}

.webp .oc-image__safer_gambling__responsible-gaming-banner-mobile {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/safer_gambling/responsible-gaming-banner-mobile-39c130c00a.webp")
}

.webp .oc-image__safer_gambling__responsible-gaming-banner {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/safer_gambling/responsible-gaming-banner-de08a53e80.webp")
}

.webp .oc-image__sport-icons__goal {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/goal-3ab99f9b48.webp")
}

.webp .oc-image__sport-icons__sub {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/sport-icons/sub-722778bde9.webp")
}

.webp .oc-image__white-opacity {
    background-image: url("https://storybook.stg.affiliate.occloud.io/theme/img/white-opacity-434442ce43.webp")
}

.container,.container-fluid,.container-l,.container-xl,.container-xxl {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto
}

@media (min-width: 1024px) {
    .container,.container-xs,.container-s,.container-m,.container-l {
        max-width:930px;
        padding-right: 0;
        padding-left: 0
    }
}

@media (min-width: 1281px) {
    .container,.container-xs,.container-s,.container-m,.container-l,.container-xl {
        max-width:1000px
    }
}

@media (min-width: 1361px) {
    .container,.container-xs,.container-s,.container-m,.container-l,.container-xl,.container-xxl {
        max-width:1200px
    }
}

.full-bleed-wrapper,.full-bleed-wrapper-l,.full-bleed-wrapper-xl,.full-bleed-wrapper-xxl {
    display: grid;
    grid-template-columns: 1fr 100% 1fr
}

@media (min-width: 1024px) {
    .full-bleed-wrapper,.full-bleed-wrapper-l,.full-bleed-wrapper-xl,.full-bleed-wrapper-xxl,.full-bleed-wrapper-xs,.full-bleed-wrapper-s,.full-bleed-wrapper-m {
        grid-template-columns:1fr 930px 1fr;
        column-gap: 96px
    }
}

@media (min-width: 1281px) {
    .full-bleed-wrapper,.full-bleed-wrapper-l,.full-bleed-wrapper-xl,.full-bleed-wrapper-xxl,.full-bleed-wrapper-xs,.full-bleed-wrapper-s,.full-bleed-wrapper-m {
        grid-template-columns:1fr 1000px 1fr;
        column-gap: 61px
    }
}

@media (min-width: 1361px) {
    .full-bleed-wrapper,.full-bleed-wrapper-l,.full-bleed-wrapper-xl,.full-bleed-wrapper-xxl,.full-bleed-wrapper-xs,.full-bleed-wrapper-s,.full-bleed-wrapper-m {
        grid-template-columns:1fr 1200px 1fr;
        column-gap: 20px
    }
}

@media (max-width: 1121px) {
    .full-bleed-wrapper,.full-bleed-wrapper-l,.full-bleed-wrapper-xl,.full-bleed-wrapper-xxl {
        column-gap:0
    }
}

.full-bleed-wrapper>*,.full-bleed-wrapper-l>*,.full-bleed-wrapper-xl>*,.full-bleed-wrapper-xxl>* {
    grid-column: 2
}

.full-bleed-sidebar {
    position: relative
}

.full-bleed-sidebar__left {
    grid-column: 1
}

.full-bleed-sidebar__right {
    grid-column: 3
}

@media (max-width: 1121px) {
    .full-bleed-sidebar {
        display:none
    }
}

.full-bleed {
    width: 100%;
    grid-column: 1 / -1;
    padding: 0
}

.takeover-aside {
    display: none;
    position: absolute;
    z-index: 101;
    top: 240px;
    overflow: hidden
}

.takeover-aside.sticky {
    position: fixed
}

@media (min-width: 1200px) {
    .takeover-aside {
        display:block
    }
}

.takeover-aside-right {
    right: 0
}

.takeover-aside-left {
    left: 0
}

.ad-container-wrap {
    position: relative
}

#leaderboard {
    width: 100%;
    margin: 0 auto;
    background: #014c6b
}

#leaderboard2 {
    width: 100%;
    margin: 0 auto 20px auto;
    padding: 10px 0 0
}

#ad-leaderboard {
    padding: 15px 0 0
}

#ad-leaderboard,#ad-leaderboard2 {
    display: none
}

@media (min-width: 1200px) {
    #ad-leaderboard,#ad-leaderboard2 {
        display:block
    }
}

#ad-container-leaderboard {
    width: 100%;
    margin: 0 auto;
    padding: 10px 0
}

#ad-leaderboard,#ad-leaderboard2 {
  width: 728px;
  overflow: hidden;
  margin: 0 auto
}

#ad-leaderboard {
  height: 105px
}

#ad-container-leaderboard2 {
  float: left;
  width: 100%;
  height: 90px;
  margin: 0 auto;
  padding: 10px 0
}

#apn_ad_slot_left {
  display: flex;
  justify-content: flex-end
}

#billboard #billboard-centre {
  width: 100%;
  margin: 0 auto
}

#billboard #ad-container-billboard {
  padding-bottom: 0;
  margin: 0;
  width: auto
}

#billboard #beta-ad-container-billboard {
  width: 100%
}

#billboard #ad-billboard {
  width: 970px;
  overflow: hidden;
  margin: 0 auto;
  height: 280px;
  padding: 15px 0
}

#gdpr-banner>div {
  position: fixed;
  background-color: #0edd98
}

#gdpr-banner a {
  font-size: inherit
}

@media (max-width: 1024px) {
  #gdpr-banner>div {
    bottom:49px
  }

  @supports (padding: 0px) {
    #gdpr-banner>div {
      bottom:calc(49px + env(safe-area-inset-bottom))
    }
  }
}

.myoc-login .container--visible {
  z-index: 9999
}

.myoc-login input[type=email],.myoc-login input[type=password] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none
}

.sba-container {
  box-shadow: none !important
}

.sba-open body {
  margin: 0 !important
}

.sba-open #loading-overlay {
  background: rgba(0,0,0,0.8);
  z-index: 501 !important
}

.sba-open .sba-container,.sba-open .sba-loading {
  z-index: 10000 !important
}

.sba-open .sba-loading {
  display: block !important
}

.sba-open .sba-loading p {
  display: none
}

.sba-open .sba-loading:after {
  content: "Please login to continue..."
}

.sba-loading {
  -webkit-filter: drop-shadow(0 -1px 5px rgba(0,0,0,0.42));
  -moz-filter: drop-shadow(0 -1px 5px rgba(0,0,0,0.42));
  -o-filter: drop-shadow(0 -1px 5px rgba(0,0,0,0.42));
  filter: drop-shadow(0 -1px 5px rgba(0,0,0,0.42));
  box-shadow: 0px -1px 20px -3px rgba(0,0,0,0.42);
  z-index: 500 !important
}

.sba-loading p {
  font-size: 14px
}

.lock-body-scroll {
  overflow: hidden !important
}
`;
