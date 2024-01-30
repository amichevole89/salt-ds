// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type PAProps = CountrySymbolProps;

const PA = forwardRef<SVGSVGElement, PAProps>(function PA(props: PAProps, ref) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="PA"
      aria-label="Panama"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-PA-a`}
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
          transform="rotate(180 36 36)"
        />
      </mask>
      <g mask={`url(#${uid}-PA-a)`}>
        <path fill="#F5F7F8" d="M0 72h72V0H0z" />
        <path fill="#DD2033" d="M36 0h36v36H36z" />
        <path
          fill="#004692"
          d="M0 72h36V36H0zm21-60-2.683 6.068-6.317.807 4.66 4.558L15.438 30 21 26.25 26.562 30l-1.222-6.567L30 18.875l-6.317-.807L21 12Z"
        />
        <path
          fill="#DD2033"
          d="m51 42-2.683 6.068-6.317.807 4.66 4.558L45.438 60 51 56.25 56.562 60l-1.221-6.567L60 48.875l-6.317-.807L51 42Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default PA;
