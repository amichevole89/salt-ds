// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type KYProps = CountrySymbolProps;

const KY = forwardRef<SVGSVGElement, KYProps>(function KY(props: KYProps, ref) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="KY"
      aria-label="Cayman Islands (the)"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-KY-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-KY-a)`}>
        <path fill="#004692" d="M0 0h72v72H0z" />
        <path fill="#FBD381" d="M61.4 53h-21v5h3v3h15v-3h3v-5Z" />
        <circle cx="50.9" cy="27.5" r="2.5" fill="#FBD381" />
        <circle cx="50.9" cy="35.5" r="7.5" fill="#008259" />
        <path
          fill="#DD2033"
          d="M40.4 35h21v8.743a14.857 14.857 0 0 1-9.36 13.803L50.9 58l-1.14-.454a14.857 14.857 0 0 1-9.36-13.803V35Z"
        />
        <mask
          id={`${uid}-KY-b`}
          x="40"
          y="35"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
        >
          <path
            fill="#DD2033"
            d="M40.4 35h21v8.743a14.857 14.857 0 0 1-9.36 13.803L50.9 58l-1.14-.454a14.857 14.857 0 0 1-9.36-13.803V35Z"
          />
        </mask>
        <g mask={`url(#${uid}-KY-b)`}>
          <path fill="#005EB8" d="M40.4 45h21v13h-21z" />
          <path
            fill="#F5F7F8"
            d="M50.9 49c-2.626 0-2.626 2.182-5.25 2.182-2.625 0-2.625-2.182-5.25-2.182v3.818c2.625 0 2.625 2.182 5.25 2.182 2.624 0 2.624-2.182 5.25-2.182 2.624 0 2.624 2.182 5.25 2.182 2.625 0 2.625-2.182 5.25-2.182V49c-2.625 0-2.625 2.182-5.25 2.182-2.626 0-2.626-2.182-5.25-2.182Zm0-7c-2.626 0-2.626 2.182-5.25 2.182-2.625 0-2.625-2.182-5.25-2.182v3.818c2.625 0 2.625 2.182 5.25 2.182 2.624 0 2.624-2.182 5.25-2.182 2.624 0 2.624 2.182 5.25 2.182 2.625 0 2.625-2.182 5.25-2.182V42c-2.625 0-2.625 2.182-5.25 2.182-2.626 0-2.626-2.182-5.25-2.182Z"
          />
          <path fill="#F1B434" d="M43.4 37h15v4h-15z" />
        </g>
        <mask
          id={`${uid}-KY-c`}
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
        >
          <path fill="#002F6C" d="M0 36C0 16.118 16.118 0 36 0v36H0Z" />
        </mask>
        <g mask={`url(#${uid}-KY-c)`}>
          <path fill="#004692" d="M0 0h36v36H0z" />
          <path
            fill="#F5F7F8"
            d="m12.522 3.134-2.121 2.121 29.526 29.526 2.121-2.121L12.522 3.134ZM6.865 8.79 3.33 12.327l29.526 29.526 3.535-3.535L6.866 8.79Z"
          />
          <path
            fill="#DD2033"
            d="m6.865 8.79 3.536-3.535 29.526 29.526-3.535 3.536L6.864 8.79Z"
          />
          <path fill="#F5F7F8" d="M36 12v5H17v19h-5V12h24Z" />
          <path fill="#F5F7F8" d="M36-2v5H5v33H0V-2h36Z" />
          <path
            fill="#DD2033"
            fillRule="evenodd"
            d="M3 36h9V12h24V3H3v33Z"
            clipRule="evenodd"
          />
        </g>
      </g>
    </CountrySymbol>
  );
});

export default KY;
