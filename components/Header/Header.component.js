import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import PageLink from "./PageLink.component";
import { StyledHeader, Logo, Links } from "./Header.styles";

const Header = () => {
  const router = useRouter();
  return (
    <StyledHeader>
      <Logo>
        <Link href="/">
          <a>
            <img src="/logo.svg" alt="Great Lakes Psychology Group" />
          </a>
        </Link>
      </Logo>
      <Links>
        <PageLink url="dashboard" name="Dashboard">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 28 28"
          >
            <defs />
            <path
              fill="#001847"
              fillRule="evenodd"
              d="M26 28.001h-8c-1.105 0-2-.896-2-2.001v-8c0-1.103.895-2 2-2h8c1.104 0 2 .897 2 2v8c0 1.106-.896 2.001-2 2.001zM26 19c0-.552-.448-1-1-1h-6c-.553 0-1 .448-1 1v6.002c0 .552.447.998 1 .998h6c.552 0 1-.446 1-.998V19zm0-6.999h-8c-1.105 0-2-.896-2-1.999V2.00195C16 .89695 16.895 0 18 0h8c1.104 0 2 .89595 2 2.00195V10.002c0 1.104-.896 1.999-2 1.999zM26 3c0-.552-.448-.99805-1-.99805h-6c-.553 0-1 .44605-1 .99805v6.00195c0 .551.447 1.00005 1 1.00005h6c.552 0 1-.44905 1-1.00005V3zM10 28.001H2c-1.105 0-2-.896-2-2.001v-8c0-1.103.895-2 2-2h8c1.104 0 2 .897 2 2v8c0 1.106-.896 2.001-2 2.001zM10 19c0-.552-.448-1-1-1H3c-.553 0-1 .448-1 1v6.002c0 .552.447.998 1 .998h6c.552 0 1-.446 1-.998V19zm0-6.999H2c-1.105 0-2-.896-2-1.999V2.00195C0 .89695.895 0 2 0h8c1.104 0 2 .89595 2 2.00195V10.002c0 1.104-.896 1.999-2 1.999zM10 3c0-.552-.448-.99805-1-.99805H3c-.553 0-1 .44605-1 .99805v6.00195c0 .551.447 1.00005 1 1.00005h6c.552 0 1-.44905 1-1.00005V3z"
              clipRule="evenodd"
            />
          </svg>
        </PageLink>
        <PageLink url="patients" name="Patients">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 30 32"
          >
            <defs />
            <path
              fill="#001847"
              fillRule="evenodd"
              d="M24 28.001V26c2.208 0 4-1.791 4-4 0-2.21-1.792-4-4-4h-.368c-.266-.748-.669-1.422-1.19-2.001H24c3.313 0 6 2.688 6 6.001s-2.687 6.001-6 6.001zm-1.683-12.1521c-.375-.391-.806-.715-1.272-.991.119-.296.232-.5951.331-.9021 2.583-.235 4.625-2.7958 4.625-5.95482 0-3.313-2.239-6-5-6-.544 0-1.058.13002-1.549.32202-.428-.56-.902-1.07817-1.417-1.54517.903-.485 1.901-.77685 2.965-.77685 3.866 0 7 3.582 7 8 0 3.90202-2.448 7.14092-5.683 7.84792zm-4.409.49C20.28 17.1399 22 19.359 22 22v4c0 3.313-2.687 5.999-6 5.999H6c-3.313 0-6-2.686-6-5.999v-4c0-2.642 1.719-4.8601 4.092-5.6611C2.804 14.6089 2 12.419 2 10 2 4.477 6.029 0 11 0c4.97 0 9 4.477 9 10 0 2.419-.805 4.6079-2.092 6.3389zM2 22v4c0 2.208 1.791 4 4 4h10c2.209 0 4-1.792 4-4v-4c0-2.101-1.625-3.805-3.684-3.969C14.823 19.254 12.996 20 11 20c-1.997 0-3.82399-.746-5.31599-1.969C3.62501 18.195 2 19.899 2 22zm9-20c-3.867 0-7 3.581-7 8 0 4.418 3.133 8 7 8 3.866 0 7-3.582 7-8 0-4.419-3.134-8-7-8z"
              clipRule="evenodd"
            />
          </svg>
        </PageLink>
        <PageLink url="schedule" name="Schedule">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 31 32"
          >
            <defs />
            <path
              fill="#001847"
              fillRule="evenodd"
              d="M28 32H2c-1.105 0-2-.895-2-2V4c0-1.104.895-2 2-2h6V0h2v2h10V0h2v2h7c1.104 0 1 .896 1 2v26c0 1.106-.896 2-2 2zm0-26.99902C28 4.44698 27.552 4 27 4h-5v2.00098h-2V4H10v2.00098H8V4H3c-.553 0-1 .44698-1 1.00098v3h26v-3zm0 5.00002H2V29c0 .553.447 1 1 1h24c.552 0 1-.447 1-1V10.001zM20 22h6v6h-6v-6zm2 4.001h2V24h-2v2.001zm-2-12h6V20h-6v-5.999zM22 18h2v-2h-2v2zm-10 4h6v6h-6v-6zm2 4.001h2V24h-2v2.001zm-2-12h6V20h-6v-5.999zM14 18h2v-2h-2v2zM4 22h6v6H4v-6zm2 4.001h2V24H6v2.001zm-2-12h6V20H4v-5.999zM6 18h2v-2H6v2z"
              clipRule="evenodd"
            />
          </svg>
        </PageLink>
        <PageLink url="messages" name="Messages">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 32 32"
          >
            <defs />
            <path
              fill="#001847"
              fillRule="evenodd"
              d="M26 24v8l-8.001-8H6c-3.313 0-6-1.685-6-5V6c0-3.313 2.687-6 6-6h20c3.313 0 6 2.687 6 6v13c0 3.314-2.687 5-6 5zm4-18c0-2.209-1.791-4-4-4H6C3.79 2 2 3.791 2 6v13c0 2.21 1.79 3 4 3h18-5l5 5v-5.001h2c2.209 0 4-.79 4-3V6zm-6 8c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2 .897 2 2 0 1.105-.896 2-2 2zm-8 0c-1.104 0-2-.895-2-2 0-1.104.896-2 2-2s2 .897 2 2c0 1.105-.896 2-2 2zm-8 0c-1.104 0-2-.895-2-2 0-1.104.896-2 2-2s2 .897 2 2c0 1.105-.896 2-2 2z"
              clipRule="evenodd"
            />
          </svg>
        </PageLink>
        <PageLink url="login" name="Logout" className="logout">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 32 31"
          >
            <defs />
            <path
              fill="#B3BAC8"
              fillRule="evenodd"
              d="M31.707 15.415c.117.146.199.3171.214.5181.001.019.013.0318.013.0498 0 .006.004.0101.004.0151 0 .005-.0029.0099-.0029.0149 0 .014-.0071.0232-.0081.0362-.013.238-.105.4519-.255.6169-.013.014-.007.0329-.02.0469-.013.012-.032.007-.046.019-.009.009-.026.0081-.037.0161l-7.949 7.9671c-.381.38-.998.38-1.379 0-.381-.382-.381-1.0011 0-1.3821L28.562 17H4.98999c-.552 0-.99902-.447-.99902-1.001 0-.553.44702-1 .99902-1H28.563l-6.322-6.33298c-.381-.381-.381-1.00008 0-1.38208.381-.381.998-.381 1.379 0l7.9239 7.93796c.008.008.012.0191.021.0261.026.021.0631.0119.0881.0359.035.035.025.0901.054.1311zM15.969 3.99805c0-.554.551-1.00098 0-1.00098H2.99402c-.552 0-.99805.44698-.99805 1.00098V27.9971c0 .552.44605 1 .99805 1H14.97c.552 0 .999-.448.999-1v-3.001h1.996v4.001c0 1.105-.894 2.0009-1.996 2.0009H1.99597C.89297 30.998 0 30.1021 0 28.9971V2.99707C0 1.89307.89397.99805 1.99597.99805H15.969c1.103 0 1.996.89502 1.996 1.99902v4h-1.996V3.99805z"
              clipRule="evenodd"
            />
          </svg>
        </PageLink>
      </Links>
    </StyledHeader>
  );
};

export default Header;
