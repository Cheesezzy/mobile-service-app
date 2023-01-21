import colors from "../../src/config/colors";

export const homeIcon = (route: any, name: string) => {
  if (route === name) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke=${colors.primary} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke=${colors.lightGrey} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`;
};

export const businessIcon = (route: any, name: string) => {
  if (route === name) {
    return `<?xml version="1.0" encoding="utf-8"?>
    <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve" fill="none" stroke=${colors.primary} stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
    <path class="st0" d="M28,20.6V25c0,1.1-0.9,2-2,2H6c-1.1,0-2-0.9-2-2v-4.4"/>
    <path class="st0" d="M16,24L16,24c-1.1,0-2-0.9-2-2v-3h4v3C18,23.1,17.1,24,16,24z"/>
    <path class="st0" d="M14,22H7c-2.2,0-4-1.8-4-4v-8c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2v8c0,2.2-1.8,4-4,4h-7"/>
    <path class="st0" d="M20,8h-8V6c0-1.1,0.9-2,2-2h4c1.1,0,2,0.9,2,2V8z"/>
    <line class="st0" x1="7" y1="28" x2="7" y2="27"/>
    <line class="st0" x1="25" y1="28" x2="25" y2="27"/>
    </svg>
    `;
  }
  return `<?xml version="1.0" encoding="utf-8"?>
  <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve" fill="none" stroke=${colors.lightGrey} stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
  <path class="st0" d="M28,20.6V25c0,1.1-0.9,2-2,2H6c-1.1,0-2-0.9-2-2v-4.4"/>
  <path class="st0" d="M16,24L16,24c-1.1,0-2-0.9-2-2v-3h4v3C18,23.1,17.1,24,16,24z"/>
  <path class="st0" d="M14,22H7c-2.2,0-4-1.8-4-4v-8c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2v8c0,2.2-1.8,4-4,4h-7"/>
  <path class="st0" d="M20,8h-8V6c0-1.1,0.9-2,2-2h4c1.1,0,2,0.9,2,2V8z"/>
  <line class="st0" x1="7" y1="28" x2="7" y2="27"/>
  <line class="st0" x1="25" y1="28" x2="25" y2="27"/>
  </svg>
  `;
};

export const negotiateIcon = (route: any, name: string) => {
  if (route === name) {
    return `<?xml version="1.0" encoding="iso-8859-1"?>
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 511.996 511.996" style="enable-background:new 0 0 511.996 511.996;" xml:space="preserve" fill=${colors.primary} stroke=${colors.primary} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
    <g>
      <g>
        <path d="M452.499,149.389c-3.9-3.91-10.23-3.91-14.14,0c-3.9,3.9-3.9,10.23,0,14.14c3.91,3.9,10.24,3.9,14.14,0
          C456.409,159.619,456.409,153.289,452.499,149.389z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M73.638,161.249c-3.91-3.91-10.24-3.91-14.14,0c-3.91,3.9-3.91,10.24,0,14.14c3.9,3.91,10.23,3.91,14.14,0
          C77.538,171.489,77.538,165.149,73.638,161.249z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M509.068,149.392L395.931,36.248c-3.904-3.904-10.234-3.904-14.143,0c-10.335,10.335-59.301,59.301-69.296,69.297
          l-48.365,19.922l-65.984-9.425L130.21,48.11c-3.198-3.2-6.964-2.908-7.072-2.93c-2.652,0-5.195,1.054-7.071,2.929L2.927,161.248
          c-3.902,3.903-3.905,10.238,0.001,14.143l68.148,68.138l7.788,38.932l-16.243,16.243c-13.68,13.665-13.699,35.814-0.008,49.492
          c6.615,6.622,15.496,10.352,25.131,10.251c-0.094,9.086,3.31,18.2,10.226,25.116c6.826,6.82,15.788,10.229,24.751,10.229
          c0.128,0,0.255-0.008,0.383-0.009c-0.098,9.09,3.305,18.212,10.223,25.137c6.609,6.609,15.397,10.25,24.746,10.25
          c0.127,0,0.253-0.008,0.379-0.009c-0.093,9.083,3.311,18.197,10.228,25.113c13.647,13.635,35.852,13.642,49.499-0.003l3.537-3.537
          l17.67,17.678c13.679,13.678,35.824,13.693,49.503,0c6.919-6.919,10.323-16.039,10.224-25.128
          c0.126,0.001,0.252,0.009,0.378,0.009c8.964,0,17.931-3.411,24.76-10.234c6.908-6.915,10.309-16.026,10.215-25.109
          c9.621,0.105,18.512-3.621,25.132-10.247c6.919-6.919,10.323-16.039,10.224-25.128c0.126,0.001,0.252,0.009,0.378,0.009
          c8.964,0,17.931-3.411,24.76-10.234c13.641-13.653,13.639-35.858-0.003-49.499l-4.85-4.85l48.972-74.479l69.988-69.988
          C512.972,159.629,512.972,153.297,509.068,149.392z M24.142,168.318l98.996-98.996l14.143,14.143l-49.503,49.503
          c-3.905,3.905-3.905,10.237,0,14.143c3.906,3.905,10.236,3.905,14.143,0l49.503-49.503l27.862,27.862l-98.997,98.987
          L24.142,168.318z M77.1,312.51c-0.002,0.002-0.009,0.009-0.017,0.017C77.091,312.519,77.097,312.512,77.1,312.51z M97.963,334.062
          c-5.829,5.834-15.31,5.895-21.207-0.008c-5.864-5.859-5.867-15.339,0.002-21.203c0.018-0.018,0.033-0.033,0.049-0.049
          c0.021-0.021,0.041-0.041,0.059-0.059c0.011-0.011,0.021-0.021,0.031-0.031c0.74-0.74,4.723-4.722,21.077-21.076
          c5.857-5.864,15.344-5.867,21.213,0.004c5.871,5.87,5.849,15.36,0,21.208c-0.002,0.002-0.003,0.003-0.005,0.005L97.963,334.062z
           M112.109,369.417c-5.846-5.846-5.846-15.365-0.003-21.214c0.002-0.002,0.005-0.005,0.007-0.007
          c0.002-0.002,0.003-0.003,0.005-0.005l21.206-21.197c0.002-0.002,0.003-0.003,0.005-0.005c0.001-0.001,0.002-0.002,0.003-0.004
          c5.857-5.855,15.344-5.857,21.205,0.004c5.859,5.859,5.858,15.359,0,21.217l-21.21,21.21
          C127.481,375.265,117.958,375.263,112.109,369.417z M168.676,404.778c-5.854,5.855-15.346,5.861-21.204,0.003
          c-5.849-5.854-5.851-15.374-0.003-21.221l21.214-21.214c5.857-5.864,15.344-5.867,21.213,0.004c5.848,5.847,5.872,15.336,0,21.208
          L168.676,404.778z M225.248,418.916l-21.21,21.21c-5.847,5.849-15.369,5.846-21.218,0.001c-5.847-5.847-5.847-15.361,0-21.208
          l21.22-21.22c5.826-5.826,15.34-5.868,21.201-0.008C231.057,403.52,231.178,412.975,225.248,418.916z M380.82,348.205
          c-5.855,5.847-15.37,5.85-21.217,0.006c-0.001-0.001-0.002-0.002-0.003-0.003l-10.61-10.61c-3.906-3.905-10.238-3.905-14.143,0
          c-3.905,3.905-3.905,10.237,0,14.142l10.61,10.609c5.847,5.847,5.847,15.361-0.003,21.211c-5.859,5.864-15.34,5.866-21.201,0.001
          c-0.002-0.002-0.005-0.005-0.007-0.007l-10.609-10.6c-3.909-3.904-10.239-3.901-14.143,0.006
          c-3.903,3.907-3.9,10.238,0.006,14.142l10.604,10.594c5.846,5.852,5.846,15.373,0.007,21.218
          c-5.854,5.848-15.372,5.851-21.221,0.003l-10.61-10.61c-3.906-3.905-10.238-3.905-14.143,0c-3.905,3.905-3.905,10.237,0,14.142
          l10.61,10.609c5.847,5.847,5.847,15.361-0.003,21.211c-5.861,5.866-15.347,5.865-21.214-0.002l-17.672-17.679l3.538-3.538
          c13.642-13.669,13.716-35.743-0.007-49.495c-6.916-6.915-16.028-10.318-25.111-10.225c0.096-9.777-3.722-18.607-10.24-25.125
          c-6.624-6.624-15.502-10.344-25.12-10.248c0.097-9.589-3.604-18.477-10.239-25.112c-6.621-6.619-15.498-10.337-25.111-10.24
          c0.106-9.688-3.683-18.553-10.24-25.109c-9.929-9.929-24.33-12.655-36.696-8.171l-5.489-27.442l105.819-105.81l30.745,4.392
          l-9.799,4.038c-1.22,0.503-2.328,1.242-3.262,2.175l-67.18,67.18c-13.645,13.645-13.645,35.847,0,49.492
          c13.688,13.686,35.809,13.692,49.504-0.002l24.733-24.744c3.907-3.901,10.257-3.902,14.152-0.004
          c18.863,18.861,46.483,22.176,68.3,11.729l66.029,66.029c0.018,0.018,0.036,0.037,0.055,0.055l10.578,10.578
          C386.664,332.838,386.663,342.357,380.82,348.205z M375.668,293.556l-54.957-54.957l7.069-7.068
          c3.905-3.905,3.905-10.237,0-14.142c-3.905-3.905-10.235-3.905-14.143,0c-6.217,6.015-8.228,8.795-13.18,12.09
          c-15.306,10.24-36.543,8.894-50.458-5.02c-11.689-11.691-30.723-11.694-42.434,0.001l-24.737,24.748
          c-5.872,5.871-15.345,5.875-21.219,0c-5.847-5.847-5.847-15.361,0-21.208l65.766-65.767l88.417-36.419L418.458,228.48
          L375.668,293.556z M431.29,213.026l-98.997-98.998l28.286-28.287l49.499,49.499c3.906,3.905,10.236,3.905,14.143,0
          c3.905-3.905,3.905-10.237,0-14.143l-49.499-49.499L388.86,57.46l98.997,98.998L431.29,213.026z"/>
      </g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    </svg>
    `;
  }
  return `<?xml version="1.0" encoding="iso-8859-1"?>
  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 511.996 511.996" style="enable-background:new 0 0 511.996 511.996;" xml:space="preserve" fill=${colors.lightGrey} stroke=${colors.lightGrey} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
  <g>
    <g>
      <path d="M452.499,149.389c-3.9-3.91-10.23-3.91-14.14,0c-3.9,3.9-3.9,10.23,0,14.14c3.91,3.9,10.24,3.9,14.14,0
        C456.409,159.619,456.409,153.289,452.499,149.389z"/>
    </g>
  </g>
  <g>
    <g>
      <path d="M73.638,161.249c-3.91-3.91-10.24-3.91-14.14,0c-3.91,3.9-3.91,10.24,0,14.14c3.9,3.91,10.23,3.91,14.14,0
        C77.538,171.489,77.538,165.149,73.638,161.249z"/>
    </g>
  </g>
  <g>
    <g>
      <path d="M509.068,149.392L395.931,36.248c-3.904-3.904-10.234-3.904-14.143,0c-10.335,10.335-59.301,59.301-69.296,69.297
        l-48.365,19.922l-65.984-9.425L130.21,48.11c-3.198-3.2-6.964-2.908-7.072-2.93c-2.652,0-5.195,1.054-7.071,2.929L2.927,161.248
        c-3.902,3.903-3.905,10.238,0.001,14.143l68.148,68.138l7.788,38.932l-16.243,16.243c-13.68,13.665-13.699,35.814-0.008,49.492
        c6.615,6.622,15.496,10.352,25.131,10.251c-0.094,9.086,3.31,18.2,10.226,25.116c6.826,6.82,15.788,10.229,24.751,10.229
        c0.128,0,0.255-0.008,0.383-0.009c-0.098,9.09,3.305,18.212,10.223,25.137c6.609,6.609,15.397,10.25,24.746,10.25
        c0.127,0,0.253-0.008,0.379-0.009c-0.093,9.083,3.311,18.197,10.228,25.113c13.647,13.635,35.852,13.642,49.499-0.003l3.537-3.537
        l17.67,17.678c13.679,13.678,35.824,13.693,49.503,0c6.919-6.919,10.323-16.039,10.224-25.128
        c0.126,0.001,0.252,0.009,0.378,0.009c8.964,0,17.931-3.411,24.76-10.234c6.908-6.915,10.309-16.026,10.215-25.109
        c9.621,0.105,18.512-3.621,25.132-10.247c6.919-6.919,10.323-16.039,10.224-25.128c0.126,0.001,0.252,0.009,0.378,0.009
        c8.964,0,17.931-3.411,24.76-10.234c13.641-13.653,13.639-35.858-0.003-49.499l-4.85-4.85l48.972-74.479l69.988-69.988
        C512.972,159.629,512.972,153.297,509.068,149.392z M24.142,168.318l98.996-98.996l14.143,14.143l-49.503,49.503
        c-3.905,3.905-3.905,10.237,0,14.143c3.906,3.905,10.236,3.905,14.143,0l49.503-49.503l27.862,27.862l-98.997,98.987
        L24.142,168.318z M77.1,312.51c-0.002,0.002-0.009,0.009-0.017,0.017C77.091,312.519,77.097,312.512,77.1,312.51z M97.963,334.062
        c-5.829,5.834-15.31,5.895-21.207-0.008c-5.864-5.859-5.867-15.339,0.002-21.203c0.018-0.018,0.033-0.033,0.049-0.049
        c0.021-0.021,0.041-0.041,0.059-0.059c0.011-0.011,0.021-0.021,0.031-0.031c0.74-0.74,4.723-4.722,21.077-21.076
        c5.857-5.864,15.344-5.867,21.213,0.004c5.871,5.87,5.849,15.36,0,21.208c-0.002,0.002-0.003,0.003-0.005,0.005L97.963,334.062z
         M112.109,369.417c-5.846-5.846-5.846-15.365-0.003-21.214c0.002-0.002,0.005-0.005,0.007-0.007
        c0.002-0.002,0.003-0.003,0.005-0.005l21.206-21.197c0.002-0.002,0.003-0.003,0.005-0.005c0.001-0.001,0.002-0.002,0.003-0.004
        c5.857-5.855,15.344-5.857,21.205,0.004c5.859,5.859,5.858,15.359,0,21.217l-21.21,21.21
        C127.481,375.265,117.958,375.263,112.109,369.417z M168.676,404.778c-5.854,5.855-15.346,5.861-21.204,0.003
        c-5.849-5.854-5.851-15.374-0.003-21.221l21.214-21.214c5.857-5.864,15.344-5.867,21.213,0.004c5.848,5.847,5.872,15.336,0,21.208
        L168.676,404.778z M225.248,418.916l-21.21,21.21c-5.847,5.849-15.369,5.846-21.218,0.001c-5.847-5.847-5.847-15.361,0-21.208
        l21.22-21.22c5.826-5.826,15.34-5.868,21.201-0.008C231.057,403.52,231.178,412.975,225.248,418.916z M380.82,348.205
        c-5.855,5.847-15.37,5.85-21.217,0.006c-0.001-0.001-0.002-0.002-0.003-0.003l-10.61-10.61c-3.906-3.905-10.238-3.905-14.143,0
        c-3.905,3.905-3.905,10.237,0,14.142l10.61,10.609c5.847,5.847,5.847,15.361-0.003,21.211c-5.859,5.864-15.34,5.866-21.201,0.001
        c-0.002-0.002-0.005-0.005-0.007-0.007l-10.609-10.6c-3.909-3.904-10.239-3.901-14.143,0.006
        c-3.903,3.907-3.9,10.238,0.006,14.142l10.604,10.594c5.846,5.852,5.846,15.373,0.007,21.218
        c-5.854,5.848-15.372,5.851-21.221,0.003l-10.61-10.61c-3.906-3.905-10.238-3.905-14.143,0c-3.905,3.905-3.905,10.237,0,14.142
        l10.61,10.609c5.847,5.847,5.847,15.361-0.003,21.211c-5.861,5.866-15.347,5.865-21.214-0.002l-17.672-17.679l3.538-3.538
        c13.642-13.669,13.716-35.743-0.007-49.495c-6.916-6.915-16.028-10.318-25.111-10.225c0.096-9.777-3.722-18.607-10.24-25.125
        c-6.624-6.624-15.502-10.344-25.12-10.248c0.097-9.589-3.604-18.477-10.239-25.112c-6.621-6.619-15.498-10.337-25.111-10.24
        c0.106-9.688-3.683-18.553-10.24-25.109c-9.929-9.929-24.33-12.655-36.696-8.171l-5.489-27.442l105.819-105.81l30.745,4.392
        l-9.799,4.038c-1.22,0.503-2.328,1.242-3.262,2.175l-67.18,67.18c-13.645,13.645-13.645,35.847,0,49.492
        c13.688,13.686,35.809,13.692,49.504-0.002l24.733-24.744c3.907-3.901,10.257-3.902,14.152-0.004
        c18.863,18.861,46.483,22.176,68.3,11.729l66.029,66.029c0.018,0.018,0.036,0.037,0.055,0.055l10.578,10.578
        C386.664,332.838,386.663,342.357,380.82,348.205z M375.668,293.556l-54.957-54.957l7.069-7.068
        c3.905-3.905,3.905-10.237,0-14.142c-3.905-3.905-10.235-3.905-14.143,0c-6.217,6.015-8.228,8.795-13.18,12.09
        c-15.306,10.24-36.543,8.894-50.458-5.02c-11.689-11.691-30.723-11.694-42.434,0.001l-24.737,24.748
        c-5.872,5.871-15.345,5.875-21.219,0c-5.847-5.847-5.847-15.361,0-21.208l65.766-65.767l88.417-36.419L418.458,228.48
        L375.668,293.556z M431.29,213.026l-98.997-98.998l28.286-28.287l49.499,49.499c3.906,3.905,10.236,3.905,14.143,0
        c3.905-3.905,3.905-10.237,0-14.143l-49.499-49.499L388.86,57.46l98.997,98.998L431.29,213.026z"/>
    </g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  </svg>
  `;
};

export const notifIcon = (route: any, name: string) => {
  if (route === name) {
    return `<?xml version="1.0" encoding="utf-8"?>
    <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve" fill="none" stroke=${colors.primary} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
    <style type="text/css">
      .st0{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}
      .st1{fill:none;stroke:#000000;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;}
      .st2{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
      .st3{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;}
      .st4{fill:none;stroke:#000000;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:3;}
    </style>
    <path class="st1" d="M26,21.5L25,20c-1.6-2.4-2.4-5.3-2.4-8.2c0-3.1-2-5.7-4.7-6.5C17.6,4.5,16.8,4,16,4s-1.6,0.5-1.9,1.3
      c-2.7,0.8-4.7,3.4-4.7,6.5c0,2.9-0.8,5.8-2.4,8.2l-1,1.5c-0.4,0.7,0,1.5,0.8,1.5h18.3C25.9,23,26.4,22.1,26,21.5z"/>
    <path class="st1" d="M19,26c0,1.7-1.3,3-3,3s-3-1.3-3-3"/>
    </svg>
    `;
  }
  return `<?xml version="1.0" encoding="utf-8"?>
    <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve" fill="none" stroke=${colors.lightGrey} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
    <style type="text/css">
      .st0{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}
      .st1{fill:none;stroke:#000000;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;}
      .st2{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
      .st3{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;}
      .st4{fill:none;stroke:#000000;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:3;}
    </style>
    <path class="st1" d="M26,21.5L25,20c-1.6-2.4-2.4-5.3-2.4-8.2c0-3.1-2-5.7-4.7-6.5C17.6,4.5,16.8,4,16,4s-1.6,0.5-1.9,1.3
      c-2.7,0.8-4.7,3.4-4.7,6.5c0,2.9-0.8,5.8-2.4,8.2l-1,1.5c-0.4,0.7,0,1.5,0.8,1.5h18.3C25.9,23,26.4,22.1,26,21.5z"/>
    <path class="st1" d="M19,26c0,1.7-1.3,3-3,3s-3-1.3-3-3"/>
    </svg>
    `;
};

export const settingsIcon = () => {
  return `<?xml version="1.0" encoding="utf-8"?>
  <!-- Generator: Adobe Illustrator 23.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 30 30" style="enable-background:new 0 0 30 30;" xml:space="preserve">
  <path class="st3" fill="#8A8AFF" stroke="#8A8AFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M26.7,12.3c-2.1,0.4-4,0-4.7-1.3c-0.7-1.3-0.2-3.1,1.3-4.7c-1.3-1.3-3-2.2-4.8-2.8C17.8,5.6,16.5,7,15,7
    s-2.8-1.4-3.5-3.5C9.7,4.1,8.1,5,6.8,6.3c1.5,1.6,2,3.5,1.3,4.7c-0.7,1.3-2.6,1.7-4.7,1.3C3.1,13.1,3,14.1,3,15s0.1,1.9,0.3,2.7
    c2.1-0.4,4,0,4.7,1.3c0.7,1.3,0.2,3.1-1.3,4.7c1.3,1.3,3,2.2,4.8,2.8c0.7-2.1,2-3.5,3.5-3.5s2.8,1.4,3.5,3.5
    c1.8-0.5,3.4-1.5,4.8-2.8c-1.5-1.6-2-3.5-1.3-4.7c0.7-1.3,2.6-1.7,4.7-1.3c0.2-0.9,0.3-1.8,0.3-2.7S26.9,13.1,26.7,12.3z"/>
  <circle class="st10" fill="#E3FAFF" stroke="#E3FAFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"  cx="15" cy="15" r="3"/>
  </svg>  
  `;
};

export const supportIcon = (route: string, name: string) => {
  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enable-background="new 0 0 48 48">
  <rect x="13" y="30" fill="#BF360C" width="22" height="12"/>
  <g fill="#FFA726">
      <circle cx="10" cy="26" r="4"/>
      <circle cx="38" cy="26" r="4"/>
  </g>
  <path fill="#FFB74D" d="M39,19c0-12.7-30-8.3-30,0c0,1.8,0,8.2,0,10c0,8.3,6.7,15,15,15s15-6.7,15-15C39,27.2,39,20.8,39,19z"/>
  <g fill="#784719">
      <circle cx="30" cy="26" r="2"/>
      <circle cx="18" cy="26" r="2"/>
  </g>
  <path fill="#FF5722" d="M24,2C15.5,2,3,7.8,3,35.6L13,42V24l16.8-9.8L35,21v21l10-8.2c0-5.6-0.9-29-15.4-29L28.2,2H24z"/>
  <path fill="#757575" d="M45,24c-0.6,0-1,0.4-1,1v-7c0-8.8-7.2-16-16-16h-9c-0.6,0-1,0.4-1,1s0.4,1,1,1h9c7.7,0,14,6.3,14,14v10 c0,0.6,0.4,1,1,1s1-0.4,1-1v2c0,3.9-3.1,7-7,7H24c-0.6,0-1,0.4-1,1s0.4,1,1,1h13c5,0,9-4,9-9v-5C46,24.4,45.6,24,45,24z"/>
  <g fill="#37474F">
      <path d="M45,22h-1c-1.1,0-2,0.9-2,2v4c0,1.1,0.9,2,2,2h1c1.1,0,2-0.9,2-2v-4C47,22.9,46.1,22,45,22z"/>
      <circle cx="24" cy="38" r="2"/>
  </g>
</svg>
  `;
};

export const aboutIcon = (route: string, name: string) => {
  if (route === name) {
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" fill="none" stroke=${colors.lightGrey} stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><g id="Icon"><g><path d="M12,1.25c-5.933,0 -10.75,4.817 -10.75,10.75c0,5.933 4.817,10.75 10.75,10.75c5.933,0 10.75,-4.817 10.75,-10.75c0,-5.933 -4.817,-10.75 -10.75,-10.75Zm-0,8.75c-0.398,0 -0.779,0.158 -1.061,0.439c-0.281,0.282 -0.439,0.663 -0.439,1.061c0,1.888 0,4.612 0,6.5c-0,0.398 0.158,0.779 0.439,1.061c0.282,0.281 0.663,0.439 1.061,0.439c0.398,-0 0.779,-0.158 1.061,-0.439c0.281,-0.282 0.439,-0.663 0.439,-1.061c0,-1.888 0,-4.612 0,-6.5c0,-0.398 -0.158,-0.779 -0.439,-1.061c-0.282,-0.281 -0.663,-0.439 -1.061,-0.439Zm0,-5.75c0.966,0 1.75,0.784 1.75,1.75c0,0.966 -0.784,1.75 -1.75,1.75c-0.966,0 -1.75,-0.784 -1.75,-1.75c0,-0.966 0.784,-1.75 1.75,-1.75Z"/></g></g></svg>`;
  }
  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" fill="none" stroke=${colors.lightGrey} stroke-width="" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><g id="Icon"><g><path d="M12,1.25c-5.933,0 -10.75,4.817 -10.75,10.75c0,5.933 4.817,10.75 10.75,10.75c5.933,0 10.75,-4.817 10.75,-10.75c0,-5.933 -4.817,-10.75 -10.75,-10.75Zm-0,8.75c-0.398,0 -0.779,0.158 -1.061,0.439c-0.281,0.282 -0.439,0.663 -0.439,1.061c0,1.888 0,4.612 0,6.5c-0,0.398 0.158,0.779 0.439,1.061c0.282,0.281 0.663,0.439 1.061,0.439c0.398,-0 0.779,-0.158 1.061,-0.439c0.281,-0.282 0.439,-0.663 0.439,-1.061c0,-1.888 0,-4.612 0,-6.5c0,-0.398 -0.158,-0.779 -0.439,-1.061c-0.282,-0.281 -0.663,-0.439 -1.061,-0.439Zm0,-5.75c0.966,0 1.75,0.784 1.75,1.75c0,0.966 -0.784,1.75 -1.75,1.75c-0.966,0 -1.75,-0.784 -1.75,-1.75c0,-0.966 0.784,-1.75 1.75,-1.75Z"/></g></g></svg>`;
};

export const adIcon = (route: string, name: string) => {
  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enable-background="new 0 0 48 48">
  <g fill="#90CAF9">
      <path d="M17.4,33H15v-4h4l0.4,1.5C19.7,31.8,18.7,33,17.4,33z"/>
      <path d="M37,36c0,0-11.8-7-18-7V15c5.8,0,18-7,18-7V36z"/>
  </g>
  <g fill="#283593">
      <circle cx="9" cy="22" r="5"/>
      <path d="M40,19h-3v6h3c1.7,0,3-1.3,3-3S41.7,19,40,19z"/>
      <path d="M18.6,41.2c-0.9,0.6-2.5,1.2-4.6,1.4c-0.6,0.1-1.2-0.3-1.4-1L8.2,27.9c0,0,8.8-6.2,8.8,1.1 c0,5.5,1.5,8.4,2.2,9.5c0.5,0.7,0.5,1.6,0,2.3C19,41,18.8,41.1,18.6,41.2z"/>
  </g>
  <path fill="#3F51B5" d="M9,29h10V15H9c-1.1,0-2,0.9-2,2v10C7,28.1,7.9,29,9,29z"/>
  <path fill="#42A5F5" d="M38,38L38,38c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v28C40,37.1,39.1,38,38,38z"/>
</svg>
`;
};

export const backIcon = (color: any = colors.black) => {
  return `<svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`;
};

export const searchIcon = (color: any = colors.blackSmoke) => {
  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg xmlns="http://www.w3.org/2000/svg" width="49.87" height="49.88" viewBox="0 0 49.87 49.88"><defs><style>.cls-1{fill:red}.cls-2{fill:red}</style></defs><title>Search</title><g id="Layer_2" data-name="Layer 2"><g id="Search"><path fill=${color} stroke=${color} stroke-width="0" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" class="cls-1" d="M49.14 45.61L38.58 35.05a2.77 2.77 0 0 0-3.91 0 17.49 17.49 0 1 1 4.92-16.35 17.7 17.7 0 0 1-.18 8.3 2.5 2.5 0 1 0 4.84 1.29 22.54 22.54 0 1 0-7.72 11.82l9.07 9.06a2.5 2.5 0 0 0 3.54 0 2.5 2.5 0 0 0 0-3.56z"/><path fill=${colors.primary} stroke=${colors.primary} class="cls-2" d="M30 30a2.46 2.46 0 0 0-3-.27 8.52 8.52 0 0 1-8.66.17 2.41 2.41 0 0 0-2.87.33l-.15.14a2.41 2.41 0 0 0 .42 3.81 13.55 13.55 0 0 0 14-.28 2.41 2.41 0 0 0 .41-3.74z"/></g></g></svg>`;
};

export const googleIcon = () => {
  return `<?xml version="1.0" encoding="utf-8"?>
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
  <g id="XMLID_28_">
    <path id="XMLID_30_" class="st0" fill="#fff" d="M195.2,81.2c-43.5,14.9-80.6,47.5-101.2,88.6c-7.2,14.2-12.4,29.3-15.5,44.9
      c-7.9,38.8-2.4,80.1,15.5,115.5c11.6,23.1,28.3,43.6,48.5,59.6c19.1,15.2,41.3,26.4,64.9,32.7c29.7,8,61.4,7.8,91.4,1
      c27.1-6.2,52.7-19.2,73.1-38c21.6-19.9,37-46,45.2-74.1c8.9-30.7,10.1-63.4,4.5-94.8c-56,0-112,0-168.1,0c0,23.2,0,46.5,0,69.7
      c32.4,0,64.9,0,97.3,0c-3.8,22.3-17,42.6-35.8,55.2c-11.8,7.9-25.3,13.1-39.3,15.5c-14.1,2.4-28.6,2.7-42.6-0.1
      c-14.3-2.8-27.9-8.8-39.8-17.2c-19-13.3-33.5-32.9-40.9-54.8c-7.6-22.3-7.7-47.2,0-69.5c5.3-15.7,14.2-30.3,25.9-42.1
      c14.4-14.8,33.1-25.3,53.3-29.6c17.3-3.7,35.5-3,52.4,2.1c14.4,4.4,27.6,12.2,38.5,22.6c11-10.9,21.9-21.9,32.9-32.8
      c5.7-5.9,11.8-11.5,17.4-17.6c-16.6-15.4-36.2-27.8-57.5-35.6C277.1,68.1,233.8,67.8,195.2,81.2z"/>
    <path id="XMLID_31_" class="st1" fill="#E94435" d="M195.2,81.2c38.6-13.4,81.9-13.1,120.3,1.1c21.3,7.8,40.8,20.2,57.5,35.6
      c-5.6,6-11.6,11.7-17.4,17.6c-11,10.9-21.9,21.9-32.9,32.8c-10.9-10.4-24.1-18.3-38.5-22.6c-16.9-5.1-35.1-5.8-52.4-2.1
      c-20.2,4.3-38.9,14.9-53.3,29.6c-11.7,11.8-20.6,26.4-25.9,42.1c-19.5-15.1-39-30.3-58.5-45.4C114.6,128.7,151.7,96.1,195.2,81.2z"
      />
    <path id="XMLID_32_" class="st2" fill="#E94435" d="M78.5,214.7c3.1-15.6,8.4-30.7,15.5-44.9c19.5,15.1,39,30.3,58.5,45.4
      c-7.7,22.3-7.6,47.2,0,69.5c-19.5,15.1-39,30.3-58.5,45.4C76.1,294.9,70.6,253.5,78.5,214.7z"/>
    <path id="XMLID_33_" class="st3" fill="#547DBE" d="M253.6,216.5c56,0,112,0,168.1,0c5.6,31.4,4.4,64.1-4.5,94.8c-8.2,28.1-23.6,54.3-45.2,74.1
      c-18.9-14.7-37.9-29.4-56.7-44.1c18.8-12.5,32-32.9,35.8-55.2c-32.4,0-64.9,0-97.3,0C253.5,263,253.6,239.8,253.6,216.5z"/>
    <path id="XMLID_34_" class="st4" fill="#34A751" d="M94,330.2c19.5-15.1,39-30.3,58.5-45.4c7.4,22,21.9,41.5,40.9,54.8
      c11.9,8.4,25.5,14.3,39.8,17.2c14,2.8,28.6,2.5,42.6,0.1c14-2.4,27.5-7.6,39.3-15.5c18.9,14.7,37.9,29.4,56.7,44.1
      c-20.4,18.9-46,31.8-73.1,38c-29.9,6.8-61.6,7-91.4-1c-23.6-6.3-45.8-17.5-64.9-32.7C122.3,373.7,105.6,353.2,94,330.2z"/>
  </g>
  </svg>  
  `;
};

export const facebookicon = () => {
  return `<?xml version="1.0" encoding="utf-8"?>
  <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
  <g id="XMLID_17_">
    <path id="XMLID_22_" class="st0" fill="#1877F2" d="M432.5,250c0-100.8-81.7-182.5-182.5-182.5S67.5,149.2,67.5,250c0,91.1,66.7,166.6,154,180.3
      V302.8h-46.3V250h46.3v-40.2c0-45.7,27.2-71,68.9-71c20,0,40.9,3.6,40.9,3.6v44.9h-23c-22.7,0-29.7,14.1-29.7,28.5V250h50.6
      l-8.1,52.8h-42.5v127.5C365.8,416.6,432.5,341.1,432.5,250z"/>
    <path id="XMLID_18_" class="st1" fill="#fff" d="M321,302.8l8.1-52.8h-50.6v-34.2c0-14.4,7.1-28.5,29.7-28.5h23v-44.9c0,0-20.9-3.6-40.9-3.6
      c-41.7,0-68.9,25.3-68.9,71V250h-46.3v52.8h46.3v127.5c9.3,1.5,18.8,2.2,28.5,2.2s19.2-0.8,28.5-2.2V302.8H321z"/>
  </g>
  </svg>
  
`;
};

export const exitIcon = () => {
  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill=${colors.lightGrey} stroke=${colors.lightGrey} stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><path d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"/></svg>`;
};

export const sendIcon = () => {
  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.5004 12H5.00043M4.91577 12.2915L2.58085 19.2662C2.39742 19.8142 2.3057 20.0881 2.37152 20.2569C2.42868 20.4034 2.55144 20.5145 2.70292 20.5567C2.87736 20.6054 3.14083 20.4869 3.66776 20.2497L20.3792 12.7296C20.8936 12.4981 21.1507 12.3824 21.2302 12.2216C21.2993 12.082 21.2993 11.9181 21.2302 11.7784C21.1507 11.6177 20.8936 11.5019 20.3792 11.2705L3.66193 3.74776C3.13659 3.51135 2.87392 3.39315 2.69966 3.44164C2.54832 3.48375 2.42556 3.59454 2.36821 3.74078C2.30216 3.90917 2.3929 4.18255 2.57437 4.72931L4.91642 11.7856C4.94759 11.8795 4.96317 11.9264 4.96933 11.9744C4.97479 12.0171 4.97473 12.0602 4.96916 12.1028C4.96289 12.1508 4.94718 12.1977 4.91577 12.2915Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;
};

export const earningIcon = () => {
  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
  <svg
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:cc="http://creativecommons.org/ns#"
     xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
     xmlns:svg="http://www.w3.org/2000/svg"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
     xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
     width="24"
     height="24"
     viewBox="0 0 6.3499999 6.3500002"
     version="1.1"
     id="svg8"
     inkscape:version="0.92.4 (5da689c313, 2019-01-14)"
     sodipodi:docname="1. Wallet.svg">
    <defs
       id="defs2" />
    <sodipodi:namedview
       id="base"
       pagecolor="#ffffff"
       bordercolor="#666666"
       borderopacity="1.0"
       inkscape:pageopacity="0.0"
       inkscape:pageshadow="2"
       inkscape:zoom="11.313708"
       inkscape:cx="-1.8243053"
       inkscape:cy="15.654393"
       inkscape:document-units="px"
       inkscape:current-layer="layer1"
       showgrid="false"
       units="px"
       inkscape:window-width="1280"
       inkscape:window-height="658"
       inkscape:window-x="-8"
       inkscape:window-y="-8"
       inkscape:window-maximized="1"
       showguides="true"
       guidecolor="#af0000"
       guideopacity="0.49803922"
       guidehicolor="#ff4b4b"
       guidehiopacity="0.49803922">
      <inkscape:grid
         type="xygrid"
         id="grid815"
         empspacing="1"
         originx="0"
         originy="0"
         spacingx="0"
         spacingy="0"
         snapvisiblegridlinesonly="true"
         visible="true"
         enabled="true"
         dotted="false" />
    </sodipodi:namedview>
    <metadata
       id="metadata5">
      <rdf:RDF>
        <cc:Work
           rdf:about="">
          <dc:format>image/svg+xml</dc:format>
          <dc:type
             rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
          <dc:title />
        </cc:Work>
      </rdf:RDF>
    </metadata>
    <g
       inkscape:label="Guides"
       inkscape:groupmode="layer"
       id="layer1"
       transform="translate(0,-290.64999)">
      <path
         style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#79ef78;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.26458335;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
         d="m 1.4492188,292.10547 c -0.1069703,0 -0.1737883,0.0776 -0.2089844,0.14844 -0.035196,0.0708 -0.050781,0.15302 -0.050781,0.24218 0,0.0892 0.015578,0.1714 0.050781,0.24219 0.035204,0.0708 0.1020578,0.14844 0.2089844,0.14844 H 4.53125 c 0.1069517,0 0.1737848,-0.0777 0.2089844,-0.14844 0.0352,-0.0708 0.052734,-0.15302 0.052734,-0.24219 0,-0.0892 -0.017532,-0.17139 -0.052734,-0.24218 -0.035202,-0.0708 -0.1020511,-0.14844 -0.2089844,-0.14844 z"
         id="rect852"
         inkscape:connector-curvature="0"
         sodipodi:nodetypes="scscsscscss" />
      <path
         sodipodi:nodetypes="scscsscscss"
         inkscape:connector-curvature="0"
         id="path842"
         d="m 1.5875002,292.20753 c -0.097378,0 -0.1582036,0.0573 -0.1902434,0.10965 -0.03204,0.0523 -0.046227,0.11305 -0.046227,0.17891 0,0.0659 0.014181,0.12662 0.046227,0.17892 0.032048,0.0523 0.092906,0.10966 0.1902434,0.10966 H 4.393144 c 0.09736,0 0.1582004,-0.0574 0.1902434,-0.10966 0.032043,-0.0523 0.048005,-0.11304 0.048005,-0.17892 0,-0.0659 -0.015959,-0.12661 -0.048005,-0.17891 -0.032045,-0.0523 -0.0929,-0.10965 -0.1902434,-0.10965 z"
         style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#9dcc78;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.26458335;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" />
      <path
         style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#cc785f;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.26458335;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
         d="m 1.1816406,292.63477 c -0.21005929,0 -0.38867185,0.16675 -0.38867185,0.37695 v 2.16797 c 0,0.2102 0.17861876,0.37695 0.38867185,0.37695 h 3.53125 c 0.2100531,0 0.3886719,-0.16675 0.3886719,-0.37695 v -2.16797 c 0,-0.2102 -0.1786126,-0.37695 -0.3886719,-0.37695 z"
         id="rect848"
         inkscape:connector-curvature="0"
         sodipodi:nodetypes="sssssssss" />
      <path
         style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#cc584b;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.26458335;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
         d="m 4.2324219,293.37891 c -0.2131595,0 -0.3886719,0.17552 -0.3886719,0.38867 v 0.51953 c 0,0.21315 0.1755186,0.38867 0.3886719,0.38867 h 0.9433593 c 0.2131533,0 0.3886719,-0.17552 0.3886719,-0.38867 v -0.51953 c 0,-0.21315 -0.1755124,-0.38867 -0.3886719,-0.38867 z"
         id="rect850"
         inkscape:connector-curvature="0"
         sodipodi:nodetypes="sssssssss" />
      <path
         style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#ab9f8a;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.26458335;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
         d="m 4.7050781,293.63867 c -0.2132086,0 -0.3886731,0.17546 -0.3886719,0.38867 -9.6e-6,0.21322 0.1754576,0.38868 0.3886719,0.38868 0.2132144,0 0.3886815,-0.17546 0.3886719,-0.38868 1.3e-6,-0.21321 -0.1754633,-0.38867 -0.3886719,-0.38867 z"
         id="path854"
         inkscape:connector-curvature="0"
         sodipodi:nodetypes="scscs" />
    </g>
  </svg>
  `;
};

export const analyticsIcon = () => {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
  <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="7.83333in" height="7.83333in" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
  viewBox="0 0 7.83333 7.83333"
   xmlns:xlink="http://www.w3.org/1999/xlink">
   <defs>
    
   </defs>
   <g id="Layer_x0020_1">
    <metadata id="CorelCorpID_0Corel-Layer"/>
    <circle class="fil0" fill="#FFDB78" cx="3.91667" cy="3.91667" r="3.91667"/>
    <g id="_348345304">
     <path id="_348346480" class="fil1" fill="#413B32" fill-rule="nonzero" d="M1.43667 1.82687l4.96 0c0.0441811,0 0.08,0.0358189 0.08,0.08l0 3.4953c0,0.0441811 -0.0358189,0.08 -0.08,0.08l-4.96 0c-0.0441811,0 -0.08,-0.0358189 -0.08,-0.08l0 -3.4953c0,-0.0441811 0.0358189,-0.08 0.08,-0.08zm4.88 0.16l-4.8 0 0 3.3353 4.8 0 0 -3.3353z"/>
     <path id="_348347152" class="fil1" fill="#413B32" fill-rule="nonzero" d="M3.45063 5.32217l0.932079 0c0.0441811,0 0.08,0.0358189 0.08,0.08l0 0.524291c0,0.0441811 -0.0358189,0.08 -0.08,0.08l-0.932079 0c-0.0441811,0 -0.08,-0.0358189 -0.08,-0.08l0 -0.524291c0,-0.0441811 0.0358189,-0.08 0.08,-0.08zm0.852079 0.16l-0.772079 0 0 0.364291 0.772079 0 0 -0.364291z"/>
     <path id="_348346744" class="fil1" fill="#413B32" fill-rule="nonzero" d="M2.67863 5.84646c-0.0441811,0 -0.08,0.0358189 -0.08,0.08 0,0.0441811 0.0358189,0.08 0.08,0.08l2.47607 0c0.0441811,0 0.08,-0.0358189 0.08,-0.08 0,-0.0441811 -0.0358189,-0.08 -0.08,-0.08l-2.47607 0z"/>
     <g>
      <path id="_348346552" class="fil1" fill="#413B32" fill-rule="nonzero" d="M4.77731 2.60435l0.898075 0c0.0441811,0 0.08,0.0358189 0.08,0.08l0 2.71294c0,0.0441811 -0.0358189,0.08 -0.08,0.08l-0.898075 0c-0.0441811,0 -0.08,-0.0358189 -0.08,-0.08l0 -2.71294c0,-0.0441811 0.0358189,-0.08 0.08,-0.08zm0.818075 0.16l-0.738075 0 0 2.55294 0.738075 0 0 -2.55294z"/>
      <path id="_348346696" class="fil1" fill="#413B32" fill-rule="nonzero" d="M3.46763 3.28492l0.898079 0c0.0441811,0 0.08,0.0358189 0.08,0.08l0 2.03237c0,0.0441811 -0.0358189,0.08 -0.08,0.08l-0.898079 0c-0.0441811,0 -0.08,-0.0358189 -0.08,-0.08l0 -2.03237c0,-0.0441811 0.0358189,-0.08 0.08,-0.08zm0.818079 0.16l-0.738079 0 0 1.87237 0.738079 0 0 -1.87237z"/>
      <path id="_348346504" class="fil1" fill="#413B32" fill-rule="nonzero" d="M2.15794 3.96081l0.898075 0c0.0441811,0 0.08,0.0358189 0.08,0.08l0 1.35647c0,0.0441811 -0.0358189,0.08 -0.08,0.08l-0.898075 0c-0.0441811,0 -0.08,-0.0358189 -0.08,-0.08l0 -1.35647c0,-0.0441811 0.0358189,-0.08 0.08,-0.08zm0.818075 0.16l-0.738075 0 0 1.19647 0.738075 0 0 -1.19647z"/>
     </g>
     <polygon id="_348346336" class="fil2" fill="#FFF59D" points="4.85731,2.76435 4.85731,5.31728 5.59539,5.31728 5.59539,2.76435 "/>
     <polygon id="_348345736" class="fil3" fill="#FFCC80" points="4.2857,5.31728 4.2857,3.44492 3.54763,3.44492 3.54763,5.31728 "/>
     <polygon id="_348346312" class="fil4" fill="#FFCCBC" points="2.97602,5.31728 2.97602,4.12081 2.23794,4.12081 2.23794,5.31728 "/>
     <path id="_348345976" class="fil5" fill="#E3F2FD" d="M2.15794 3.96081l0.898075 0c0.0441811,0 0.08,0.0358189 0.08,0.08l0 1.28135 0.25161 0 0 -1.95725c0,-0.0441811 0.0358189,-0.08 0.08,-0.08l0.898079 0c0.0441811,0 0.08,0.0358189 0.08,0.08l0 1.95725 0.25161 0 0 -2.63782c0,-0.0441811 0.0358189,-0.08 0.08,-0.08l0.898075 0c0.0441811,0 0.08,0.0358189 0.08,0.08l0 2.63782 0.561276 0 0 -3.3353 -4.8 0 0 3.3353 0.561276 0 0 -1.28135c0,-0.0441811 0.0358189,-0.08 0.08,-0.08z"/>
     <polygon id="_348345808" class="fil6" fill="whitesmoke" points="4.3027,5.48217 3.53063,5.48217 3.53063,5.84646 4.3027,5.84646 "/>
     <polygon id="_348345784" class="fil7" fill="#D3A99C" points="2.60805,4.12081 2.60805,5.31728 2.97602,5.31728 2.97602,4.12081 "/>
     <polygon id="_348345952" class="fil8" fill="#D3A96B" points="3.91774,3.44492 3.91774,5.31728 4.2857,5.31728 4.2857,3.44492 "/>
     <polygon id="_348345376" class="fil9" fill="#D3CB83" points="5.22743,2.76435 5.22743,5.31728 5.59539,5.31728 5.59539,2.76435 "/>
     <rect id="_348345040" class="fil10" fill="#BBC8D1" x="6.06535" y="1.98687" width="0.251311" height="3.3353"/>
    </g>
   </g>
  </svg>  
  `;
};

export const inviteIcon = () => {
  return `<?xml version="1.0" encoding="iso-8859-1"?>
  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 58.064 58.064" style="enable-background:new 0 0 58.064 58.064;" xml:space="preserve">
  <polygon style="fill:#7383BF;" points="17.064,31.032 58.064,10.032 24.064,35.032 44.064,48.032 58.064,10.032 0,22.032 "/>
  <polygon style="fill:#556080;" points="24.064,35.032 20.127,48.032 17.064,31.032 58.064,10.032 "/>
  <polygon style="fill:#464F66;" points="24.064,35.032 20.064,48.032 31.912,40.133 "/>
  </svg>  
  `;
};

export const profileIcon = (color = colors.lightGrey) => {
  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19.0745 20.4061C18.9178 20.2645 18.7451 20.1416 18.56 20.04L15.27 18.25C14.9008 18.0204 14.5925 17.705 14.3714 17.3307C14.1503 16.9564 14.0229 16.5342 14 16.1V15.73C14.0279 15.7041 14.058 15.6806 14.09 15.66C14.6894 15.1894 15.1731 14.5879 15.5042 13.9015C15.8352 13.2151 16.0048 12.462 16 11.7V8.63C15.9948 8.12288 15.8849 7.6223 15.6771 7.15966C15.4694 6.69701 15.1683 6.28228 14.7927 5.94146C14.4172 5.60065 13.9752 5.3411 13.4947 5.17909C13.0141 5.01708 12.5052 4.95611 12 5C11.4947 4.95611 10.9859 5.01708 10.5053 5.17909C10.0247 5.3411 9.58282 5.60065 9.20726 5.94146C8.8317 6.28228 8.53061 6.69701 8.32287 7.15966C8.11512 7.6223 8.0052 8.12288 7.99999 8.63V11.7C7.99514 12.462 8.16473 13.2151 8.49579 13.9015C8.82686 14.5879 9.3106 15.1894 9.90999 15.66C9.942 15.6806 9.97211 15.7041 9.99999 15.73V16.1C9.9771 16.5342 9.84968 16.9564 9.62856 17.3307C9.40745 17.705 9.09918 18.0204 8.72999 18.25L5.43999 20.04C5.25483 20.1416 5.08216 20.2645 4.92547 20.4061C3.19718 18.9545 1.95722 17.0065 1.37382 14.8262C0.790408 12.6459 0.89179 10.3389 1.66421 8.21824C2.43663 6.09754 3.84269 4.26577 5.69166 2.97143C7.54062 1.67708 9.74298 0.982819 12 0.982819C14.257 0.982819 16.4593 1.67708 18.3083 2.97143C20.1572 4.26577 21.5633 6.09754 22.3357 8.21824C23.1081 10.3389 23.2095 12.6459 22.6261 14.8262C22.0427 17.0065 20.8028 18.9545 19.0745 20.4061L19.0745 20.4061Z" fill="#CCF0EC"/>
  <path d="M19.08 20.41C18.85 20.6 18.61 20.79 18.37 20.97C18.3 21.02 18.23 21.07 18.15 21.12C17.95 21.25 17.75 21.38 17.55 21.5C17.2786 21.6624 16.9981 21.8093 16.71 21.94C16.4471 22.0695 16.1766 22.1831 15.9 22.28C15.5253 22.4287 15.1411 22.5523 14.75 22.65C14.61 22.69 14.47 22.7199 14.33 22.75C14.1 22.8 13.88 22.84 13.65 22.87C13.478 22.9025 13.3045 22.9258 13.13 22.94C12.99 22.96 12.85 22.97 12.71 22.98C12.47 22.99 12.24 23 12 23C11.76 23 11.53 22.99 11.29 22.98C11.15 22.97 11.01 22.96 10.87 22.94C10.6956 22.9258 10.522 22.9025 10.35 22.87C10.12 22.84 9.90001 22.8 9.67001 22.75C9.53001 22.72 9.39001 22.69 9.25001 22.65C8.85889 22.5523 8.4747 22.4287 8.10001 22.28C7.82342 22.1831 7.55292 22.0695 7.29001 21.94C7.00192 21.8093 6.72147 21.6624 6.45001 21.5C6.25001 21.38 6.05001 21.25 5.85001 21.12C5.77001 21.07 5.70001 21.02 5.63001 20.97C5.39001 20.79 5.15001 20.6 4.92001 20.41C5.07829 20.2668 5.25281 20.1426 5.44001 20.04L8.73001 18.25C9.0992 18.0204 9.40747 17.705 9.62859 17.3307C9.8497 16.9563 9.97713 16.5341 10 16.1V15.73C9.97214 15.704 9.94202 15.6806 9.91001 15.66C9.31062 15.1894 8.82688 14.5879 8.49582 13.9015C8.16475 13.2151 7.99516 12.462 8.00001 11.7V8.62999C8.00522 8.12287 8.11514 7.62229 8.32289 7.15965C8.53064 6.697 8.83173 6.28227 9.20728 5.94145C9.58284 5.60064 10.0248 5.34109 10.5053 5.17908C10.9859 5.01707 11.4948 4.9561 12 4.99999C12.5053 4.9561 13.0141 5.01707 13.4947 5.17908C13.9753 5.34109 14.4172 5.60064 14.7927 5.94145C15.1683 6.28227 15.4694 6.697 15.6771 7.15965C15.8849 7.62229 15.9948 8.12287 16 8.62999V11.7C16.0049 12.462 15.8353 13.2151 15.5042 13.9015C15.1731 14.5879 14.6894 15.1894 14.09 15.66C14.058 15.6806 14.0279 15.704 14 15.73V16.1C14.0229 16.5341 14.1503 16.9563 14.3714 17.3307C14.5926 17.705 14.9008 18.0204 15.27 18.25L18.56 20.04C18.7472 20.1426 18.9217 20.2668 19.08 20.41V20.41Z" fill="#00C8AF"/>
  </svg>
  `;
};

export const frontIcon = () => {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="11px" height="20px" viewBox="0 0 11 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>arrow_forward_ios</title>
      <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Rounded" transform="translate(-345.000000, -3434.000000)">
              <g id="Navigation" transform="translate(100.000000, 3378.000000)">
                  <g id="-Round-/-Navigation-/-arrow_forward_ios" transform="translate(238.000000, 54.000000)">
                      <g>
                          <polygon id="Path" opacity="0.87" points="24 24 0 24 0 0 24 0"></polygon>
                          <path d="M7.38,21.01 C7.87,21.5 8.66,21.5 9.15,21.01 L17.46,12.7 C17.85,12.31 17.85,11.68 17.46,11.29 L9.15,2.98 C8.66,2.49 7.87,2.49 7.38,2.98 C6.89,3.47 6.89,4.26 7.38,4.75 L14.62,12 L7.37,19.25 C6.89,19.73 6.89,20.53 7.38,21.01 Z" id="🔹-Icon-Color" fill=${colors.lightGrey}></path>
                      </g>
                  </g>
              </g>
          </g>
      </g>
  </svg>`;
};

export const locationIcon = (color = colors.lightGrey) => {
  return `
  <?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
<g>
	<g>
		<g>
			<path fill="#FFD41D" d="M32,0c17.7,0,32,14.3,32,32S49.7,64,32,64S0,49.7,0,32S14.3,0,32,0z"/>
		</g>
	</g>
	<g>
		<g>
			<path fill="#FFFFFF" d="M49,30h-8.4h-2.3H15L9,50h46L49,30z"/>
		</g>
	</g>
	<g>
		<g>
			<polygon fill="#63B0E5" points="51.7,46.9 52,48 26,48 25.6,41.4 			"/>
		</g>
	</g>
	<g>
		<g>
			<polygon fill="#FFF4C5" points="47,32 25,32 25.5,39.3 31.5,40.6 51,44.8 			"/>
		</g>
	</g>
	<g>
		<g>
			<polygon fill="#54D1AD" points="23.6,41 24,48 12,48 14.8,39.2 			"/>
		</g>
	</g>
	<g>
		<g>
			<polygon fill="#FCDD5B" points="51.7,46.9 51,44.8 31.5,40.6 25.5,39.3 25,32 23,32 23.4,38.8 15.4,37.1 14.8,39.2 23.6,41 
				24,48 26,48 25.6,41.4 			"/>
		</g>
	</g>
	<g>
		<g>
			<polygon fill="#63B0E5" points="23,32 23.4,38.8 15.4,37.1 17,32 			"/>
		</g>
	</g>
	<g>
		<g>
			<path fill="#E84B4B" d="M32,10c-5.5,0-10,4.7-10,10.5c0,3.1,1.7,6.5,3.7,9.5c0.5,0.7,0.9,1.3,1.4,2c2,2.8,4.1,5,4.9,6
				c0.8-1,2.9-3.3,4.9-6c0.5-0.6,0.9-1.3,1.4-2c2-3,3.7-6.4,3.7-9.5C42,14.7,37.5,10,32,10z M32,23c-1.7,0-3-1.3-3-3
				c0-1.7,1.3-3,3-3s3,1.3,3,3C35,21.7,33.7,23,32,23z"/>
		</g>
	</g>
	<g>
		<g>
			<path fill="#C93D3D" d="M32,15c2.8,0,5,2.2,5,5c0,2.8-2.2,5-5,5s-5-2.2-5-5C27,17.2,29.2,15,32,15z M35,20c0-1.7-1.3-3-3-3
				s-3,1.4-3,3c0,1.6,1.3,3,3,3S35,21.7,35,20z"/>
		</g>
	</g>
</g>
</svg>
  `;
};

export const deleteIcon = (color: any = colors.black) => {
  return `
  <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-delete"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line></svg>
  `;
};

export const hidePassIcon = (color = colors.black) => {
  return `
  <?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M61 34.73C56.9896 29.8627 52.1564 25.7368 46.72 22.54L49.14 20.12C49.2555 20.0044 49.3472 19.8672 49.4098 19.7163C49.4723 19.5653 49.5045 19.4034 49.5045 19.24C49.5045 19.0766 49.4723 18.9147 49.4098 18.7637C49.3472 18.6128 49.2555 18.4756 49.14 18.36C49.0244 18.2444 48.8872 18.1528 48.7362 18.0902C48.5852 18.0277 48.4234 17.9955 48.26 17.9955C48.0965 17.9955 47.9347 18.0277 47.7837 18.0902C47.6327 18.1528 47.4955 18.2444 47.38 18.36L44.38 21.36C40.9 19.6278 37.1093 18.6079 33.23 18.36V12.5C33.23 12.1685 33.0983 11.8505 32.8639 11.6161C32.6294 11.3817 32.3115 11.25 31.98 11.25C31.6485 11.25 31.3305 11.3817 31.0961 11.6161C30.8617 11.8505 30.73 12.1685 30.73 12.5V18.3C28.6038 18.4173 26.4991 18.7866 24.46 19.4C24.1417 19.4955 23.8744 19.7135 23.7169 20.006C23.5594 20.2986 23.5245 20.6417 23.62 20.96C23.7155 21.2783 23.9335 21.5456 24.226 21.7031C24.5186 21.8606 24.8617 21.8955 25.18 21.8C27.3891 21.1155 29.6873 20.7616 32 20.75C36.2308 20.8587 40.3749 21.9727 44.09 24C49.5008 26.9463 54.3378 30.8417 58.37 35.5C55.5264 38.7808 52.2963 41.7054 48.75 44.21C48.6094 44.305 48.4895 44.4274 48.3974 44.5698C48.3052 44.7123 48.2428 44.8718 48.2139 45.039C48.1849 45.2062 48.19 45.3774 48.2289 45.5426C48.2677 45.7077 48.3395 45.8633 48.44 46C48.5554 46.1585 48.7055 46.2887 48.8787 46.3805C49.052 46.4724 49.244 46.5235 49.44 46.53C49.6984 46.5322 49.9507 46.4516 50.16 46.3C54.2106 43.4626 57.8572 40.0885 61 36.27C61.1753 36.0516 61.2708 35.78 61.2708 35.5C61.2708 35.22 61.1753 34.9484 61 34.73V34.73Z" fill=${color}/>
<path d="M39.84 36.9999H40C40.3054 36.9997 40.6001 36.8877 40.8286 36.685C41.057 36.4823 41.2034 36.2031 41.24 35.8999C41.25 35.7668 41.25 35.6331 41.24 35.4999C41.2374 33.0492 40.2634 30.6995 38.5314 28.9656C36.7994 27.2318 34.4507 26.2552 32 26.2499C31.8669 26.2399 31.7332 26.2399 31.6 26.2499C31.4403 26.2685 31.2858 26.3185 31.1454 26.397C31.0051 26.4755 30.8816 26.581 30.7822 26.7074C30.6827 26.8338 30.6093 26.9786 30.566 27.1335C30.5227 27.2884 30.5105 27.4503 30.53 27.6099C30.5678 27.9362 30.7306 28.2352 30.9842 28.4441C31.2378 28.6529 31.5625 28.7554 31.89 28.7299H32C33.7894 28.7325 35.5048 29.4446 36.7701 30.7099C38.0354 31.9752 38.7474 33.6905 38.75 35.4799V35.5799C38.7262 35.745 38.7356 35.9132 38.7778 36.0746C38.82 36.2361 38.894 36.3874 38.9956 36.5197C39.0972 36.6521 39.2243 36.7627 39.3693 36.8452C39.5143 36.9277 39.6744 36.9803 39.84 36.9999V36.9999Z" fill=${color}/>
<path d="M10.8801 13.1199C10.6467 12.8865 10.3301 12.7554 10.0001 12.7554C9.67002 12.7554 9.35347 12.8865 9.12008 13.1199C8.88669 13.3533 8.75557 13.6698 8.75557 13.9999C8.75557 14.3299 8.88669 14.6465 9.12008 14.8799L17.0001 22.7299C11.6813 25.8996 6.94596 29.9585 3.00008 34.7299C2.82479 34.9482 2.72925 35.2199 2.72925 35.4999C2.72925 35.7799 2.82479 36.0515 3.00008 36.2699C3.52008 36.9399 16.0901 52.7499 32.0001 52.7499C36.1863 52.6787 40.3049 51.6815 44.0601 49.8299L49.1201 54.8799C49.2346 54.9972 49.3715 55.0904 49.5226 55.1541C49.6738 55.2177 49.8361 55.2505 50.0001 55.2505C50.1641 55.2505 50.3264 55.2177 50.4775 55.1541C50.6286 55.0904 50.7655 54.9972 50.8801 54.8799C50.9962 54.7646 51.0883 54.6275 51.1512 54.4765C51.2141 54.3255 51.2465 54.1635 51.2465 53.9999C51.2465 53.8363 51.2141 53.6743 51.1512 53.5233C51.0883 53.3722 50.9962 53.2351 50.8801 53.1199L10.8801 13.1199ZM26.2301 31.9999L35.5001 41.2599C34.4784 41.8868 33.3079 42.2296 32.1094 42.2526C30.9109 42.2756 29.728 41.9781 28.683 41.3909C27.638 40.8037 26.7688 39.948 26.1653 38.9123C25.5618 37.8766 25.2458 36.6986 25.2501 35.4999C25.2546 34.2661 25.5933 33.0566 26.2301 31.9999V31.9999ZM32.0001 50.2499C19.2501 50.2499 8.34008 38.6299 5.63008 35.4999C9.39369 31.1617 13.8426 27.4695 18.8001 24.5699L24.4301 30.1999C23.1793 31.9776 22.596 34.1396 22.783 36.3052C22.97 38.4707 23.9152 40.5008 25.4522 42.0377C26.9892 43.5747 29.0193 44.52 31.1848 44.7069C33.3504 44.8939 35.5124 44.3106 37.2901 43.0599L42.1901 47.9999C38.9866 49.4496 35.5162 50.2159 32.0001 50.2499V50.2499Z" fill=${color}/>
</svg>
  `;
};

export const showPassIcon = (color = colors.black) => {
  return `
  <?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M61 34.73C57.0061 29.8591 52.1859 25.7294 46.76 22.53L49.16 20.12C49.2755 20.0044 49.3672 19.8672 49.4297 19.7163C49.4923 19.5653 49.5245 19.4034 49.5245 19.24C49.5245 19.0766 49.4923 18.9147 49.4297 18.7637C49.3672 18.6128 49.2755 18.4756 49.16 18.36C49.0444 18.2444 48.9072 18.1528 48.7562 18.0902C48.6052 18.0277 48.4434 17.9955 48.28 17.9955C48.1165 17.9955 47.9547 18.0277 47.8037 18.0902C47.6527 18.1528 47.5155 18.2444 47.4 18.36L44.4 21.31C40.9128 19.5783 37.1156 18.5584 33.23 18.31V12.5C33.23 12.1685 33.0983 11.8505 32.8638 11.6161C32.6294 11.3817 32.3115 11.25 31.98 11.25C31.6484 11.25 31.3305 11.3817 31.0961 11.6161C30.8617 11.8505 30.73 12.1685 30.73 12.5V18.29C26.8444 18.5384 23.0472 19.5583 19.56 21.29L16.56 18.34C16.3266 18.1066 16.01 17.9755 15.68 17.9755C15.3499 17.9755 15.0334 18.1066 14.8 18.34C14.5666 18.5734 14.4355 18.8899 14.4355 19.22C14.4355 19.5501 14.5666 19.8666 14.8 20.1L17.2 22.51C11.7867 25.7192 6.98012 29.8555 2.99996 34.73C2.82467 34.9484 2.72913 35.22 2.72913 35.5C2.72913 35.78 2.82467 36.0516 2.99996 36.27C3.51996 36.94 16.09 52.75 32 52.75C47.91 52.75 60.46 36.94 61 36.27C61.1753 36.0516 61.2708 35.78 61.2708 35.5C61.2708 35.22 61.1753 34.9484 61 34.73V34.73ZM32 50.25C19.25 50.25 8.33996 38.64 5.62996 35.5C8.33996 32.36 19.25 20.75 32 20.75C44.75 20.75 55.66 32.36 58.37 35.5C55.66 38.64 44.75 50.25 32 50.25Z" fill=${color}/>
<path d="M32 26.25C30.1705 26.25 28.3821 26.7925 26.861 27.8089C25.3398 28.8253 24.1542 30.27 23.4541 31.9602C22.754 33.6504 22.5708 35.5103 22.9277 37.3046C23.2847 39.0989 24.1656 40.7471 25.4593 42.0407C26.7529 43.3344 28.4011 44.2154 30.1954 44.5723C31.9897 44.9292 33.8496 44.746 35.5398 44.0459C37.23 43.3458 38.6747 42.1602 39.6911 40.639C40.7075 39.1179 41.25 37.3295 41.25 35.5C41.2474 33.0476 40.272 30.6963 38.5378 28.9622C36.8037 27.228 34.4524 26.2526 32 26.25V26.25ZM32 42.25C30.665 42.25 29.3599 41.8541 28.2499 41.1124C27.1399 40.3707 26.2747 39.3165 25.7638 38.0831C25.2529 36.8497 25.1193 35.4925 25.3797 34.1831C25.6402 32.8738 26.283 31.671 27.227 30.727C28.171 29.783 29.3738 29.1401 30.6831 28.8797C31.9925 28.6192 33.3497 28.7529 34.5831 29.2638C35.8165 29.7747 36.8707 30.6399 37.6124 31.7499C38.3541 32.8599 38.75 34.165 38.75 35.5C38.7474 37.2894 38.0354 39.0048 36.7701 40.2701C35.5048 41.5353 33.7894 42.2474 32 42.25Z" fill=${color}/>
</svg>
  `;
};

export const goNextIcon = (color = "none") => {
  return `
  <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
  `;
};

export const attachIcon = () => {
  return `
  <?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve" fill="#000" stroke="#000" stroke-width="1">
<path d="M26.3,20.3L15.1,9.1c-1.2-1.2-3.4-1.2-4.6,0c-0.6,0.6-1,1.4-1,2.3c0,0.9,0.3,1.7,1,2.3l7.2,7.2c0.4,0.4,1,0.4,1.4,0
	s0.4-1,0-1.4l-7.2-7.2c-0.2-0.2-0.4-0.6-0.4-0.9c0-0.3,0.1-0.7,0.4-0.9c0.5-0.5,1.3-0.5,1.8,0l11.2,11.2c0.7,0.7,1,1.6,1,2.5
	c0,0.9-0.4,1.8-1,2.5c-1.3,1.3-3.7,1.3-5,0L7.1,13.9c-2.3-2.3-2.3-5.9,0-8.2c2.3-2.3,5.9-2.3,8.2,0l8.8,8.8c0.4,0.4,1,0.4,1.4,0
	s0.4-1,0-1.4l-8.8-8.8c-3-3-8-3-11,0C4.2,5.7,3.4,7.7,3.4,9.8c0,2.1,0.8,4,2.3,5.5l12.8,12.8c1,1,2.4,1.6,3.9,1.6
	c1.5,0,2.9-0.6,3.9-1.6s1.6-2.4,1.6-3.9S27.3,21.3,26.3,20.3z"/>
</svg>
  `;
};

export const editIcon = () => {
  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg id="i-edit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"  fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
  <path d="M30 7 L25 2 5 22 3 29 10 27 Z M21 6 L26 11 Z M5 22 L10 27 Z" />
</svg>`;
};

export const closeIcon = () => {
  return `<?xml version="1.0" encoding="iso-8859-1"?>
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 60.963 60.842" style="enable-background:new 0 0 60.963 60.842;" xml:space="preserve">
  <path style="fill:#fff;" d="M59.595,52.861L37.094,30.359L59.473,7.98c1.825-1.826,1.825-4.786,0-6.611
    c-1.826-1.825-4.785-1.825-6.611,0L30.483,23.748L8.105,1.369c-1.826-1.825-4.785-1.825-6.611,0c-1.826,1.826-1.826,4.786,0,6.611
    l22.378,22.379L1.369,52.861c-1.826,1.826-1.826,4.785,0,6.611c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
    l22.502-22.502l22.501,22.502c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
    C61.42,57.647,61.42,54.687,59.595,52.861z"/>
  </svg>
  `;
};

export const moreIcon = (color: any) => {
  return `
  <?xml version="1.0" encoding="iso-8859-1"?>
<svg version="1.1" id="Layer_1_1_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve" fill=${color}>
<circle cx="2" cy="8" r="2"/>
<circle cx="8" cy="8" r="2"/>
<circle cx="14" cy="8" r="2"/>
</svg>
  `;
};

export const cardIcon = (color: any) => {
  return `
  <?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="58px" height="42px" viewBox="0 0 58 42" version="1.1">
    <title>040 - Payment Cards</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="040---Payment-Cards">
            <path d="M12,32 L12,39 C12,40.6568542 13.3431458,42 15,42 L55,42 C56.6568542,42 58,40.6568542 58,39 L58,13 C58,11.3431458 56.6568542,10 55,10 L46,10 L12,32 Z" id="Path" fill="#3B97D3"/>
            <rect id="Rectangle" fill="#F29C1F" x="0" y="0" width="46" height="32" rx="3"/>
            <rect id="Rectangle" fill="#F3D55B" x="30" y="4" width="12" height="9" rx="2"/>
            <polygon id="Path" fill="#F0C419" points="35 4 35 13 33 13 33 9 30 9 30 7 33 7 33 4"/>
            <path d="M42,7 L42,9 L39,9 L39,13 L37,13 L37,8 C37,7.44771525 37.4477153,7 38,7 L42,7 Z" id="Path" fill="#F0C419"/>
            <path d="M6,8 L20,8 C20.5522847,8 21,7.55228475 21,7 C21,6.44771525 20.5522847,6 20,6 L6,6 C5.44771525,6 5,6.44771525 5,7 C5,7.55228475 5.44771525,8 6,8 Z" id="Path" fill="#F9EAB0"/>
            <path d="M5,22 L11,22 C11.5522847,22 12,21.5522847 12,21 C12,20.4477153 11.5522847,20 11,20 L5,20 C4.44771525,20 4,20.4477153 4,21 C4,21.5522847 4.44771525,22 5,22 Z" id="Path" fill="#F9EAB0"/>
            <path d="M21,20 L15,20 C14.4477153,20 14,20.4477153 14,21 C14,21.5522847 14.4477153,22 15,22 L21,22 C21.5522847,22 22,21.5522847 22,21 C22,20.4477153 21.5522847,20 21,20 Z" id="Path" fill="#F9EAB0"/>
            <path d="M31,20 L25,20 C24.4477153,20 24,20.4477153 24,21 C24,21.5522847 24.4477153,22 25,22 L31,22 C31.5522847,22 32,21.5522847 32,21 C32,20.4477153 31.5522847,20 31,20 Z" id="Path" fill="#F9EAB0"/>
            <path d="M41,20 L35,20 C34.4477153,20 34,20.4477153 34,21 C34,21.5522847 34.4477153,22 35,22 L41,22 C41.5522847,22 42,21.5522847 42,21 C42,20.4477153 41.5522847,20 41,20 Z" id="Path" fill="#F9EAB0"/>
            <path d="M18,26 L5,26 C4.44771525,26 4,26.4477153 4,27 C4,27.5522847 4.44771525,28 5,28 L18,28 C18.5522847,28 19,27.5522847 19,27 C19,26.4477153 18.5522847,26 18,26 Z" id="Path" fill="#F9EAB0"/>
            <path d="M58,29 L58,37 L12,37 L12,32 L43,32 C44.6568542,32 46,30.6568542 46,29 L58,29 Z" id="Path" fill="#547580"/>
        </g>
    </g>
</svg>
  `;
};

export const bankIcon = (color: any) => {
  return `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.63 2.17999C11.7392 2.10605 11.8681 2.06653 12 2.06653C12.1319 2.06653 12.2608 2.10605 12.37 2.17999C13.95 3.27999 20.15 7.53999 20.15 7.53999H3.84999C3.84999 7.53999 10.05 3.27999 11.63 2.17999Z" fill="#F7BF75"/>
<path d="M12.37 2.17999C12.2608 2.10605 12.1319 2.06653 12 2.06653C11.8681 2.06653 11.7392 2.10605 11.63 2.17999L10.69 2.82999L17.78 7.71999H20.41C20.41 7.71999 14 3.27999 12.37 2.17999Z" fill="#F1734D"/>
<path d="M17.78 9.83997H6.14999V19.36H17.78V9.83997Z" fill="#F1734D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.57 15.2V9.83997C13.57 9.70736 13.6227 9.58018 13.7164 9.48641C13.8102 9.39264 13.9374 9.33997 14.07 9.33997C14.2018 9.34253 14.3275 9.39603 14.4207 9.48925C14.5139 9.58246 14.5674 9.70816 14.57 9.83997V19.37C14.5674 19.5018 14.5139 19.6275 14.4207 19.7207C14.3275 19.8139 14.2018 19.8674 14.07 19.87C13.9374 19.87 13.8102 19.8173 13.7164 19.7235C13.6227 19.6298 13.57 19.5026 13.57 19.37V16.2H10.43V19.37C10.43 19.5026 10.3773 19.6298 10.2835 19.7235C10.1898 19.8173 10.0626 19.87 9.92999 19.87C9.79738 19.87 9.67021 19.8173 9.57644 19.7235C9.48267 19.6298 9.42999 19.5026 9.42999 19.37V9.83997C9.42999 9.70736 9.48267 9.58018 9.57644 9.48641C9.67021 9.39264 9.79738 9.33997 9.92999 9.33997C10.0626 9.33997 10.1898 9.39264 10.2835 9.48641C10.3773 9.58018 10.43 9.70736 10.43 9.83997V15.2H13.57Z" fill="#EAE2F9"/>
<path d="M20.9 19.37H3.09C2.83042 19.37 2.62 19.5804 2.62 19.84V21.46C2.62 21.7196 2.83042 21.93 3.09 21.93H20.9C21.1596 21.93 21.37 21.7196 21.37 21.46V19.84C21.37 19.5804 21.1596 19.37 20.9 19.37Z" fill="#F7BF75"/>
<path d="M7.47999 9.83997H3.84999V19.36H7.47999V9.83997Z" fill="#FFEABB"/>
<path d="M20.16 9.83997H16.53V19.36H20.16V9.83997Z" fill="#FFEABB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.13 7.99999C21.1313 7.94137 21.1209 7.88308 21.0994 7.82853C21.0779 7.77399 21.0457 7.7243 21.0047 7.68238C20.9637 7.64045 20.9148 7.60715 20.8607 7.58441C20.8067 7.56168 20.7486 7.54997 20.69 7.54999H3.30999C3.19531 7.54995 3.08475 7.59274 2.99999 7.66999C2.95661 7.71296 2.92265 7.76449 2.90026 7.82131C2.87788 7.87812 2.86757 7.93897 2.86999 7.99999V9.39999C2.86787 9.458 2.87839 9.51577 2.90084 9.56931C2.92329 9.62284 2.95712 9.67084 2.99999 9.70999C3.03992 9.75184 3.08807 9.78498 3.14142 9.80735C3.19476 9.82972 3.25215 9.84083 3.30999 9.83999H20.69C20.8067 9.83999 20.9186 9.79363 21.0011 9.71111C21.0836 9.6286 21.13 9.51668 21.13 9.39999V7.99999Z" fill="#F94060"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.77 19.37H20.15V9.83997H18.77V19.37ZM6.09 19.37H7.47V9.83997H6.09V19.37Z" fill="#F7BF75"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.38 19.83C21.3774 19.7071 21.3267 19.5901 21.2388 19.5041C21.151 19.4181 21.0329 19.37 20.91 19.37H18.76V21.93H20.91C21.0346 21.93 21.1542 21.8805 21.2423 21.7923C21.3305 21.7042 21.38 21.5846 21.38 21.46V19.83Z" fill="#F1734D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.13 7.99999C21.13 7.88235 21.084 7.76938 21.0018 7.68527C20.9195 7.60116 20.8076 7.5526 20.69 7.54999H16.83V9.84999H20.69C20.8067 9.84999 20.9186 9.80363 21.0011 9.72111C21.0836 9.6386 21.13 9.52668 21.13 9.40999V7.99999Z" fill="#D62657"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.53 12.73H20.15C20.2826 12.73 20.4098 12.6773 20.5036 12.5835C20.5973 12.4898 20.65 12.3626 20.65 12.23C20.65 12.0974 20.5973 11.9702 20.5036 11.8764C20.4098 11.7827 20.2826 11.73 20.15 11.73H16.53C16.3974 11.73 16.2702 11.7827 16.1764 11.8764C16.0827 11.9702 16.03 12.0974 16.03 12.23C16.03 12.3626 16.0827 12.4898 16.1764 12.5835C16.2702 12.6773 16.3974 12.73 16.53 12.73Z" fill="#F7BF75"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.53 15.11H20.15C20.2826 15.11 20.4098 15.0573 20.5036 14.9635C20.5973 14.8698 20.65 14.7426 20.65 14.61C20.65 14.4774 20.5973 14.3502 20.5036 14.2564C20.4098 14.1627 20.2826 14.11 20.15 14.11H16.53C16.3974 14.11 16.2702 14.1627 16.1764 14.2564C16.0827 14.3502 16.03 14.4774 16.03 14.61C16.03 14.7426 16.0827 14.8698 16.1764 14.9635C16.2702 15.0573 16.3974 15.11 16.53 15.11Z" fill="#F7BF75"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.53 17.49H20.15C20.2826 17.49 20.4098 17.4373 20.5036 17.3435C20.5973 17.2498 20.65 17.1226 20.65 16.99C20.65 16.8574 20.5973 16.7302 20.5036 16.6364C20.4098 16.5427 20.2826 16.49 20.15 16.49H16.53C16.3974 16.49 16.2702 16.5427 16.1764 16.6364C16.0827 16.7302 16.03 16.8574 16.03 16.99C16.03 17.1226 16.0827 17.2498 16.1764 17.3435C16.2702 17.4373 16.3974 17.49 16.53 17.49Z" fill="#F7BF75"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.84999 12.73H7.46999C7.6026 12.73 7.72978 12.6773 7.82354 12.5835C7.91731 12.4898 7.96999 12.3626 7.96999 12.23C7.96999 12.0974 7.91731 11.9702 7.82354 11.8764C7.72978 11.7827 7.6026 11.73 7.46999 11.73H3.84999C3.71738 11.73 3.59021 11.7827 3.49644 11.8764C3.40267 11.9702 3.34999 12.0974 3.34999 12.23C3.34999 12.3626 3.40267 12.4898 3.49644 12.5835C3.59021 12.6773 3.71738 12.73 3.84999 12.73Z" fill="#F7BF75"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.84999 15.11H7.46999C7.6026 15.11 7.72978 15.0573 7.82354 14.9635C7.91731 14.8698 7.96999 14.7426 7.96999 14.61C7.96999 14.4774 7.91731 14.3502 7.82354 14.2564C7.72978 14.1627 7.6026 14.11 7.46999 14.11H3.84999C3.71738 14.11 3.59021 14.1627 3.49644 14.2564C3.40267 14.3502 3.34999 14.4774 3.34999 14.61C3.34999 14.7426 3.40267 14.8698 3.49644 14.9635C3.59021 15.0573 3.71738 15.11 3.84999 15.11Z" fill="#F7BF75"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.84999 17.49H7.46999C7.5373 17.4941 7.60473 17.4845 7.66823 17.4618C7.73173 17.4391 7.78999 17.4038 7.8395 17.358C7.88901 17.3123 7.92875 17.257 7.95633 17.1954C7.98391 17.1339 7.99876 17.0674 7.99999 17C7.99999 16.8674 7.94731 16.7402 7.85354 16.6464C7.75978 16.5527 7.6326 16.5 7.49999 16.5H3.84999C3.71738 16.5 3.59021 16.5527 3.49644 16.6464C3.40267 16.7402 3.34999 16.8674 3.34999 17C3.35261 17.1309 3.40644 17.2555 3.49993 17.3471C3.59341 17.4387 3.7191 17.49 3.84999 17.49Z" fill="#F7BF75"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.32 6.17999H12.68C12.8126 6.17999 12.9398 6.12731 13.0335 6.03355C13.1273 5.93978 13.18 5.8126 13.18 5.67999C13.18 5.54738 13.1273 5.42021 13.0335 5.32644C12.9398 5.23267 12.8126 5.17999 12.68 5.17999H11.32C11.1874 5.17999 11.0602 5.23267 10.9664 5.32644C10.8727 5.42021 10.82 5.54738 10.82 5.67999C10.82 5.8126 10.8727 5.93978 10.9664 6.03355C11.0602 6.12731 11.1874 6.17999 11.32 6.17999Z" fill="#F94060"/>
</svg>
  `;
};
