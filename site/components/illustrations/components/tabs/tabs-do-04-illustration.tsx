import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const TabsDo04Illustration: React.FC = () => {
  const clip0 = getSSRId();
  const clip1 = getSSRId();
  const clip2 = getSSRId();
  const clip3 = getSSRId();
  const clip4 = getSSRId();

  const filter0 = getSSRId();

  return (
    <Svg
      width="1491"
      height="839"
      viewBox="0 0 1491 839"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M0.015625 4.00001C0.015625 1.79087 1.80649 0 4.01562 0H1486.74C1488.94 0 1490.74 1.79086 1490.74 4V834.004C1490.74 836.213 1488.94 838.004 1486.74 838.004H4.01565C1.80651 838.004 0.015625 836.213 0.015625 834.004V4.00001Z"
        fill="illustrationBackground010"
      />
      <g filter={`url(#${filter0})`}>
        <g clipPath={`url(#${clip0})`}>
          <Path
            d="M268 236.997H541V601.997H268V236.997Z"
            fill="illustrationInterface010"
          />
          <g clipPath={`url(#${clip1})`}>
            <Rect
              width="193.496"
              height="121.995"
              transform="translate(347.691 236.506)"
              fill="illustrationInterface010"
            />
            <Path
              d="M408.913 304.447H400.435L399.032 308.503H394.548L402.204 287.185H407.175L414.83 308.503H410.316L408.913 304.447ZM407.754 301.031L404.674 292.126L401.594 301.031H407.754ZM422.663 295.115V303.288C422.663 303.857 422.795 304.274 423.059 304.539C423.344 304.783 423.811 304.905 424.462 304.905H426.445V308.503H423.761C420.162 308.503 418.362 306.755 418.362 303.258V295.115H416.349V291.607H418.362V287.429H422.663V291.607H426.445V295.115H422.663ZM437.018 308.778C435.392 308.778 433.928 308.422 432.626 307.71C431.325 306.978 430.298 305.952 429.546 304.63C428.814 303.308 428.448 301.784 428.448 300.055C428.448 298.327 428.824 296.802 429.577 295.48C430.349 294.159 431.396 293.142 432.718 292.431C434.04 291.699 435.514 291.333 437.14 291.333C438.767 291.333 440.241 291.699 441.563 292.431C442.884 293.142 443.921 294.159 444.673 295.48C445.446 296.802 445.832 298.327 445.832 300.055C445.832 301.784 445.436 303.308 444.643 304.63C443.87 305.952 442.813 306.978 441.471 307.71C440.149 308.422 438.665 308.778 437.018 308.778ZM437.018 305.057C437.791 305.057 438.513 304.874 439.184 304.508C439.875 304.122 440.424 303.552 440.831 302.8C441.237 302.048 441.441 301.133 441.441 300.055C441.441 298.449 441.014 297.219 440.16 296.365C439.326 295.491 438.299 295.054 437.079 295.054C435.859 295.054 434.833 295.491 433.999 296.365C433.186 297.219 432.779 298.449 432.779 300.055C432.779 301.662 433.175 302.902 433.968 303.776C434.782 304.63 435.798 305.057 437.018 305.057ZM469.948 291.363C472.021 291.363 473.689 292.004 474.949 293.285C476.23 294.545 476.871 296.314 476.871 298.591V308.503H472.601V299.171C472.601 297.849 472.265 296.843 471.594 296.151C470.923 295.44 470.009 295.084 468.85 295.084C467.691 295.084 466.765 295.44 466.074 296.151C465.403 296.843 465.068 297.849 465.068 299.171V308.503H460.798V299.171C460.798 297.849 460.462 296.843 459.791 296.151C459.12 295.44 458.206 295.084 457.047 295.084C455.867 295.084 454.932 295.44 454.241 296.151C453.57 296.843 453.234 297.849 453.234 299.171V308.503H448.964V291.607H453.234V293.651C453.783 292.939 454.485 292.38 455.339 291.973C456.213 291.566 457.169 291.363 458.206 291.363C459.527 291.363 460.706 291.648 461.743 292.217C462.78 292.766 463.583 293.559 464.153 294.596C464.702 293.62 465.495 292.837 466.532 292.248C467.589 291.658 468.728 291.363 469.948 291.363ZM487.388 308.778C486.006 308.778 484.765 308.534 483.667 308.046C482.569 307.538 481.695 306.856 481.045 306.003C480.414 305.149 480.069 304.203 480.008 303.166H484.308C484.389 303.817 484.704 304.356 485.253 304.783C485.823 305.21 486.524 305.423 487.358 305.423C488.171 305.423 488.801 305.26 489.249 304.935C489.716 304.61 489.95 304.193 489.95 303.685C489.95 303.136 489.665 302.729 489.096 302.465C488.547 302.18 487.663 301.875 486.443 301.55C485.182 301.245 484.145 300.93 483.332 300.604C482.539 300.279 481.848 299.781 481.258 299.11C480.689 298.439 480.404 297.534 480.404 296.395C480.404 295.46 480.668 294.606 481.197 293.834C481.746 293.061 482.519 292.451 483.515 292.004C484.532 291.556 485.721 291.333 487.083 291.333C489.096 291.333 490.702 291.841 491.902 292.858C493.102 293.854 493.762 295.206 493.884 296.914H489.798C489.737 296.243 489.452 295.714 488.944 295.328C488.456 294.921 487.795 294.718 486.961 294.718C486.189 294.718 485.589 294.86 485.162 295.145C484.755 295.43 484.552 295.826 484.552 296.334C484.552 296.904 484.837 297.341 485.406 297.646C485.975 297.931 486.86 298.225 488.059 298.53C489.279 298.835 490.286 299.15 491.079 299.476C491.872 299.801 492.553 300.309 493.122 301.001C493.712 301.672 494.017 302.566 494.037 303.685C494.037 304.661 493.762 305.535 493.213 306.308C492.685 307.08 491.912 307.69 490.896 308.137C489.899 308.564 488.73 308.778 487.388 308.778Z"
              fill="illustrationHighlight010"
            />
            <g clipPath={`url(#${clip2})`}>
              <Rect
                x="541.188"
                y="358.501"
                width="121.995"
                height="3.81233"
                transform="rotate(-90 541.188 358.501)"
                fill="illustrationHighlight010"
              />
            </g>
            <Rect
              width="248.496"
              height="121.995"
              transform="translate(292.691 358.501)"
              fill="illustrationInterface010"
            />
            <Path
              d="M364.118 409.21V430.498H359.848V416.652L354.145 430.498H350.912L345.178 416.652V430.498H340.909V409.21H345.758L352.529 425.039L359.299 409.21H364.118ZM375.842 430.773C374.216 430.773 372.752 430.417 371.45 429.705C370.149 428.973 369.122 427.946 368.37 426.625C367.638 425.303 367.272 423.778 367.272 422.05C367.272 420.322 367.648 418.797 368.401 417.475C369.173 416.154 370.22 415.137 371.542 414.425C372.864 413.693 374.338 413.327 375.964 413.327C377.591 413.327 379.065 413.693 380.387 414.425C381.708 415.137 382.745 416.154 383.497 417.475C384.27 418.797 384.656 420.322 384.656 422.05C384.656 423.778 384.26 425.303 383.467 426.625C382.694 427.946 381.637 428.973 380.295 429.705C378.973 430.417 377.489 430.773 375.842 430.773ZM375.842 427.052C376.615 427.052 377.337 426.869 378.008 426.503C378.699 426.116 379.248 425.547 379.655 424.795C380.061 424.042 380.265 423.128 380.265 422.05C380.265 420.444 379.838 419.214 378.984 418.36C378.15 417.485 377.123 417.048 375.903 417.048C374.683 417.048 373.656 417.485 372.823 418.36C372.01 419.214 371.603 420.444 371.603 422.05C371.603 423.656 371.999 424.896 372.792 425.771C373.606 426.625 374.622 427.052 375.842 427.052ZM392.058 407.929V430.498H387.788V407.929H392.058ZM411.984 421.684C411.984 422.294 411.943 422.843 411.862 423.331H399.51C399.611 424.551 400.038 425.506 400.791 426.198C401.543 426.889 402.468 427.235 403.566 427.235C405.152 427.235 406.28 426.554 406.951 425.191H411.557C411.069 426.818 410.133 428.16 408.751 429.217C407.368 430.254 405.67 430.773 403.657 430.773C402.031 430.773 400.567 430.417 399.266 429.705C397.985 428.973 396.978 427.946 396.246 426.625C395.535 425.303 395.179 423.778 395.179 422.05C395.179 420.301 395.535 418.766 396.246 417.445C396.958 416.123 397.954 415.106 399.235 414.395C400.516 413.683 401.99 413.327 403.657 413.327C405.264 413.327 406.697 413.673 407.958 414.364C409.239 415.056 410.225 416.042 410.916 417.323C411.628 418.583 411.984 420.037 411.984 421.684ZM407.561 420.464C407.541 419.366 407.144 418.492 406.372 417.841C405.599 417.17 404.654 416.835 403.535 416.835C402.478 416.835 401.584 417.16 400.852 417.811C400.14 418.441 399.703 419.325 399.54 420.464H407.561ZM414.002 422.05C414.002 420.301 414.358 418.776 415.07 417.475C415.781 416.154 416.767 415.137 418.028 414.425C419.289 413.693 420.732 413.327 422.359 413.327C424.453 413.327 426.181 413.856 427.544 414.913C428.926 415.95 429.851 417.414 430.319 419.305H425.714C425.47 418.573 425.053 418.004 424.463 417.597C423.894 417.17 423.182 416.957 422.328 416.957C421.108 416.957 420.143 417.404 419.431 418.299C418.719 419.173 418.364 420.423 418.364 422.05C418.364 423.656 418.719 424.907 419.431 425.801C420.143 426.676 421.108 427.113 422.328 427.113C424.057 427.113 425.185 426.34 425.714 424.795H430.319C429.851 426.625 428.926 428.078 427.544 429.156C426.161 430.234 424.433 430.773 422.359 430.773C420.732 430.773 419.289 430.417 418.028 429.705C416.767 428.973 415.781 427.956 415.07 426.655C414.358 425.334 414.002 423.799 414.002 422.05ZM449.398 413.602V430.498H445.098V428.363C444.549 429.095 443.827 429.675 442.932 430.102C442.058 430.508 441.102 430.712 440.065 430.712C438.744 430.712 437.575 430.437 436.558 429.888C435.541 429.319 434.738 428.495 434.149 427.418C433.579 426.32 433.295 425.018 433.295 423.514V413.602H437.564V422.904C437.564 424.246 437.9 425.283 438.571 426.015C439.242 426.726 440.157 427.082 441.316 427.082C442.495 427.082 443.42 426.726 444.091 426.015C444.762 425.283 445.098 424.246 445.098 422.904V413.602H449.398ZM457.881 407.929V430.498H453.611V407.929H457.881ZM477.806 421.684C477.806 422.294 477.765 422.843 477.684 423.331H465.332C465.434 424.551 465.861 425.506 466.613 426.198C467.365 426.889 468.29 427.235 469.388 427.235C470.974 427.235 472.103 426.554 472.774 425.191H477.379C476.891 426.818 475.956 428.16 474.573 429.217C473.19 430.254 471.493 430.773 469.48 430.773C467.853 430.773 466.389 430.417 465.088 429.705C463.807 428.973 462.801 427.946 462.069 426.625C461.357 425.303 461.001 423.778 461.001 422.05C461.001 420.301 461.357 418.766 462.069 417.445C462.78 416.123 463.777 415.106 465.057 414.395C466.338 413.683 467.813 413.327 469.48 413.327C471.086 413.327 472.52 413.673 473.78 414.364C475.061 415.056 476.047 416.042 476.738 417.323C477.45 418.583 477.806 420.037 477.806 421.684ZM473.384 420.464C473.363 419.366 472.967 418.492 472.194 417.841C471.422 417.17 470.476 416.835 469.358 416.835C468.301 416.835 467.406 417.16 466.674 417.811C465.962 418.441 465.525 419.325 465.362 420.464H473.384ZM487.388 430.773C486.006 430.773 484.765 430.529 483.667 430.041C482.569 429.532 481.695 428.851 481.045 427.997C480.414 427.143 480.069 426.198 480.008 425.161H484.308C484.389 425.811 484.704 426.35 485.253 426.777C485.823 427.204 486.524 427.418 487.358 427.418C488.171 427.418 488.801 427.255 489.249 426.93C489.716 426.604 489.95 426.188 489.95 425.679C489.95 425.13 489.665 424.724 489.096 424.459C488.547 424.175 487.663 423.87 486.443 423.544C485.182 423.239 484.145 422.924 483.332 422.599C482.539 422.274 481.848 421.775 481.258 421.104C480.689 420.433 480.404 419.529 480.404 418.39C480.404 417.455 480.668 416.601 481.197 415.828C481.746 415.056 482.519 414.446 483.515 413.998C484.532 413.551 485.721 413.327 487.083 413.327C489.096 413.327 490.702 413.836 491.902 414.852C493.102 415.849 493.762 417.201 493.884 418.909H489.798C489.737 418.238 489.452 417.709 488.944 417.323C488.456 416.916 487.795 416.713 486.961 416.713C486.189 416.713 485.589 416.855 485.162 417.14C484.755 417.424 484.552 417.821 484.552 418.329C484.552 418.898 484.837 419.336 485.406 419.641C485.975 419.925 486.86 420.22 488.059 420.525C489.279 420.83 490.286 421.145 491.079 421.47C491.872 421.796 492.553 422.304 493.122 422.995C493.712 423.666 494.017 424.561 494.037 425.679C494.037 426.655 493.762 427.53 493.213 428.302C492.685 429.075 491.912 429.685 490.896 430.132C489.899 430.559 488.73 430.773 487.388 430.773Z"
              fill="illustrationSubtle010"
            />
            <g clipPath="url(#clip3)">
              <Rect
                x="541.188"
                y="480.496"
                width="121.995"
                height="3.81233"
                transform="rotate(-90 541.188 480.496)"
                fill="illustrationInterface030"
              />
            </g>
            <Rect
              width="263.496"
              height="121.995"
              transform="translate(277.691 480.496)"
              fill="illustrationInterface010"
            />
            <Path
              d="M335.958 552.706C333.965 552.706 332.135 552.239 330.468 551.303C328.801 550.368 327.479 549.077 326.503 547.43C325.527 545.763 325.039 543.882 325.039 541.788C325.039 539.714 325.527 537.853 326.503 536.206C327.479 534.539 328.801 533.238 330.468 532.303C332.135 531.367 333.965 530.9 335.958 530.9C337.971 530.9 339.801 531.367 341.448 532.303C343.115 533.238 344.426 534.539 345.382 536.206C346.358 537.853 346.846 539.714 346.846 541.788C346.846 543.882 346.358 545.763 345.382 547.43C344.426 549.077 343.115 550.368 341.448 551.303C339.78 552.239 337.95 552.706 335.958 552.706ZM335.958 548.894C337.239 548.894 338.367 548.609 339.343 548.04C340.319 547.45 341.082 546.617 341.631 545.539C342.18 544.461 342.454 543.211 342.454 541.788C342.454 540.364 342.18 539.124 341.631 538.067C341.082 536.989 340.319 536.166 339.343 535.596C338.367 535.027 337.239 534.742 335.958 534.742C334.677 534.742 333.538 535.027 332.542 535.596C331.566 536.166 330.804 536.989 330.255 538.067C329.706 539.124 329.431 540.364 329.431 541.788C329.431 543.211 329.706 544.461 330.255 545.539C330.804 546.617 331.566 547.45 332.542 548.04C333.538 548.609 334.677 548.894 335.958 548.894ZM354.292 538.219C354.841 537.325 355.553 536.623 356.427 536.115C357.322 535.607 358.338 535.352 359.477 535.352V539.836H358.349C357.007 539.836 355.99 540.151 355.299 540.781C354.628 541.411 354.292 542.509 354.292 544.075V552.493H350.022V535.596H354.292V538.219ZM368.971 535.322C370.232 535.322 371.34 535.576 372.296 536.084C373.251 536.572 374.003 537.213 374.552 538.006V535.596H378.853V552.615C378.853 554.18 378.538 555.573 377.907 556.793C377.277 558.033 376.332 559.009 375.071 559.721C373.81 560.453 372.285 560.819 370.496 560.819C368.097 560.819 366.125 560.26 364.579 559.141C363.054 558.023 362.19 556.498 361.987 554.567H366.226C366.45 555.339 366.928 555.949 367.66 556.397C368.412 556.864 369.317 557.098 370.374 557.098C371.614 557.098 372.621 556.722 373.394 555.97C374.166 555.238 374.552 554.119 374.552 552.615V549.992C374.003 550.785 373.241 551.446 372.265 551.974C371.309 552.503 370.211 552.767 368.971 552.767C367.548 552.767 366.247 552.401 365.067 551.669C363.888 550.937 362.953 549.91 362.261 548.589C361.591 547.247 361.255 545.712 361.255 543.984C361.255 542.276 361.591 540.761 362.261 539.439C362.953 538.118 363.878 537.101 365.037 536.389C366.216 535.678 367.528 535.322 368.971 535.322ZM374.552 544.045C374.552 543.008 374.349 542.123 373.942 541.391C373.536 540.639 372.987 540.07 372.296 539.683C371.604 539.277 370.862 539.073 370.069 539.073C369.276 539.073 368.544 539.266 367.873 539.653C367.202 540.039 366.653 540.608 366.226 541.361C365.82 542.093 365.616 542.967 365.616 543.984C365.616 545 365.82 545.895 366.226 546.667C366.653 547.42 367.202 547.999 367.873 548.406C368.565 548.813 369.297 549.016 370.069 549.016C370.862 549.016 371.604 548.823 372.296 548.436C372.987 548.03 373.536 547.46 373.942 546.728C374.349 545.976 374.552 545.081 374.552 544.045ZM381.925 543.984C381.925 542.276 382.261 540.761 382.931 539.439C383.623 538.118 384.548 537.101 385.707 536.389C386.886 535.678 388.198 535.322 389.641 535.322C390.902 535.322 392 535.576 392.935 536.084C393.891 536.593 394.653 537.233 395.222 538.006V535.596H399.523V552.493H395.222V550.022C394.673 550.815 393.911 551.476 392.935 552.005C391.979 552.513 390.871 552.767 389.611 552.767C388.187 552.767 386.886 552.401 385.707 551.669C384.548 550.937 383.623 549.91 382.931 548.589C382.261 547.247 381.925 545.712 381.925 543.984ZM395.222 544.045C395.222 543.008 395.019 542.123 394.612 541.391C394.206 540.639 393.657 540.07 392.966 539.683C392.274 539.277 391.532 539.073 390.739 539.073C389.946 539.073 389.214 539.266 388.543 539.653C387.872 540.039 387.323 540.608 386.896 541.361C386.49 542.093 386.286 542.967 386.286 543.984C386.286 545 386.49 545.895 386.896 546.667C387.323 547.42 387.872 547.999 388.543 548.406C389.235 548.813 389.967 549.016 390.739 549.016C391.532 549.016 392.274 548.823 392.966 548.436C393.657 548.03 394.206 547.46 394.612 546.728C395.019 545.976 395.222 545.081 395.222 544.045ZM413.056 535.352C415.069 535.352 416.696 535.993 417.936 537.274C419.176 538.534 419.796 540.303 419.796 542.581V552.493H415.526V543.16C415.526 541.818 415.191 540.791 414.52 540.08C413.849 539.348 412.934 538.982 411.775 538.982C410.596 538.982 409.661 539.348 408.969 540.08C408.298 540.791 407.963 541.818 407.963 543.16V552.493H403.693V535.596H407.963V537.701C408.532 536.969 409.254 536.4 410.128 535.993C411.023 535.566 411.999 535.352 413.056 535.352ZM426.022 533.584C425.27 533.584 424.639 533.35 424.131 532.882C423.643 532.394 423.399 531.794 423.399 531.083C423.399 530.371 423.643 529.781 424.131 529.314C424.639 528.826 425.27 528.582 426.022 528.582C426.774 528.582 427.394 528.826 427.882 529.314C428.391 529.781 428.645 530.371 428.645 531.083C428.645 531.794 428.391 532.394 427.882 532.882C427.394 533.35 426.774 533.584 426.022 533.584ZM428.126 535.596V552.493H423.857V535.596H428.126ZM438.811 552.767C437.428 552.767 436.188 552.523 435.09 552.035C433.992 551.527 433.118 550.846 432.467 549.992C431.837 549.138 431.491 548.192 431.43 547.155H435.73C435.812 547.806 436.127 548.345 436.676 548.772C437.245 549.199 437.947 549.412 438.78 549.412C439.594 549.412 440.224 549.25 440.671 548.924C441.139 548.599 441.373 548.182 441.373 547.674C441.373 547.125 441.088 546.718 440.519 546.454C439.97 546.169 439.085 545.864 437.865 545.539C436.605 545.234 435.568 544.919 434.754 544.594C433.961 544.268 433.27 543.77 432.681 543.099C432.111 542.428 431.827 541.523 431.827 540.385C431.827 539.449 432.091 538.595 432.62 537.823C433.169 537.05 433.941 536.44 434.937 535.993C435.954 535.546 437.144 535.322 438.506 535.322C440.519 535.322 442.125 535.83 443.325 536.847C444.524 537.843 445.185 539.195 445.307 540.903H441.22C441.159 540.232 440.875 539.704 440.366 539.317C439.878 538.911 439.217 538.707 438.384 538.707C437.611 538.707 437.011 538.85 436.584 539.134C436.178 539.419 435.974 539.815 435.974 540.324C435.974 540.893 436.259 541.33 436.828 541.635C437.398 541.92 438.282 542.215 439.482 542.52C440.702 542.825 441.708 543.14 442.501 543.465C443.294 543.79 443.975 544.299 444.545 544.99C445.134 545.661 445.439 546.556 445.459 547.674C445.459 548.65 445.185 549.524 444.636 550.297C444.107 551.069 443.335 551.679 442.318 552.127C441.322 552.554 440.153 552.767 438.811 552.767ZM469.948 535.352C472.021 535.352 473.689 535.993 474.949 537.274C476.23 538.534 476.871 540.303 476.871 542.581V552.493H472.601V543.16C472.601 541.838 472.265 540.832 471.594 540.141C470.923 539.429 470.009 539.073 468.85 539.073C467.691 539.073 466.765 539.429 466.074 540.141C465.403 540.832 465.068 541.838 465.068 543.16V552.493H460.798V543.16C460.798 541.838 460.462 540.832 459.791 540.141C459.12 539.429 458.206 539.073 457.047 539.073C455.867 539.073 454.932 539.429 454.241 540.141C453.57 540.832 453.234 541.838 453.234 543.16V552.493H448.964V535.596H453.234V537.64C453.783 536.928 454.485 536.369 455.339 535.962C456.213 535.556 457.169 535.352 458.206 535.352C459.527 535.352 460.706 535.637 461.743 536.206C462.78 536.755 463.583 537.548 464.153 538.585C464.702 537.609 465.495 536.827 466.532 536.237C467.589 535.647 468.728 535.352 469.948 535.352ZM487.388 552.767C486.006 552.767 484.765 552.523 483.667 552.035C482.569 551.527 481.695 550.846 481.045 549.992C480.414 549.138 480.069 548.192 480.008 547.155H484.308C484.389 547.806 484.704 548.345 485.253 548.772C485.823 549.199 486.524 549.412 487.358 549.412C488.171 549.412 488.801 549.25 489.249 548.924C489.716 548.599 489.95 548.182 489.95 547.674C489.95 547.125 489.665 546.718 489.096 546.454C488.547 546.169 487.663 545.864 486.443 545.539C485.182 545.234 484.145 544.919 483.332 544.594C482.539 544.268 481.848 543.77 481.258 543.099C480.689 542.428 480.404 541.523 480.404 540.385C480.404 539.449 480.668 538.595 481.197 537.823C481.746 537.05 482.519 536.44 483.515 535.993C484.532 535.546 485.721 535.322 487.083 535.322C489.096 535.322 490.702 535.83 491.902 536.847C493.102 537.843 493.762 539.195 493.884 540.903H489.798C489.737 540.232 489.452 539.704 488.944 539.317C488.456 538.911 487.795 538.707 486.961 538.707C486.189 538.707 485.589 538.85 485.162 539.134C484.755 539.419 484.552 539.815 484.552 540.324C484.552 540.893 484.837 541.33 485.406 541.635C485.975 541.92 486.86 542.215 488.059 542.52C489.279 542.825 490.286 543.14 491.079 543.465C491.872 543.79 492.553 544.299 493.122 544.99C493.712 545.661 494.017 546.556 494.037 547.674C494.037 548.65 493.762 549.524 493.213 550.297C492.685 551.069 491.912 551.679 490.896 552.127C489.899 552.554 488.73 552.767 487.388 552.767Z"
              fill="illustrationSubtle010"
            />
            <g clipPath={`url(#${clip4})`}>
              <Rect
                x="541.188"
                y="602.49"
                width="121.995"
                height="3.81233"
                transform="rotate(-90 541.188 602.49)"
                fill="illustrationInterface030"
              />
            </g>
          </g>
          <Rect
            width="678"
            height="367"
            transform="translate(545 236.997)"
            fill="illustrationInterface010"
          />
        </g>
      </g>
      <Rect
        x="602"
        y="288"
        width="351.512"
        height="12"
        rx="6"
        fill="illustrationInterface030"
      />
      <Rect
        x="602"
        y="324"
        width="571"
        height="12"
        rx="6"
        fill="illustrationInterface020"
      />
      <Rect
        x="602"
        y="360"
        width="571"
        height="12"
        rx="6"
        fill="illustrationInterface020"
      />
      <Rect
        x="602"
        y="432"
        width="571"
        height="12"
        rx="6"
        fill="illustrationInterface020"
      />
      <Rect
        x="602"
        y="396"
        width="571"
        height="12"
        rx="6"
        fill="illustrationInterface020"
      />
      <Rect
        x="602"
        y="468"
        width="258.27"
        height="12"
        rx="6"
        fill="illustrationInterface020"
      />
      <defs>
        <filter
          id={filter0}
          x="252"
          y="228.506"
          width="987"
          height="397.984"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
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
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <clipPath id={clip0}>
          <Rect
            x="268"
            y="236.506"
            width="955"
            height="365.984"
            rx="9.85806"
            fill="white"
          />
        </clipPath>
        <clipPath id={clip1}>
          <Rect
            width="267.309"
            height="365.984"
            fill="white"
            transform="translate(277.691 236.506)"
          />
        </clipPath>
        <clipPath id={clip2}>
          <Rect
            width="121.995"
            height="3.81233"
            fill="white"
            transform="translate(541.188 358.501) rotate(-90)"
          />
        </clipPath>
        <clipPath id={clip3}>
          <Rect
            width="121.995"
            height="3.81233"
            fill="white"
            transform="translate(541.188 480.496) rotate(-90)"
          />
        </clipPath>
        <clipPath id={clip4}>
          <Rect
            width="121.995"
            height="3.81233"
            fill="white"
            transform="translate(541.188 602.49) rotate(-90)"
          />
        </clipPath>
      </defs>
    </Svg>
  );
};
export default TabsDo04Illustration;
