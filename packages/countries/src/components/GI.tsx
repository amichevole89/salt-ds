// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef, useState } from "react";
import { useId } from "@salt-ds/core";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type GIProps = CountrySymbolProps;

const GI = forwardRef<SVGSVGElement, GIProps>(function GI(props: GIProps, ref) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="GI"
      aria-label="Gibraltar"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-GI-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle
          cx="36"
          cy="36"
          r="36"
          fill="#D9D9D9"
          transform="rotate(-90 36 36)"
        />
      </mask>
      <g mask={`url(#${uid}-GI-a)`}>
        <path fill="#F5F7F8" d="M0 0h72v48H0z" />
        <path
          fill="#DD2033"
          d="M0 48h72v24H0zm21-28v4h2v-4h4v4h-2v7h5V17h-2v-4h4v4h2v-4h4v4h2v-4h4v4h-2v14h5v-7h-2v-4h4v4h2v-4h4v4h-2v7h1v13H18V31h1v-7h-2v-4h4Z"
        />
        <path
          fill="#F1B434"
          fillRule="evenodd"
          d="M36.6 67h-3v-1.208h-5v-7h5v-5.05a6.5 6.5 0 1 1 3 .152V67Zm2.32-19.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        />
      </g>
    </CountrySymbol>
  );
});

export default GI;
