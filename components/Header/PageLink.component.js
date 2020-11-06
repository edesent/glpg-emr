import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const PageLink = (props) => {
  const router = useRouter();
  const { name, url, children, className } = props;
  return (
    <Link href={`/${url}`}>
      <a
        className={
          router.pathname == `/${url}` ? `active ${className}` : className
        }
        title={name}
      >
        {children}
      </a>
    </Link>
  );
};

export default PageLink;
