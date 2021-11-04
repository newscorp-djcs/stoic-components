import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const ScreenReaderOnly: React.FC = () => {
  const mask0 = getSSRId();
  const mask1 = getSSRId();
  const filter0 = getSSRId();
  return (
    <Svg
      width="1490"
      height="839"
      viewBox="0 0 1490 839"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M0 4.90968C0 2.70054 1.79 0.909668 3.99807 0.909668H1486C1488.21 0.909668 1490 2.70053 1490 4.90967V834.913C1490 837.122 1488.21 838.913 1486 838.913H3.99809C1.79002 838.913 0 837.122 0 834.913V4.90968Z"
        fill="illustrationBackground020"
      />
      <mask
        id={mask0}
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="454"
        y="216"
        width="583"
        height="379"
      >
        <Path
          d="M454.404 269.906C454.404 240.637 478.131 216.91 507.4 216.91H983.482C1012.75 216.91 1036.48 240.637 1036.48 269.906V594.065H454.404V269.906Z"
          fill="white"
        />
      </mask>
      <g mask={`url(#${mask0})`}>
        <Path
          d="M549.114 99.0202C268.474 147.744 101.79 334.316 176.815 515.74C251.839 697.164 540.163 804.738 820.803 756.014C1101.44 707.29 1268.13 520.718 1193.1 339.294C1118.08 157.87 829.755 50.296 549.114 99.0202Z"
          fill="illustrationPalette060"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1290.61 352.105C1242.87 172.982 1089.04 131.449 1085.5 130.221C981.969 94.3244 755.783 27.8938 596.443 64.9664C437.102 102.039 277.479 322.76 444.642 429.199C595.698 525.383 569.772 633.438 676.265 672.569C782.758 711.701 934.464 714.724 1078.77 669.572C1223.07 624.42 1338.36 531.229 1290.61 352.105Z"
          fill="illustrationPalette050"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1250.89 183.059C1372.15 294.213 1324.22 369.096 1323.34 370.965C1297.58 425.563 1263.11 501.086 1147.87 536.294C1032.63 571.502 846.026 537.074 842.11 536.159C764.61 518.049 765.017 434.185 717.763 381.171C666.995 324.212 627.221 275.065 651.902 217.737C676.583 160.408 792.276 120.124 878.065 88.0415C961.708 56.7608 1129.63 71.9056 1250.89 183.059Z"
          fill="illustrationPalette040"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1220.69 184.658C1290.27 248.445 1262.77 291.418 1262.26 292.49C1247.49 323.822 1227.7 367.162 1161.57 387.366C1095.44 407.571 988.352 387.814 986.105 387.289C941.631 376.897 941.864 328.77 914.747 298.347C885.613 265.66 862.788 237.457 876.952 204.558C891.115 171.659 957.508 148.542 1006.74 130.131C1054.74 112.18 1151.1 120.871 1220.69 184.658Z"
          fill="illustrationPalette030"
        />
      </g>
      <mask
        id={mask1}
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="424"
        y="604"
        width="642"
        height="67"
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M667.272 604.665H424.373V642.645C424.373 658.255 437.027 670.91 452.638 670.91H1037.36C1052.97 670.91 1065.63 658.255 1065.63 642.645V604.665H822.727V619.68C822.727 627.485 816.4 633.812 808.595 633.812H681.404C673.599 633.812 667.272 627.485 667.272 619.68V604.665Z"
          fill="white"
        />
      </mask>
      <g mask={`url(#${mask1})`}>
        <Path
          d="M544.763 96.1887C264.123 144.913 97.4383 331.485 172.463 512.909C247.488 694.332 535.811 801.907 816.452 753.183C1097.09 704.458 1263.78 517.886 1188.75 336.463C1113.73 155.039 825.403 47.4644 544.763 96.1887Z"
          fill="illustrationPalette060"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1286.26 349.274C1238.52 170.151 1084.69 128.618 1081.15 127.39C977.618 91.4934 751.432 25.0627 592.091 62.1353C432.75 99.2079 273.128 319.929 440.291 426.368C591.347 522.552 565.42 630.607 671.913 669.738C778.407 708.87 930.112 711.893 1074.42 666.741C1218.72 621.589 1334 528.398 1286.26 349.274Z"
          fill="illustrationPalette050"
        />
        <Path
          d="M1318.26 367.882C1318.29 367.825 1318.36 367.704 1318.46 367.518C1320.11 364.603 1330.68 345.876 1327.81 315.102C1324.76 282.374 1306.49 235.986 1245.98 180.513C1124.98 69.5979 957.486 54.537 874.151 85.7021C869.485 87.447 864.732 89.2158 859.91 91.0101C820.387 105.718 776.27 122.135 738.218 141.055C695.508 162.291 660.555 186.627 648.277 215.146C623.707 272.218 663.246 321.135 714.028 378.109C725.899 391.426 734.76 406.663 742.585 422.277C746.143 429.377 749.49 436.563 752.808 443.686C753.139 444.397 753.47 445.107 753.801 445.816C757.447 453.637 761.079 461.365 764.947 468.818C780.439 498.675 799.577 523.866 837.871 532.814C839.758 533.255 887.328 542.084 948.832 546.401C1010.34 550.719 1085.66 550.514 1143.12 532.957C1256.82 498.22 1291.73 424.158 1317.4 369.705C1317.69 369.095 1317.98 368.487 1318.26 367.882Z"
          fill="illustrationHighlight010"
          stroke="#577FFB"
          stroke-width="1.31691"
        />
      </g>
      <g filter={`url(#${filter0})`}>
        <Rect
          x="480.902"
          y="244.291"
          width="528.72"
          height="322.308"
          rx="24.4555"
          fill="illustrationBackground020"
        />
      </g>
      <Rect
        x="-0.629065"
        y="0.629065"
        width="395.742"
        height="13.9051"
        rx="6.95253"
        transform="matrix(-1 0 0 1 942.742 434.11)"
        fill="illustrationPalette020"
        stroke="#AEBFFF"
        stroke-width="1.25813"
      />
      <Rect
        x="-0.629065"
        y="0.629065"
        width="395.742"
        height="13.9051"
        rx="6.95253"
        transform="matrix(-1 0 0 1 942.742 398.728)"
        fill="illustrationPalette020"
        stroke="#AEBFFF"
        stroke-width="1.25813"
      />
      <Rect
        x="-0.629065"
        y="0.629065"
        width="395.742"
        height="13.9051"
        rx="6.95253"
        transform="matrix(-1 0 0 1 942.742 363.347)"
        fill="illustrationPalette020"
        stroke="#AEBFFF"
        stroke-width="1.25813"
      />
      <Rect
        x="-0.629065"
        y="0.629065"
        width="395.742"
        height="13.9051"
        rx="6.95253"
        transform="matrix(-1 0 0 1 942.742 327.967)"
        fill="illustrationPalette020"
        stroke="#AEBFFF"
        stroke-width="1.25813"
      />
      <Rect
        x="-0.629065"
        y="0.629065"
        width="198.49"
        height="13.9051"
        rx="6.95253"
        transform="matrix(-1 0 0 1 745.49 469.49)"
        fill="illustrationPalette020"
        stroke="#AEBFFF"
        stroke-width="1.25813"
      />
      <Path
        d="M901 184.91C901 171.655 911.745 160.91 925 160.91H1210C1223.25 160.91 1234 171.655 1234 184.91V335.335C1234 348.59 1223.25 359.335 1210 359.335H995.589C988.962 359.335 983.589 364.707 983.589 371.335V405.547C983.589 408.719 980.074 410.629 977.412 408.903L919.231 371.161C907.862 363.786 901 351.156 901 337.604V184.91Z"
        fill="illustrationInterface010"
      />
      <Path
        d="M1012.7 240.783L1012.7 237.379L1009.3 237.379C1002.45 237.379 995.872 240.046 991.011 244.814C986.148 249.584 983.403 256.068 983.403 262.842C983.403 269.617 986.148 276.101 991.011 280.871C995.872 285.638 1002.45 288.305 1009.3 288.305L1012.7 288.305L1012.7 284.902L1012.7 262.842L1012.7 240.783Z"
        fill="illustrationPalette040"
        stroke="#577FFB"
        stroke-width="6.80721"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1016.11 233.976L1016.11 291.709L1009.3 291.709C1001.57 291.709 994.133 288.699 988.629 283.301C983.12 277.898 980 270.541 980 262.842C980 255.143 983.12 247.787 988.629 242.384C994.133 236.985 1001.57 233.976 1009.3 233.976L1016.11 233.976ZM1002.49 283.867C999.092 282.808 995.964 280.961 993.395 278.441C989.177 274.304 986.807 268.693 986.807 262.842C986.807 256.992 989.177 251.381 993.395 247.244C995.964 244.724 999.092 242.876 1002.49 241.817C1004.67 241.138 1006.97 240.783 1009.3 240.783L1009.3 284.902C1006.97 284.902 1004.67 284.547 1002.49 283.867Z"
        fill="illustrationPalette080"
      />
      <Path
        d="M1052.85 205.892L1014.26 233.411C1012.25 234.841 1011.09 237.159 1011.09 239.601V285.219C1011.09 287.66 1012.25 289.978 1014.26 291.408L1052.85 318.928C1057.92 322.547 1064.61 318.709 1064.61 312.738V212.081C1064.61 206.111 1057.92 202.272 1052.85 205.892Z"
        fill="illustrationPalette040"
        stroke="#577FFB"
        stroke-width="6.80721"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1012.28 230.64L1050.87 203.12C1058.33 197.802 1068.01 203.503 1068.01 212.081V312.738C1068.01 321.316 1058.33 327.017 1050.87 321.699L1012.28 294.179C1009.36 292.098 1007.68 288.738 1007.68 285.219V239.601C1007.68 236.081 1009.36 232.721 1012.28 230.64ZM1016.23 236.182C1015.14 236.961 1014.49 238.237 1014.49 239.601V285.219C1014.49 286.582 1015.14 287.859 1016.23 288.637L1054.82 316.157C1057.51 318.077 1061.2 316.102 1061.2 312.738V212.081C1061.2 208.718 1057.51 206.742 1054.82 208.663L1016.23 236.182Z"
        fill="illustrationPalette080"
      />
      <Path
        d="M1092.17 246.629C1093.89 248.311 1095.33 250.263 1096.44 252.414C1098.06 255.568 1098.91 259.062 1098.93 262.609C1098.94 266.157 1098.11 269.657 1096.51 272.823C1095.42 274.983 1094 276.946 1092.29 278.641C1091.19 279.731 1089.37 279.489 1088.39 278.157C1087.44 276.86 1087.72 274.984 1088.87 273.685C1089.81 272.624 1090.61 271.442 1091.25 270.168C1092.43 267.832 1093.04 265.249 1093.03 262.632C1093.02 260.015 1092.39 257.437 1091.2 255.11C1090.54 253.84 1089.73 252.665 1088.78 251.611C1087.62 250.32 1087.33 248.447 1088.27 247.143C1089.24 245.803 1091.06 245.548 1092.17 246.629Z"
        fill="illustrationPalette040"
        stroke="#577FFB"
      />
      <Path
        d="M1107.54 231.773C1111.2 235.082 1114.25 239.034 1116.52 243.447C1119.48 249.199 1121.03 255.571 1121.06 262.039C1121.08 268.508 1119.57 274.891 1116.66 280.666C1114.42 285.096 1111.41 289.072 1107.77 292.408C1106.16 293.886 1103.62 293.517 1102.29 291.693C1100.97 289.894 1101.36 287.335 1103.02 285.717C1105.6 283.192 1107.76 280.25 1109.4 277.004C1111.74 272.374 1112.95 267.257 1112.93 262.071C1112.91 256.884 1111.66 251.777 1109.29 247.165C1107.63 243.931 1105.44 241.006 1102.84 238.501C1101.17 236.896 1100.76 234.34 1102.06 232.531C1103.38 230.696 1105.92 230.308 1107.54 231.773Z"
        fill="illustrationPalette040"
        stroke="#577FFB"
      />
      <Path
        d="M1118.45 209.465C1125.61 215.362 1131.5 222.664 1135.75 230.936C1140.69 240.527 1143.28 251.149 1143.32 261.935C1143.36 272.72 1140.85 283.362 1135.99 292.99C1131.8 301.294 1125.96 308.641 1118.86 314.594C1117.2 315.981 1114.72 315.61 1113.41 313.831C1112.12 312.067 1112.5 309.571 1114.2 308.12C1120.28 302.929 1125.28 296.571 1128.89 289.408C1133.19 280.9 1135.41 271.496 1135.37 261.965C1135.33 252.434 1133.04 243.048 1128.68 234.572C1125.01 227.437 1119.96 221.118 1113.85 215.974C1112.14 214.536 1111.74 212.043 1113.02 210.269C1114.31 208.48 1116.79 208.09 1118.45 209.465Z"
        fill="illustrationPalette040"
        stroke="#577FFB"
      />
      <defs>
        <filter
          id={filter0}
          x="464.902"
          y="236.291"
          width="560.719"
          height="354.308"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="8" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_15:25139"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_15:25139"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};
export default ScreenReaderOnly;
