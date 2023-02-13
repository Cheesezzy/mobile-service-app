import colors from "../../src/config/colors";

export const homeIcon = (route: any, name: string) => {
  if (route === name) {
    return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.04 6.82L14.28 2.79C12.71 1.69 10.3 1.75 8.78999 2.92L3.77999 6.83C2.77999 7.61 1.98999 9.21 1.98999 10.47V17.37C1.98999 19.92 4.05999 22 6.60999 22H17.39C19.94 22 22.01 19.93 22.01 17.38V10.6C22.01 9.25 21.14 7.59 20.04 6.82ZM12.75 18C12.75 18.41 12.41 18.75 12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18Z" fill="#2776EA"/>
  </svg>`;
  }
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.79 22.75H6.21C3.47 22.75 1.25 20.52 1.25 17.78V10.37C1.25 9.00997 2.09 7.29997 3.17 6.45997L8.56 2.25997C10.18 0.999974 12.77 0.939974 14.45 2.11997L20.63 6.44997C21.82 7.27997 22.75 9.05997 22.75 10.51V17.79C22.75 20.52 20.53 22.75 17.79 22.75ZM9.48 3.43997L4.09 7.63997C3.38 8.19997 2.75 9.46997 2.75 10.37V17.78C2.75 19.69 4.3 21.25 6.21 21.25H17.79C19.7 21.25 21.25 19.7 21.25 17.79V10.51C21.25 9.54997 20.56 8.21997 19.77 7.67997L13.59 3.34997C12.45 2.54997 10.57 2.58997 9.48 3.43997Z" fill="#848C97"/>
    <path d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18C12.75 18.41 12.41 18.75 12 18.75Z" fill="#848C97"/>
    </svg>    
    `;
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
    return `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.8565 6H7.4565C7.1965 6 6.9465 6.01 6.7065 6.04C4.0165 6.27 2.6665 7.86 2.6665 10.79V14.79C2.6665 18.79 4.2665 19.58 7.4565 19.58H7.8565C8.0765 19.58 8.3665 19.73 8.4965 19.9L9.6965 21.5C10.2265 22.21 11.0865 22.21 11.6165 21.5L12.8165 19.9C12.9665 19.7 13.2065 19.58 13.4565 19.58H13.8565C16.7865 19.58 18.3765 18.24 18.6065 15.54C18.6365 15.3 18.6465 15.05 18.6465 14.79V10.79C18.6465 7.6 17.0465 6 13.8565 6ZM7.1665 14C6.6065 14 6.1665 13.55 6.1665 13C6.1665 12.45 6.6165 12 7.1665 12C7.7165 12 8.1665 12.45 8.1665 13C8.1665 13.55 7.7165 14 7.1665 14ZM10.6565 14C10.0965 14 9.6565 13.55 9.6565 13C9.6565 12.45 10.1065 12 10.6565 12C11.2065 12 11.6565 12.45 11.6565 13C11.6565 13.55 11.2165 14 10.6565 14ZM14.1565 14C13.5965 14 13.1565 13.55 13.1565 13C13.1565 12.45 13.6065 12 14.1565 12C14.7065 12 15.1565 12.45 15.1565 13C15.1565 13.55 14.7065 14 14.1565 14Z" fill="#2776EA"/>
  <path d="M22.6463 6.79V10.79C22.6463 12.79 22.0263 14.15 20.7863 14.9C20.4863 15.08 20.1363 14.84 20.1363 14.49L20.1463 10.79C20.1463 6.79 17.8563 4.5 13.8563 4.5L7.76626 4.51C7.41626 4.51 7.17626 4.16 7.35626 3.86C8.10626 2.62 9.46626 2 11.4563 2H17.8563C21.0463 2 22.6463 3.6 22.6463 6.79Z" fill="#2776EA"/>
  </svg>
  `;
  }
  return `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.6565 22.78C10.0565 22.78 9.4865 22.48 9.0965 21.95L7.89651 20.35C7.89651 20.36 7.84651 20.33 7.82651 20.33H7.45651C4.03651 20.33 1.9165 19.4 1.9165 14.79V10.79C1.9165 6.58001 4.48651 5.48001 6.64651 5.29001C6.88651 5.26001 7.16651 5.25 7.45651 5.25H13.8565C17.4765 5.25 19.3965 7.17001 19.3965 10.79V14.79C19.3965 15.08 19.3865 15.36 19.3465 15.63C19.1665 17.76 18.0665 20.33 13.8565 20.33H13.4565L12.2165 21.95C11.8265 22.48 11.2565 22.78 10.6565 22.78ZM7.45651 6.75C7.22651 6.75 7.00651 6.76 6.79651 6.78C4.47651 6.98 3.4165 8.25001 3.4165 10.79V14.79C3.4165 18.22 4.47651 18.83 7.45651 18.83H7.85651C8.30651 18.83 8.8165 19.08 9.0965 19.44L10.2965 21.05C10.5165 21.35 10.7965 21.35 11.0165 21.05L12.2165 19.45C12.5065 19.06 12.9665 18.83 13.4565 18.83H13.8565C16.3965 18.83 17.6665 17.76 17.8565 15.48C17.8865 15.24 17.8965 15.02 17.8965 14.79V10.79C17.8965 8.00001 16.6465 6.75 13.8565 6.75H7.45651Z" fill="#848C97"/>
    <path d="M10.6567 14.1904C10.0967 14.1904 9.65674 13.7404 9.65674 13.1904C9.65674 12.6404 10.1067 12.1904 10.6567 12.1904C11.2067 12.1904 11.6567 12.6404 11.6567 13.1904C11.6567 13.7404 11.2167 14.1904 10.6567 14.1904Z" fill="#848C97"/>
    <path d="M13.8564 14.1904C13.2964 14.1904 12.8564 13.7404 12.8564 13.1904C12.8564 12.6404 13.3064 12.1904 13.8564 12.1904C14.4064 12.1904 14.8564 12.6404 14.8564 13.1904C14.8564 13.7404 14.4064 14.1904 13.8564 14.1904Z" fill="#848C97"/>
    <path d="M7.46631 14.1904C6.90631 14.1904 6.46631 13.7404 6.46631 13.1904C6.46631 12.6404 6.91631 12.1904 7.46631 12.1904C8.01631 12.1904 8.46631 12.6404 8.46631 13.1904C8.46631 13.7404 8.01631 14.1904 7.46631 14.1904Z" fill="#848C97"/>
    <path d="M18.6066 16.29C18.4066 16.29 18.2066 16.21 18.0666 16.06C17.9066 15.9 17.8366 15.67 17.8666 15.45C17.8966 15.24 17.9066 15.02 17.9066 14.79V10.79C17.9066 8.00001 16.6566 6.75 13.8666 6.75H7.46662C7.23662 6.75 7.01665 6.76 6.80665 6.78C6.58665 6.81 6.35664 6.72999 6.19664 6.57999C6.03664 6.41999 5.94663 6.20001 5.96663 5.98001C6.14663 3.82001 7.25663 1.25 11.4666 1.25H17.8666C21.4866 1.25 23.4066 3.17001 23.4066 6.79001V10.79C23.4066 15 20.8366 16.1 18.6766 16.29C18.6466 16.29 18.6266 16.29 18.6066 16.29ZM7.58665 5.25H13.8566C17.4766 5.25 19.3966 7.17001 19.3966 10.79V14.66C21.0966 14.24 21.8966 12.99 21.8966 10.79V6.79001C21.8966 4.00001 20.6466 2.75 17.8566 2.75H11.4566C9.25665 2.75 8.01665 3.55 7.58665 5.25Z" fill="#848C97"/>
    </svg>    
    `;
};

export const notifIcon = () => {
  return `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0201 20.53C9.69011 20.53 7.36011 20.16 5.15011 19.42C4.31011 19.13 3.67011 18.54 3.39011 17.77C3.10011 17 3.20011 16.15 3.66011 15.39L4.81011 13.48C5.05011 13.08 5.27011 12.28 5.27011 11.81V8.92C5.27011 5.2 8.30011 2.17 12.0201 2.17C15.7401 2.17 18.7701 5.2 18.7701 8.92V11.81C18.7701 12.27 18.9901 13.08 19.2301 13.49L20.3701 15.39C20.8001 16.11 20.8801 16.98 20.5901 17.77C20.3001 18.56 19.6701 19.16 18.8801 19.42C16.6801 20.16 14.3501 20.53 12.0201 20.53ZM12.0201 3.67C9.13011 3.67 6.77011 6.02 6.77011 8.92V11.81C6.77011 12.54 6.47011 13.62 6.10011 14.25L4.95011 16.16C4.73011 16.53 4.67011 16.92 4.80011 17.25C4.92011 17.59 5.22011 17.85 5.63011 17.99C9.81011 19.39 14.2401 19.39 18.4201 17.99C18.7801 17.87 19.0601 17.6 19.1901 17.24C19.3201 16.88 19.2901 16.49 19.0901 16.16L17.9401 14.25C17.5601 13.6 17.2701 12.53 17.2701 11.8V8.92C17.2701 6.02 14.9201 3.67 12.0201 3.67Z" fill="#08182F"/>
<path d="M13.8801 3.94C13.8101 3.94 13.7401 3.93 13.6701 3.91C13.3801 3.83 13.1001 3.77 12.8301 3.73C11.9801 3.62 11.1601 3.68 10.3901 3.91C10.1101 4 9.81011 3.91 9.62011 3.7C9.43011 3.49 9.37011 3.19 9.48011 2.92C9.89011 1.87 10.8901 1.18 12.0301 1.18C13.1701 1.18 14.1701 1.86 14.5801 2.92C14.6801 3.19 14.6301 3.49 14.4401 3.7C14.2901 3.86 14.0801 3.94 13.8801 3.94Z" fill="#08182F"/>
<path d="M12.02 22.81C11.03 22.81 10.07 22.41 9.37002 21.71C8.67002 21.01 8.27002 20.05 8.27002 19.06H9.77002C9.77002 19.65 10.01 20.23 10.43 20.65C10.85 21.07 11.43 21.31 12.02 21.31C13.26 21.31 14.27 20.3 14.27 19.06H15.77C15.77 21.13 14.09 22.81 12.02 22.81Z" fill="#08182F"/>
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
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke=${color} stroke-width="0.2" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.56994 18.82C9.37994 18.82 9.18994 18.75 9.03994 18.6L2.96994 12.53C2.67994 12.24 2.67994 11.76 2.96994 11.47L9.03994 5.4C9.32994 5.11 9.80994 5.11 10.0999 5.4C10.3899 5.69 10.3899 6.17 10.0999 6.46L4.55994 12L10.0999 17.54C10.3899 17.83 10.3899 18.31 10.0999 18.6C9.95994 18.75 9.75994 18.82 9.56994 18.82Z" fill=${color}/>
  <path d="M20.4999 12.75H3.66992C3.25992 12.75 2.91992 12.41 2.91992 12C2.91992 11.59 3.25992 11.25 3.66992 11.25H20.4999C20.9099 11.25 21.2499 11.59 21.2499 12C21.2499 12.41 20.9099 12.75 20.4999 12.75Z" fill=${color}/>
  </svg>
  `;
};

export const searchIcon = (color: any = colors.greyMain) => {
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
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.40995 21.7501C4.28995 21.7501 3.57995 21.3701 3.12995 20.9201C2.24995 20.0401 1.62995 18.1701 3.60995 14.2001L4.47995 12.4701C4.58995 12.2401 4.58995 11.7601 4.47995 11.5301L3.60995 9.80014C1.61995 5.83014 2.24995 3.95014 3.12995 3.08014C3.99995 2.20014 5.87995 1.57014 9.83995 3.56014L18.3999 7.84014C20.5299 8.90014 21.6999 10.3801 21.6999 12.0001C21.6999 13.6201 20.5299 15.1001 18.4099 16.1601L9.84995 20.4401C7.90995 21.4101 6.46995 21.7501 5.40995 21.7501ZM5.40995 3.75014C4.86995 3.75014 4.44995 3.88014 4.18995 4.14014C3.45995 4.86014 3.74995 6.73014 4.94995 9.12014L5.81995 10.8601C6.13995 11.5101 6.13995 12.4901 5.81995 13.1401L4.94995 14.8701C3.74995 17.2701 3.45995 19.1301 4.18995 19.8501C4.90995 20.5801 6.77995 20.2901 9.17995 19.0901L17.7399 14.8101C19.3099 14.0301 20.1999 13.0001 20.1999 11.9901C20.1999 10.9801 19.2999 9.95014 17.7299 9.17014L9.16995 4.90014C7.64995 4.14014 6.33995 3.75014 5.40995 3.75014Z" fill="#292D32"/>
  <path d="M10.8395 12.75H5.43945C5.02945 12.75 4.68945 12.41 4.68945 12C4.68945 11.59 5.02945 11.25 5.43945 11.25H10.8395C11.2495 11.25 11.5895 11.59 11.5895 12C11.5895 12.41 11.2495 12.75 10.8395 12.75Z" fill="#292D32"/>
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

export const profileIcon = (route: string, name: string) => {
  if (route === name) {
    return `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.6665 12C15.4279 12 17.6665 9.76142 17.6665 7C17.6665 4.23858 15.4279 2 12.6665 2C9.90508 2 7.6665 4.23858 7.6665 7C7.6665 9.76142 9.90508 12 12.6665 12Z" fill="#2776EA"/>
    <path d="M12.6667 14.5C7.65666 14.5 3.57666 17.86 3.57666 22C3.57666 22.28 3.79666 22.5 4.07666 22.5H21.2567C21.5367 22.5 21.7567 22.28 21.7567 22C21.7567 17.86 17.6767 14.5 12.6667 14.5Z" fill="#2776EA"/>
    </svg>        
    `;
  }
  return `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3335 12.75C9.1635 12.75 6.5835 10.17 6.5835 7C6.5835 3.83 9.1635 1.25 12.3335 1.25C15.5035 1.25 18.0835 3.83 18.0835 7C18.0835 10.17 15.5035 12.75 12.3335 12.75ZM12.3335 2.75C9.9935 2.75 8.0835 4.66 8.0835 7C8.0835 9.34 9.9935 11.25 12.3335 11.25C14.6735 11.25 16.5835 9.34 16.5835 7C16.5835 4.66 14.6735 2.75 12.3335 2.75Z" fill="#848C97"/>
  <path d="M20.9236 22.75C20.5136 22.75 20.1736 22.41 20.1736 22C20.1736 18.55 16.6536 15.75 12.3336 15.75C8.01365 15.75 4.49365 18.55 4.49365 22C4.49365 22.41 4.15365 22.75 3.74365 22.75C3.33365 22.75 2.99365 22.41 2.99365 22C2.99365 17.73 7.18365 14.25 12.3336 14.25C17.4836 14.25 21.6736 17.73 21.6736 22C21.6736 22.41 21.3336 22.75 20.9236 22.75Z" fill="#848C97"/>
  </svg>  
    `;
};

export const frontIcon = () => {
  return `
  <svg width="24" height="24" viewBox="0 0 24 24" fill=${colors.greyMain} xmlns="http://www.w3.org/2000/svg">
<path d="M8.90961 20.67C8.71961 20.67 8.52961 20.6 8.37961 20.45C8.08961 20.16 8.08961 19.68 8.37961 19.39L14.8996 12.87C15.3796 12.39 15.3796 11.61 14.8996 11.13L8.37961 4.61002C8.08961 4.32002 8.08961 3.84002 8.37961 3.55002C8.66961 3.26002 9.14961 3.26002 9.43961 3.55002L15.9596 10.07C16.4696 10.58 16.7596 11.27 16.7596 12C16.7596 12.73 16.4796 13.42 15.9596 13.93L9.43961 20.45C9.28961 20.59 9.09961 20.67 8.90961 20.67Z" fill="#292D32"/>
</svg>
  `;
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
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.46992 15.2799C9.27992 15.2799 9.08992 15.2099 8.93992 15.0599C8.11992 14.2399 7.66992 13.1499 7.66992 11.9999C7.66992 9.60992 9.60992 7.66992 11.9999 7.66992C13.1499 7.66992 14.2399 8.11992 15.0599 8.93992C15.1999 9.07992 15.2799 9.26992 15.2799 9.46992C15.2799 9.66992 15.1999 9.85992 15.0599 9.99992L9.99992 15.0599C9.84992 15.2099 9.65992 15.2799 9.46992 15.2799ZM11.9999 9.16992C10.4399 9.16992 9.16992 10.4399 9.16992 11.9999C9.16992 12.4999 9.29992 12.9799 9.53992 13.3999L13.3999 9.53992C12.9799 9.29992 12.4999 9.16992 11.9999 9.16992Z" fill=${color}/>
<path d="M5.59984 18.5105C5.42984 18.5105 5.24984 18.4505 5.10984 18.3305C4.03984 17.4205 3.07984 16.3005 2.25984 15.0005C1.19984 13.3505 1.19984 10.6605 2.25984 9.00047C4.69984 5.18047 8.24984 2.98047 11.9998 2.98047C14.1998 2.98047 16.3698 3.74047 18.2698 5.17047C18.5998 5.42047 18.6698 5.89047 18.4198 6.22047C18.1698 6.55047 17.6998 6.62047 17.3698 6.37047C15.7298 5.13047 13.8698 4.48047 11.9998 4.48047C8.76984 4.48047 5.67984 6.42047 3.51984 9.81047C2.76984 10.9805 2.76984 13.0205 3.51984 14.1905C4.26984 15.3605 5.12984 16.3705 6.07984 17.1905C6.38984 17.4605 6.42984 17.9305 6.15984 18.2505C6.01984 18.4205 5.80984 18.5105 5.59984 18.5105Z" fill=${color}/>
<path d="M12.0006 21.0205C10.6706 21.0205 9.37055 20.7505 8.12055 20.2205C7.74055 20.0605 7.56055 19.6205 7.72055 19.2405C7.88055 18.8605 8.32055 18.6805 8.70055 18.8405C9.76055 19.2905 10.8706 19.5205 11.9906 19.5205C15.2206 19.5205 18.3106 17.5805 20.4706 14.1905C21.2206 13.0205 21.2206 10.9805 20.4706 9.81049C20.1606 9.32049 19.8206 8.85049 19.4606 8.41049C19.2006 8.09049 19.2506 7.62049 19.5706 7.35049C19.8906 7.09049 20.3606 7.13049 20.6306 7.46049C21.0206 7.94049 21.4006 8.46049 21.7406 9.00049C22.8006 10.6505 22.8006 13.3405 21.7406 15.0005C19.3006 18.8205 15.7506 21.0205 12.0006 21.0205Z" fill=${color}/>
<path d="M12.6896 16.2703C12.3396 16.2703 12.0196 16.0203 11.9496 15.6603C11.8696 15.2503 12.1396 14.8603 12.5496 14.7903C13.6496 14.5903 14.5696 13.6703 14.7696 12.5703C14.8496 12.1603 15.2396 11.9003 15.6496 11.9703C16.0596 12.0503 16.3296 12.4403 16.2496 12.8503C15.9296 14.5803 14.5496 15.9503 12.8296 16.2703C12.7796 16.2603 12.7396 16.2703 12.6896 16.2703Z" fill=${color}/>
<path d="M1.99945 22.7497C1.80945 22.7497 1.61945 22.6797 1.46945 22.5297C1.17945 22.2397 1.17945 21.7597 1.46945 21.4697L8.93945 13.9997C9.22945 13.7097 9.70945 13.7097 9.99945 13.9997C10.2895 14.2897 10.2895 14.7697 9.99945 15.0597L2.52945 22.5297C2.37945 22.6797 2.18945 22.7497 1.99945 22.7497Z" fill=${color}/>
<path d="M14.5307 10.2204C14.3407 10.2204 14.1507 10.1504 14.0007 10.0004C13.7107 9.71043 13.7107 9.23043 14.0007 8.94043L21.4707 1.47043C21.7607 1.18043 22.2407 1.18043 22.5307 1.47043C22.8207 1.76043 22.8207 2.24043 22.5307 2.53043L15.0607 10.0004C14.9107 10.1504 14.7207 10.2204 14.5307 10.2204Z" fill=${color}/>
</svg>
  `;
};

export const showPassIcon = (color = colors.black) => {
  return `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9999 16.3299C9.60992 16.3299 7.66992 14.3899 7.66992 11.9999C7.66992 9.60992 9.60992 7.66992 11.9999 7.66992C14.3899 7.66992 16.3299 9.60992 16.3299 11.9999C16.3299 14.3899 14.3899 16.3299 11.9999 16.3299ZM11.9999 9.16992C10.4399 9.16992 9.16992 10.4399 9.16992 11.9999C9.16992 13.5599 10.4399 14.8299 11.9999 14.8299C13.5599 14.8299 14.8299 13.5599 14.8299 11.9999C14.8299 10.4399 13.5599 9.16992 11.9999 9.16992Z" fill=${color}/>
<path d="M12.0001 21.0205C8.24008 21.0205 4.69008 18.8205 2.25008 15.0005C1.19008 13.3505 1.19008 10.6605 2.25008 9.00047C4.70008 5.18047 8.25008 2.98047 12.0001 2.98047C15.7501 2.98047 19.3001 5.18047 21.7401 9.00047C22.8001 10.6505 22.8001 13.3405 21.7401 15.0005C19.3001 18.8205 15.7501 21.0205 12.0001 21.0205ZM12.0001 4.48047C8.77008 4.48047 5.68008 6.42047 3.52008 9.81047C2.77008 10.9805 2.77008 13.0205 3.52008 14.1905C5.68008 17.5805 8.77008 19.5205 12.0001 19.5205C15.2301 19.5205 18.3201 17.5805 20.4801 14.1905C21.2301 13.0205 21.2301 10.9805 20.4801 9.81047C18.3201 6.42047 15.2301 4.48047 12.0001 4.48047Z" fill=${color}/>
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
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="#292D32"/>
<path d="M9 10.75C7.48 10.75 6.25 9.52 6.25 8C6.25 6.48 7.48 5.25 9 5.25C10.52 5.25 11.75 6.48 11.75 8C11.75 9.52 10.52 10.75 9 10.75ZM9 6.75C8.31 6.75 7.75 7.31 7.75 8C7.75 8.69 8.31 9.25 9 9.25C9.69 9.25 10.25 8.69 10.25 8C10.25 7.31 9.69 6.75 9 6.75Z" fill="#292D32"/>
<path d="M2.67075 19.7001C2.43075 19.7001 2.19075 19.5801 2.05075 19.3701C1.82075 19.0301 1.91075 18.5601 2.26075 18.3301L7.19075 15.0201C8.27075 14.2901 9.76075 14.3801 10.7407 15.2101L11.0707 15.5001C11.5707 15.9301 12.4207 15.9301 12.9107 15.5001L17.0707 11.9301C18.1307 11.0201 19.8007 11.0201 20.8707 11.9301L22.5007 13.3301C22.8107 13.6001 22.8507 14.0701 22.5807 14.3901C22.3107 14.7001 21.8407 14.7401 21.5207 14.4701L19.8907 13.0701C19.3907 12.6401 18.5407 12.6401 18.0407 13.0701L13.8807 16.6401C12.8207 17.5501 11.1507 17.5501 10.0807 16.6401L9.75075 16.3501C9.29075 15.9601 8.53075 15.9201 8.02075 16.2701L3.09075 19.5801C2.96075 19.6601 2.81075 19.7001 2.67075 19.7001Z" fill="#292D32"/>
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

export const moreIcon = (route: string, name: string) => {
  if (route === name) {
    return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM8 13C7.44 13 7 12.55 7 12C7 11.45 7.45 11 8 11C8.55 11 9 11.45 9 12C9 12.55 8.56 13 8 13ZM12 13C11.44 13 11 12.55 11 12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12C13 12.55 12.56 13 12 13ZM16 13C15.44 13 15 12.55 15 12C15 11.45 15.45 11 16 11C16.55 11 17 11.45 17 12C17 12.55 16.56 13 16 13Z" fill="#2776EA"/>
  </svg>     
    `;
  }
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#848C97"/>
    <path d="M12 13C11.44 13 11 12.55 11 12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12C13 12.55 12.56 13 12 13Z" fill="#848C97"/>
    <path d="M16 13C15.44 13 15 12.55 15 12C15 11.45 15.45 11 16 11C16.55 11 17 11.45 17 12C17 12.55 16.56 13 16 13Z" fill="#848C97"/>
    <path d="M8 13C7.44 13 7 12.55 7 12C7 11.45 7.45 11 8 11C8.55 11 9 11.45 9 12C9 12.55 8.56 13 8 13Z" fill="#848C97"/>
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

export const levelIcon = () => {
  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g id="Cloud-ladder-stair-reward"><path d="M16.02,22.19a17,17,0,0,1,28.27-5.93A14.23,14.23,0,0,1,47,16a14,14,0,0,1,0,28H14a11,11,0,0,1,0-22A10.4,10.4,0,0,1,16.02,22.19Z" style="fill:#2488ff"/><path d="M39,6v7a4,4,0,0,1-4-4V6Z" style="fill:#ffc477"/><path d="M57,6V9a4,4,0,0,1-4,4V6Z" style="fill:#ffc477"/><rect x="41" y="27" width="10" height="3" style="fill:#e0e0e2"/><path d="M53,3V14a6.893,6.893,0,0,1-.7,3.04A6.985,6.985,0,0,1,48,20.71V27H44V20.7A6.984,6.984,0,0,1,39,14V3Z" style="fill:#ffda44"/><circle cx="46" cy="10" r="4" style="fill:#fff"/><path fill=${colors.black} d="M53.585,16.525A7.937,7.937,0,0,0,54,14v-.1A5.009,5.009,0,0,0,58,9V6a1,1,0,0,0-1-1H54V4h1V2H37V4h1V5H35a1,1,0,0,0-1,1V9a4.959,4.959,0,0,0,.14,1.13A17.958,17.958,0,0,0,15.393,21.084c-.062-.007-.123-.011-.185-.017-.175-.022-.341-.035-.529-.046C14.453,21.01,14.226,21,14,21a12,12,0,0,0,0,24V62h2V60H28v2h2V45H47a15,15,0,0,0,6.585-28.475ZM56,7V9a3.006,3.006,0,0,1-2,2.829V7ZM52,4V14a6,6,0,0,1-12,0V4ZM50,29H42V28h8Zm-5-3V21.931a7.281,7.281,0,0,0,2,0V26ZM36,7h2v4.829A3.006,3.006,0,0,1,36,9ZM16,48H28v4H16Zm0,10V54H28v4ZM28,46H16V45H28ZM16,36H28v4H16Zm0,6H28v1H16Zm31,1H30V32H28v2H16V32H14V43a10,10,0,0,1,0-20c.337,0,.672.022,1,.055l.153.014c.19.022.376.061.564.094.025,0,.052.009.078.015v0A9.969,9.969,0,0,1,21.687,26.6l1.537-1.28A11.968,11.968,0,0,0,17.38,21.5,16.047,16.047,0,0,1,32,12a15.781,15.781,0,0,1,3.327.365A4.989,4.989,0,0,0,38,13.9V14a8.009,8.009,0,0,0,5,7.411V26H41a1,1,0,0,0-1,1v2H38v2H54V29H52V27a1,1,0,0,0-1-1H49V21.411a8.04,8.04,0,0,0,3.719-3.084A13,13,0,0,1,47,43Z"/><path d="M46,15a5,5,0,1,0-5-5A5.006,5.006,0,0,0,46,15Zm0-8a3,3,0,1,1-3,3A3,3,0,0,1,46,7Z"/></g></svg>
  `;
};

export const lockIcon = (color = colors.black) => {
  return `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 10.75C17.59 10.75 17.25 10.41 17.25 10V8C17.25 4.85 16.36 2.75 12 2.75C7.64 2.75 6.75 4.85 6.75 8V10C6.75 10.41 6.41 10.75 6 10.75C5.59 10.75 5.25 10.41 5.25 10V8C5.25 5.1 5.95 1.25 12 1.25C18.05 1.25 18.75 5.1 18.75 8V10C18.75 10.41 18.41 10.75 18 10.75Z" fill=${color}/>
<path d="M17 22.75H7C2.59 22.75 1.25 21.41 1.25 17V15C1.25 10.59 2.59 9.25 7 9.25H17C21.41 9.25 22.75 10.59 22.75 15V17C22.75 21.41 21.41 22.75 17 22.75ZM7 10.75C3.42 10.75 2.75 11.43 2.75 15V17C2.75 20.57 3.42 21.25 7 21.25H17C20.58 21.25 21.25 20.57 21.25 17V15C21.25 11.43 20.58 10.75 17 10.75H7Z" fill=${color}/>
<path d="M8 16.9999C7.87 16.9999 7.74 16.9699 7.62 16.9199C7.49 16.8699 7.39001 16.7999 7.29001 16.7099C7.11001 16.5199 7 16.2699 7 15.9999C7 15.8699 7.02999 15.7399 7.07999 15.6199C7.12999 15.4899 7.20001 15.3899 7.29001 15.2899C7.39001 15.1999 7.49 15.1299 7.62 15.0799C7.98 14.9199 8.42999 15.0099 8.70999 15.2899C8.79999 15.3899 8.87001 15.4999 8.92001 15.6199C8.97001 15.7399 9 15.8699 9 15.9999C9 16.2599 8.88999 16.5199 8.70999 16.7099C8.51999 16.8899 8.26 16.9999 8 16.9999Z" fill=${color}/>
<path d="M12 16.9999C11.74 16.9999 11.48 16.8899 11.29 16.7099C11.11 16.5199 11 16.2699 11 15.9999C11 15.8699 11.02 15.7399 11.08 15.6199C11.13 15.4999 11.2 15.3899 11.29 15.2899C11.52 15.0599 11.87 14.9499 12.19 15.0199C12.26 15.0299 12.32 15.0499 12.38 15.0799C12.44 15.0999 12.5 15.1299 12.56 15.1699C12.61 15.1999 12.66 15.2499 12.71 15.2899C12.8 15.3899 12.87 15.4999 12.92 15.6199C12.97 15.7399 13 15.8699 13 15.9999C13 16.2699 12.89 16.5199 12.71 16.7099C12.66 16.7499 12.61 16.7899 12.56 16.8299C12.5 16.8699 12.44 16.8999 12.38 16.9199C12.32 16.9499 12.26 16.9699 12.19 16.9799C12.13 16.9899 12.06 16.9999 12 16.9999Z" fill=${color}/>
<path d="M16 16.9999C15.73 16.9999 15.48 16.8899 15.29 16.7099C15.2 16.6099 15.13 16.4999 15.08 16.3799C15.03 16.2599 15 16.1299 15 15.9999C15 15.7399 15.11 15.4799 15.29 15.2899C15.34 15.2499 15.39 15.2099 15.44 15.1699C15.5 15.1299 15.56 15.0999 15.62 15.0799C15.68 15.0499 15.74 15.0299 15.8 15.0199C16.13 14.9499 16.47 15.0599 16.71 15.2899C16.89 15.4799 17 15.7299 17 15.9999C17 16.1299 16.97 16.2599 16.92 16.3799C16.87 16.5099 16.8 16.6099 16.71 16.7099C16.52 16.8899 16.26 16.9999 16 16.9999Z" fill=${color}/>
</svg>
  `;
};

export const emailIcon = (color = colors.black) => {
  return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.3335 14.1667H4.66683C2.2335 14.1667 0.833496 12.7667 0.833496 10.3333V5.66667C0.833496 3.23333 2.2335 1.83333 4.66683 1.83333H11.3335C13.7668 1.83333 15.1668 3.23333 15.1668 5.66667V10.3333C15.1668 12.7667 13.7668 14.1667 11.3335 14.1667ZM4.66683 2.83333C2.76016 2.83333 1.8335 3.76 1.8335 5.66667V10.3333C1.8335 12.24 2.76016 13.1667 4.66683 13.1667H11.3335C13.2402 13.1667 14.1668 12.24 14.1668 10.3333V5.66667C14.1668 3.76 13.2402 2.83333 11.3335 2.83333H4.66683Z" fill=${color}/>
  <path d="M7.99969 8.57998C7.43969 8.57998 6.87302 8.40665 6.43969 8.05331L4.35302 6.38665C4.13969 6.21331 4.09969 5.89998 4.27302 5.68665C4.44636 5.47331 4.75969 5.43332 4.97303 5.60665L7.05969 7.27332C7.56635 7.67998 8.42635 7.67998 8.93302 7.27332L11.0197 5.60665C11.233 5.43332 11.553 5.46665 11.7197 5.68665C11.893 5.89998 11.8597 6.21998 11.6397 6.38665L9.55302 8.05331C9.12636 8.40665 8.55969 8.57998 7.99969 8.57998Z" fill=${color}/>
  </svg>
  `;
};

export const receiveMoneyIcon = () => {
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.05 16.25H11.17C9.84001 16.25 8.75 15.13 8.75 13.75C8.75 13.34 9.09 13 9.5 13C9.91 13 10.25 13.34 10.25 13.75C10.25 14.3 10.66 14.75 11.17 14.75H13.05C13.44 14.75 13.75 14.4 13.75 13.97C13.75 13.43 13.6 13.35 13.26 13.23L10.25 12.18C9.61 11.96 8.75 11.49 8.75 10.02C8.75 8.76999 9.74001 7.73999 10.95 7.73999H12.83C14.16 7.73999 15.25 8.85999 15.25 10.24C15.25 10.65 14.91 10.99 14.5 10.99C14.09 10.99 13.75 10.65 13.75 10.24C13.75 9.68999 13.34 9.23999 12.83 9.23999H10.95C10.56 9.23999 10.25 9.58999 10.25 10.02C10.25 10.56 10.4 10.64 10.74 10.76L13.75 11.81C14.39 12.03 15.25 12.5 15.25 13.97C15.25 15.23 14.26 16.25 13.05 16.25Z" fill="#2776EA"/>
  <path d="M12 17.25C11.59 17.25 11.25 16.91 11.25 16.5V7.5C11.25 7.09 11.59 6.75 12 6.75C12.41 6.75 12.75 7.09 12.75 7.5V16.5C12.75 16.91 12.41 17.25 12 17.25Z" fill="#2776EA"/>
  <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2C12.75 2.41 12.41 2.75 12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 11.59 21.59 11.25 22 11.25C22.41 11.25 22.75 11.59 22.75 12C22.75 17.93 17.93 22.75 12 22.75Z" fill="#292D32"/>
  <path d="M21 7.75H17C16.59 7.75 16.25 7.41 16.25 7V3C16.25 2.59 16.59 2.25 17 2.25C17.41 2.25 17.75 2.59 17.75 3V6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z" fill="#2776EA"/>
  <path d="M16.9999 7.74994C16.8099 7.74994 16.6199 7.67994 16.4699 7.52994C16.1799 7.23994 16.1799 6.75994 16.4699 6.46994L21.4699 1.46994C21.7599 1.17994 22.2399 1.17994 22.5299 1.46994C22.8199 1.75994 22.8199 2.23994 22.5299 2.52994L17.5299 7.52994C17.3799 7.67994 17.1899 7.74994 16.9999 7.74994Z" fill="#2776EA"/>
  </svg>
  `;
};

export const withdrawMoneyIcon = () => {
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.05 16.25H11.17C9.84001 16.25 8.75 15.13 8.75 13.75C8.75 13.34 9.09 13 9.5 13C9.91 13 10.25 13.34 10.25 13.75C10.25 14.3 10.66 14.75 11.17 14.75H13.05C13.44 14.75 13.75 14.4 13.75 13.97C13.75 13.43 13.6 13.35 13.26 13.23L10.25 12.18C9.61 11.95 8.75 11.49 8.75 10.02C8.75 8.76999 9.74001 7.73999 10.95 7.73999H12.83C14.16 7.73999 15.25 8.85999 15.25 10.24C15.25 10.65 14.91 10.99 14.5 10.99C14.09 10.99 13.75 10.65 13.75 10.24C13.75 9.68999 13.34 9.23999 12.83 9.23999H10.95C10.56 9.23999 10.25 9.58999 10.25 10.02C10.25 10.56 10.4 10.64 10.74 10.76L13.75 11.81C14.39 12.04 15.25 12.5 15.25 13.97C15.25 15.23 14.26 16.25 13.05 16.25Z" fill="#2776EA"/>
  <path d="M12 17.25C11.59 17.25 11.25 16.91 11.25 16.5V7.5C11.25 7.09 11.59 6.75 12 6.75C12.41 6.75 12.75 7.09 12.75 7.5V16.5C12.75 16.91 12.41 17.25 12 17.25Z" fill="#2776EA"/>
  <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2C12.75 2.41 12.41 2.75 12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 11.59 21.59 11.25 22 11.25C22.41 11.25 22.75 11.59 22.75 12C22.75 17.93 17.93 22.75 12 22.75Z" fill="#292D32"/>
  <path d="M22 6.75C21.59 6.75 21.25 6.41 21.25 6V2.75H18C17.59 2.75 17.25 2.41 17.25 2C17.25 1.59 17.59 1.25 18 1.25H22C22.41 1.25 22.75 1.59 22.75 2V6C22.75 6.41 22.41 6.75 22 6.75Z" fill="#2776EA"/>
  <path d="M16.9999 7.74994C16.8099 7.74994 16.6199 7.67994 16.4699 7.52994C16.1799 7.23994 16.1799 6.75994 16.4699 6.46994L21.4699 1.46994C21.7599 1.17994 22.2399 1.17994 22.5299 1.46994C22.8199 1.75994 22.8199 2.23994 22.5299 2.52994L17.5299 7.52994C17.3799 7.67994 17.1899 7.74994 16.9999 7.74994Z" fill="#2776EA"/>
  </svg>
  `;
};

export const transferMoneyIcon = () => {
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#292D32"/>
  <path d="M11.9999 17.4701C10.5999 17.4701 9.19994 16.9401 8.12994 15.8701C7.84994 15.5901 7.59993 15.2801 7.36993 14.9101C7.14993 14.5601 7.25992 14.1001 7.60992 13.8801C7.95992 13.6601 8.41995 13.7701 8.63995 14.1201C8.80995 14.4001 8.98994 14.6201 9.18994 14.8201C10.7399 16.3701 13.2599 16.3701 14.8099 14.8201C15.4099 14.2201 15.79 13.4401 15.92 12.5701C15.98 12.1601 16.3599 11.8601 16.7699 11.9301C17.1799 11.9901 17.4599 12.3701 17.4099 12.7801C17.2399 13.9701 16.7099 15.0401 15.8799 15.8801C14.7999 16.9401 13.3999 17.4701 11.9999 17.4701Z" fill="#2776EA"/>
  <path d="M7.3399 12.08C7.2999 12.08 7.26991 12.08 7.22991 12.07C6.81991 12.01 6.5299 11.6299 6.5899 11.2199C6.7599 10.0299 7.2899 8.95996 8.1199 8.11996C10.2499 5.98996 13.7199 5.98996 15.8599 8.11996C16.1399 8.39996 16.3899 8.70999 16.6199 9.08999C16.8399 9.43999 16.7299 9.89996 16.3799 10.12C16.0299 10.34 15.5699 10.23 15.3499 9.87997C15.1799 9.60997 14.9999 9.37996 14.7999 9.17996C13.2499 7.62996 10.7299 7.62996 9.17989 9.17996C8.57989 9.77996 8.19991 10.56 8.06991 11.43C8.02991 11.81 7.7099 12.08 7.3399 12.08Z" fill="#2776EA"/>
  <path d="M7.82031 17.93C7.41031 17.93 7.07031 17.59 7.07031 17.18V14.51C7.07031 14.1 7.41031 13.76 7.82031 13.76H10.4903C10.9003 13.76 11.2403 14.1 11.2403 14.51C11.2403 14.92 10.9003 15.26 10.4903 15.26H8.57031V17.18C8.57031 17.59 8.24031 17.93 7.82031 17.93Z" fill="#2776EA"/>
  <path d="M16.1797 10.2401H13.5098C13.0998 10.2401 12.7598 9.90005 12.7598 9.49005C12.7598 9.08005 13.0998 8.74005 13.5098 8.74005H15.4297V6.82007C15.4297 6.41007 15.7697 6.07007 16.1797 6.07007C16.5897 6.07007 16.9297 6.41007 16.9297 6.82007V9.49005C16.9297 9.91005 16.5897 10.2401 16.1797 10.2401Z" fill="#2776EA"/>
  </svg>
  `;
};

export const optionIcon = (color = colors.black) => {
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="2.25" cy="2.25" r="2.25" transform="matrix(-1 0 0 1 14.5 16.5)" fill=${color} />
  <circle cx="2.25" cy="2.25" r="2.25" transform="matrix(-1 0 0 1 14.5 9.75)" fill=${color} />
  <circle cx="2.25" cy="2.25" r="2.25" transform="matrix(-1 0 0 1 14.5 3)" fill=${color} />
  </svg>
  `;
};

export const nextplaceholdIcon = () => {
  return ``;
};
