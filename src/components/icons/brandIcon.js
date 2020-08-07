import React from "react";
import pure from "recompose/pure";

let BrandIcon = (props) => {
  return (
    <svg
      version="1.1"
      id="brand-icon"
      viewBox="0 0 256 256"
      x="0"
      y="0"
      preserveAspectRatio="xMidYMid meet"
      width={props.size || 24}
      height={props.size || 24}
    >
      <defs>
        <linearGradient
          id="prefix__a"
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#00eabd" />
          <stop offset={1} stopColor="#52f06a" />
        </linearGradient>
      </defs>
      <path
        d="M1080.2 344.394L987.817 480.26l31.459-1.243-43.253 121.377 97.3-144.789-35.443 1z"
        transform="translate(-865.886 -344.394)"
        fill="url('#prefix__a')"
      />
      <g fill="#fff">
        <path d="M11.864 121.824H0V93.476h11.387c5.534 0 8.759 3.107 8.759 7.964a6.556 6.556 0 01-3.5 5.853 6.586 6.586 0 013.9 6.37c-.002 5.294-3.625 8.161-8.682 8.161zm-.915-23.41H5.535v6.53h5.414c2.349 0 3.663-1.314 3.663-3.265s-1.314-3.266-3.664-3.266zm.359 11.507H5.535v6.967h5.773a3.356 3.356 0 003.7-3.5c.001-1.915-1.192-3.468-3.701-3.468zm25.118 11.902v-1.791a6.305 6.305 0 01-5.1 1.99 7.074 7.074 0 01-5.3-1.832 6.643 6.643 0 01-1.712-4.658c0-3.3 2.27-6.011 7.087-6.011h4.9v-1.036c0-2.269-1.114-3.265-3.861-3.265a4.451 4.451 0 00-3.981 1.712l-3.3-3.225c2.03-2.23 4.021-2.866 7.485-2.866 5.812 0 8.839 2.468 8.839 7.326v13.656zm-.119-8.759h-4.1c-1.872 0-2.906.876-2.906 2.349 0 1.432.955 2.388 2.986 2.388a4.1 4.1 0 003.265-.995 3.41 3.41 0 00.756-2.628zm17.236 8.76a5.625 5.625 0 01-6.012-5.932V105.62h-2.19v-3.942h2.19v-6.131h5.176v6.131h3.662v3.942h-3.662v9.951c0 1.194.557 1.871 1.792 1.871h1.87v4.379zm14.013 0a5.625 5.625 0 01-6.012-5.932V105.62h-2.19v-3.942h2.19v-6.131h5.176v6.131h3.663v3.942H66.72v9.951c0 1.194.557 1.871 1.791 1.871h1.872v4.379zm11.465-8.759a4.284 4.284 0 004.539 4.618 5.741 5.741 0 004.7-1.951l3.145 3.066a9.878 9.878 0 01-7.883 3.265c-4.9 0-9.595-2.23-9.595-10.63 0-6.768 3.663-10.591 9.038-10.591 5.773 0 9.037 4.22 9.037 9.914v2.309zm7.405-5.772a3.864 3.864 0 00-6.927 0 5.71 5.71 0 00-.478 2.229h7.883a5.714 5.714 0 00-.477-2.23zm21.616-.559a3.448 3.448 0 00-2.747-1.233c-1.592 0-3.344 1.195-3.344 3.822v12.5h-5.175v-20.742h5.056v1.991a7.022 7.022 0 015.216-2.229 6.259 6.259 0 014.9 1.95zm14.568 18.434a7.363 7.363 0 01-1.552 2.668 6 6 0 01-4.459 1.593h-2.031v-4.658h1.195a2.238 2.238 0 002.588-1.871l.876-2.548-7.086-19.27h5.454l4.3 12.82 4.141-12.82h5.449zM30.691 200.022H0V129.53h29.206c14.654 0 22.474 8.218 22.474 20.4 0 8.019-5.544 12.474-7.723 13.96 2.871 1.783 8.713 5.445 8.713 15.346.001 13.46-9.405 20.786-21.979 20.786zm-2.574-54.945H17.328v11.484H28.12c4.753 0 6.238-2.97 6.238-5.742s-1.488-5.742-6.241-5.742zm.891 27.027h-11.68v12.373h11.68c4.753 0 6.336-3.267 6.336-6.237s-1.583-6.138-6.336-6.138zm57.124 27.918v-4.356a18.051 18.051 0 01-12.377 4.95 16.434 16.434 0 01-11.979-4.555c-4.555-4.554-5.347-9.6-5.347-15.246v-34.058h16.237v31.879c0 6.139 4.356 7.327 6.534 7.327s6.534-1.188 6.534-7.327v-31.879h16.236v53.265zm50.455 0v-4.356c-3.267 3.266-6.732 4.95-12.276 4.95-5.148 0-9.9-1.783-12.97-4.851-5.248-5.248-4.951-14.555-4.951-22.376s-.3-17.127 4.951-22.375a18.133 18.133 0 0112.871-4.852c5.247 0 8.911 1.486 11.881 4.456V129.53h16.236v70.492zm-7.227-39.206c-6.04 0-6.733 4.852-6.733 12.573s.693 12.574 6.733 12.574 6.732-4.851 6.732-12.574-.693-12.573-6.733-12.573zm57.546 39.206v-4.356c-3.267 3.266-6.733 4.95-12.276 4.95-5.149 0-9.9-1.783-12.97-4.851-5.248-5.248-4.95-14.555-4.95-22.376s-.3-17.127 4.95-22.375a18.132 18.132 0 0112.871-4.852c5.247 0 8.911 1.486 11.881 4.456V129.53h16.236v70.492zm-7.228-39.206c-6.04 0-6.733 4.852-6.733 12.573s.693 12.574 6.733 12.574 6.733-4.851 6.733-12.574-.689-12.573-6.733-12.573z" />
        <path d="M232.215 206.359a18.385 18.385 0 01-4.157 7.03c-3.169 3.366-7.229 4.455-11.98 4.455h-6.134v-14.658h3.465c2.871 0 4.357-.694 5.447-3.961l1.484-4.454-17.722-48.018h17.026l9.009 27.623 8.613-27.623h17.03z" />
      </g>
    </svg>
  );
};
BrandIcon = pure(BrandIcon);
BrandIcon.displayName = "BrandIcon";
BrandIcon.muiName = "SvgIcon";

export default BrandIcon;
