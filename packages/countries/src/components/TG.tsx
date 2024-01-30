// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type TGProps = CountrySymbolProps;

const TG = forwardRef<SVGSVGElement, TGProps>(function TG(props: TGProps, ref) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="TG"
      aria-label="Togo"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-TG-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-TG-a)`}>
        <path fill="#009B77" d="M0 72V0h72v72z" />
        <path fill="#F1B434" d="M0 28V14h72v14zm0 30V44h72v14z" />
        <path fill="#DD2033" d="M0 44V0h44v44z" />
        <path
          fill="#F5F7F8"
          d="m24 14-2.98 6.742-7.02.897 5.177 5.064L17.82 34 24 29.833 30.18 34l-1.357-7.297L34 21.64l-7.02-.897L24 14Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default TG;
