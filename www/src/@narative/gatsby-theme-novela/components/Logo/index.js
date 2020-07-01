import React from "react";

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property vallue called `fill`. `fill` is useful
 * when you want to change your logo depending on the theme you are on.
 */
export default function Logo({ fill }) {
    return (


      <svg
        width="18"
        height="23"
        viewBox="0 0 18 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="Logo__Mobile"
      >
        <path d="M17.5907 20.2954H0V23H17.5907V20.2954Z" fill={fill} />
        <path
          d="M0 7.96484V18.9537L5.38796 15.1843V11.7343L0 7.96484Z"
          fill={fill}
        />
        <path
          d="M17.5689 10.9463V0L12.1597 3.74815V7.13426L17.5689 10.9463Z"
          fill={fill}
        />
        <path
          d="M17.5907 18.975L17.5694 12.288L0 0V6.62315L17.5907 18.975Z"
          fill={fill}
        />
      </svg>
    );
}
