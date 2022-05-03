import { Link } from "react-router-dom";
import { AppRoute } from "routing/AppRoute.enum";

type LogoProps = {
  className?: string;
};

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Link
      className={`
        ${className} 
        logo
      `}
      to={AppRoute.Home}
    >
      <svg
        className="logo__svg"
        width="104"
        height="23"
        viewBox="0 0 104 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="logo__path"
          d="M1.616 22.368C1.136 22.4 0.768 22.336 0.512 22.176C0.256 22.016 0.128 21.768 0.128 21.432C0.128 21.176 0.208 20.968 0.368 20.808C0.528 20.664 0.784 20.576 1.136 20.544L1.808 20.496C2.432 20.464 2.896 20.272 3.2 19.92C3.52 19.568 3.68 19.008 3.68 18.24V7.224C3.68 6.84 3.792 6.552 4.016 6.36C4.256 6.152 4.552 6.048 4.904 6.048C5.256 6.048 5.544 6.152 5.768 6.36C5.992 6.552 6.104 6.84 6.104 7.224V18.096C6.104 19.44 5.792 20.456 5.168 21.144C4.544 21.832 3.576 22.224 2.264 22.32L1.616 22.368ZM4.904 3.696C4.44 3.696 4.072 3.568 3.8 3.312C3.528 3.056 3.392 2.72 3.392 2.304C3.392 1.888 3.528 1.56 3.8 1.32C4.072 1.064 4.44 0.935999 4.904 0.935999C5.352 0.935999 5.712 1.064 5.984 1.32C6.272 1.56 6.416 1.888 6.416 2.304C6.416 2.72 6.28 3.056 6.008 3.312C5.736 3.568 5.368 3.696 4.904 3.696ZM14.5805 18.168C13.4285 18.168 12.4125 17.92 11.5325 17.424C10.6685 16.928 9.9965 16.224 9.5165 15.312C9.0525 14.384 8.8205 13.312 8.8205 12.096C8.8205 10.864 9.0525 9.792 9.5165 8.88C9.9965 7.952 10.6685 7.24 11.5325 6.744C12.4125 6.248 13.4285 6 14.5805 6C15.7325 6 16.7405 6.248 17.6045 6.744C18.4845 7.24 19.1565 7.952 19.6205 8.88C20.1005 9.792 20.3405 10.864 20.3405 12.096C20.3405 13.312 20.1005 14.384 19.6205 15.312C19.1565 16.224 18.4845 16.928 17.6045 17.424C16.7405 17.92 15.7325 18.168 14.5805 18.168ZM14.5805 16.248C15.6525 16.248 16.4685 15.896 17.0285 15.192C17.6045 14.488 17.8925 13.456 17.8925 12.096C17.8925 10.752 17.6045 9.728 17.0285 9.024C16.4525 8.304 15.6365 7.944 14.5805 7.944C13.5245 7.944 12.7085 8.304 12.1325 9.024C11.5565 9.728 11.2685 10.752 11.2685 12.096C11.2685 13.456 11.5485 14.488 12.1085 15.192C12.6845 15.896 13.5085 16.248 14.5805 16.248ZM24.2634 18.12C23.9114 18.12 23.6154 18.024 23.3754 17.832C23.1514 17.64 23.0394 17.352 23.0394 16.968V7.224C23.0394 6.84 23.1514 6.552 23.3754 6.36C23.6154 6.152 23.9114 6.048 24.2634 6.048C24.6154 6.048 24.9034 6.152 25.1274 6.36C25.3514 6.552 25.4634 6.84 25.4634 7.224V16.968C25.4634 17.352 25.3514 17.64 25.1274 17.832C24.9034 18.024 24.6154 18.12 24.2634 18.12ZM24.2634 3.696C23.7994 3.696 23.4314 3.568 23.1594 3.312C22.8874 3.056 22.7514 2.72 22.7514 2.304C22.7514 1.888 22.8874 1.56 23.1594 1.32C23.4314 1.064 23.7994 0.935999 24.2634 0.935999C24.7114 0.935999 25.0714 1.064 25.3434 1.32C25.6314 1.56 25.7754 1.888 25.7754 2.304C25.7754 2.72 25.6394 3.056 25.3674 3.312C25.0954 3.568 24.7274 3.696 24.2634 3.696ZM35.1639 6C37.9639 6 39.3639 7.576 39.3639 10.728V16.968C39.3639 17.336 39.2519 17.624 39.0279 17.832C38.8199 18.024 38.5239 18.12 38.1399 18.12C37.7719 18.12 37.4759 18.016 37.2519 17.808C37.0439 17.6 36.9399 17.32 36.9399 16.968V10.848C36.9399 9.856 36.7399 9.128 36.3399 8.664C35.9559 8.2 35.3479 7.968 34.5159 7.968C33.5399 7.968 32.7559 8.272 32.1639 8.88C31.5719 9.488 31.2759 10.304 31.2759 11.328V16.968C31.2759 17.32 31.1639 17.6 30.9399 17.808C30.7319 18.016 30.4439 18.12 30.0759 18.12C29.7079 18.12 29.4119 18.016 29.1879 17.808C28.9639 17.6 28.8519 17.32 28.8519 16.968V7.2C28.8519 6.864 28.9639 6.592 29.1879 6.384C29.4279 6.16 29.7239 6.048 30.0759 6.048C30.4279 6.048 30.7079 6.152 30.9159 6.36C31.1239 6.568 31.2279 6.84 31.2279 7.176V8.16C31.6119 7.456 32.1479 6.92 32.8359 6.552C33.5239 6.184 34.2999 6 35.1639 6ZM43.856 18.12C43.424 18.12 43.056 17.976 42.752 17.688C42.464 17.4 42.32 17.032 42.32 16.584C42.32 16.136 42.464 15.768 42.752 15.48C43.056 15.176 43.424 15.024 43.856 15.024C44.288 15.024 44.648 15.176 44.936 15.48C45.224 15.768 45.368 16.136 45.368 16.584C45.368 17.032 45.224 17.4 44.936 17.688C44.648 17.976 44.288 18.12 43.856 18.12ZM53.4082 16.272C53.7602 16.304 54.0082 16.4 54.1522 16.56C54.3122 16.704 54.3922 16.912 54.3922 17.184C54.3922 17.504 54.2642 17.752 54.0082 17.928C53.7682 18.088 53.4082 18.152 52.9282 18.12L52.2802 18.072C50.9842 17.976 50.0162 17.584 49.3762 16.896C48.7362 16.192 48.4162 15.16 48.4162 13.8V8.16H46.9762C46.2722 8.16 45.9202 7.848 45.9202 7.224C45.9202 6.936 46.0082 6.712 46.1842 6.552C46.3762 6.376 46.6402 6.288 46.9762 6.288H48.4162V3.816C48.4162 3.448 48.5202 3.16 48.7282 2.952C48.9522 2.744 49.2482 2.64 49.6162 2.64C49.9842 2.64 50.2802 2.744 50.5042 2.952C50.7282 3.16 50.8402 3.448 50.8402 3.816V6.288H53.2162C53.5522 6.288 53.8082 6.376 53.9842 6.552C54.1762 6.712 54.2722 6.936 54.2722 7.224C54.2722 7.528 54.1762 7.76 53.9842 7.92C53.8082 8.08 53.5522 8.16 53.2162 8.16H50.8402V13.968C50.8402 14.72 50.9922 15.272 51.2962 15.624C51.6162 15.976 52.0962 16.176 52.7362 16.224L53.4082 16.272ZM60.2131 18.168C58.5811 18.168 57.2451 17.832 56.2051 17.16C55.9171 16.984 55.7091 16.8 55.5811 16.608C55.4691 16.416 55.4131 16.2 55.4131 15.96C55.4131 15.704 55.4851 15.488 55.6291 15.312C55.7731 15.136 55.9571 15.048 56.1811 15.048C56.3891 15.048 56.7171 15.176 57.1651 15.432C57.6451 15.688 58.1091 15.896 58.5571 16.056C59.0211 16.216 59.5971 16.296 60.2851 16.296C61.0531 16.296 61.6531 16.16 62.0851 15.888C62.5171 15.616 62.7331 15.232 62.7331 14.736C62.7331 14.416 62.6451 14.16 62.4691 13.968C62.3091 13.776 62.0211 13.608 61.6051 13.464C61.1891 13.304 60.5731 13.136 59.7571 12.96C58.3491 12.656 57.3331 12.248 56.7091 11.736C56.1011 11.208 55.7971 10.496 55.7971 9.6C55.7971 8.912 55.9971 8.296 56.3971 7.752C56.7971 7.192 57.3491 6.76 58.0531 6.456C58.7571 6.152 59.5571 6 60.4531 6C61.0931 6 61.7171 6.088 62.3251 6.264C62.9331 6.424 63.4691 6.664 63.9331 6.984C64.4611 7.336 64.7251 7.744 64.7251 8.208C64.7251 8.464 64.6451 8.68 64.4851 8.856C64.3411 9.032 64.1651 9.12 63.9571 9.12C63.8131 9.12 63.6691 9.088 63.5251 9.024C63.3811 8.96 63.1891 8.856 62.9491 8.712C62.5171 8.456 62.1091 8.256 61.7251 8.112C61.3571 7.968 60.8931 7.896 60.3331 7.896C59.6611 7.896 59.1171 8.04 58.7011 8.328C58.3011 8.616 58.1011 9.008 58.1011 9.504C58.1011 9.952 58.2851 10.304 58.6531 10.56C59.0371 10.8 59.7491 11.032 60.7891 11.256C61.8611 11.48 62.7011 11.736 63.3091 12.024C63.9171 12.312 64.3491 12.672 64.6051 13.104C64.8771 13.52 65.0131 14.056 65.0131 14.712C65.0131 15.752 64.5731 16.592 63.6931 17.232C62.8291 17.856 61.6691 18.168 60.2131 18.168ZM74.0473 6C76.8313 6 78.2233 7.576 78.2233 10.728V16.968C78.2233 17.32 78.1113 17.6 77.8873 17.808C77.6633 18.016 77.3673 18.12 76.9993 18.12C76.6313 18.12 76.3353 18.016 76.1113 17.808C75.9033 17.6 75.7993 17.32 75.7993 16.968V10.752C75.7993 9.792 75.5993 9.088 75.1993 8.64C74.8153 8.192 74.2073 7.968 73.3753 7.968C72.3993 7.968 71.6153 8.272 71.0233 8.88C70.4313 9.488 70.1353 10.304 70.1353 11.328V16.968C70.1353 17.32 70.0233 17.6 69.7993 17.808C69.5913 18.016 69.3033 18.12 68.9353 18.12C68.5673 18.12 68.2713 18.016 68.0473 17.808C67.8233 17.6 67.7113 17.32 67.7113 16.968V2.112C67.7113 1.76 67.8233 1.48 68.0473 1.272C68.2873 1.064 68.5913 0.959999 68.9593 0.959999C69.3113 0.959999 69.5913 1.064 69.7993 1.272C70.0233 1.464 70.1353 1.728 70.1353 2.064V8.064C70.5353 7.392 71.0713 6.88 71.7433 6.528C72.4153 6.176 73.1833 6 74.0473 6ZM82.7154 18.12C82.2834 18.12 81.9154 17.976 81.6114 17.688C81.3234 17.4 81.1794 17.032 81.1794 16.584C81.1794 16.136 81.3234 15.768 81.6114 15.48C81.9154 15.176 82.2834 15.024 82.7154 15.024C83.1474 15.024 83.5074 15.176 83.7954 15.48C84.0834 15.768 84.2274 16.136 84.2274 16.584C84.2274 17.032 84.0834 17.4 83.7954 17.688C83.5074 17.976 83.1474 18.12 82.7154 18.12ZM88.4821 18.12C88.1301 18.12 87.8341 18.024 87.5941 17.832C87.3701 17.64 87.2581 17.352 87.2581 16.968V7.224C87.2581 6.84 87.3701 6.552 87.5941 6.36C87.8341 6.152 88.1301 6.048 88.4821 6.048C88.8341 6.048 89.1221 6.152 89.3461 6.36C89.5701 6.552 89.6821 6.84 89.6821 7.224V16.968C89.6821 17.352 89.5701 17.64 89.3461 17.832C89.1221 18.024 88.8341 18.12 88.4821 18.12ZM88.4821 3.696C88.0181 3.696 87.6501 3.568 87.3781 3.312C87.1061 3.056 86.9701 2.72 86.9701 2.304C86.9701 1.888 87.1061 1.56 87.3781 1.32C87.6501 1.064 88.0181 0.935999 88.4821 0.935999C88.9301 0.935999 89.2901 1.064 89.5621 1.32C89.8501 1.56 89.9941 1.888 89.9941 2.304C89.9941 2.72 89.8581 3.056 89.5861 3.312C89.3141 3.568 88.9461 3.696 88.4821 3.696ZM98.1586 18.168C97.0066 18.168 95.9906 17.92 95.1106 17.424C94.2466 16.928 93.5746 16.224 93.0946 15.312C92.6306 14.384 92.3986 13.312 92.3986 12.096C92.3986 10.864 92.6306 9.792 93.0946 8.88C93.5746 7.952 94.2466 7.24 95.1106 6.744C95.9906 6.248 97.0066 6 98.1586 6C99.3106 6 100.319 6.248 101.183 6.744C102.063 7.24 102.735 7.952 103.199 8.88C103.679 9.792 103.919 10.864 103.919 12.096C103.919 13.312 103.679 14.384 103.199 15.312C102.735 16.224 102.063 16.928 101.183 17.424C100.319 17.92 99.3106 18.168 98.1586 18.168ZM98.1586 16.248C99.2306 16.248 100.047 15.896 100.607 15.192C101.183 14.488 101.471 13.456 101.471 12.096C101.471 10.752 101.183 9.728 100.607 9.024C100.031 8.304 99.2146 7.944 98.1586 7.944C97.1026 7.944 96.2866 8.304 95.7106 9.024C95.1346 9.728 94.8466 10.752 94.8466 12.096C94.8466 13.456 95.1266 14.488 95.6866 15.192C96.2626 15.896 97.0866 16.248 98.1586 16.248Z"
          fill="currentColor"
        />
      </svg>
    </Link>
  );
};

export default Logo;