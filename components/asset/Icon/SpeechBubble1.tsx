const SpeechBubble1 = ({
  width = 321,
  height = 351,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 321 351"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_3075_2727)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M181.895 320.049C182.501 319.13 183.479 318.518 184.568 318.356C261.627 306.844 320.729 240.384 320.729 160.12C320.729 71.7552 249.094 0.121094 160.729 0.121094C72.363 0.121094 0.728516 71.7552 0.728516 160.12C0.728516 240.385 59.8309 306.845 136.89 318.356C137.979 318.518 138.958 319.13 139.564 320.049L159.132 349.705C159.888 350.851 161.57 350.851 162.326 349.705L181.895 320.049Z"
          fill="#1CD7AE"
        />
        <path
          d="M152.728 96.1133C135.128 96.1133 120.728 110.513 120.728 128.113C120.728 145.713 135.128 160.113 152.728 160.113C170.328 160.113 184.728 145.713 184.728 128.113C184.728 110.513 170.328 96.1133 152.728 96.1133ZM152.728 176.113C117.528 176.113 88.7275 190.513 88.7275 208.113V224.113H164.728C162.328 217.713 160.728 211.313 160.728 204.113C160.728 194.513 163.128 185.713 167.928 176.913C163.128 176.913 158.328 176.113 152.728 176.113Z"
          fill="white"
        />
        <path
          d="M232.728 208.113H200.728V224.113L176.728 200.113L200.728 176.113V192.113H232.728V208.113Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_3075_2727"
          x="0.728516"
          y="0.121094"
          width="320"
          height="354.855"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4.4092" />
          <feGaussianBlur stdDeviation="2.2046" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_3075_2727"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default SpeechBubble1;
