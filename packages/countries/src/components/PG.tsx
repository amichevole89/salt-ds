// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type PGProps = CountrySymbolProps;

const PG = forwardRef<SVGSVGElement, PGProps>(function PG(props: PGProps, ref) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="PG"
      aria-label="Papua New Guinea"
      viewBox="0 0 73 73"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-PG-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path
          fill="#D9D9D9"
          d="M62.191 10.632c14.06 14.06 14.06 36.853 0 50.912-14.059 14.059-36.853 14.059-50.912 0-14.058-14.059-14.058-36.853 0-50.912 14.06-14.059 36.853-14.059 50.912 0Z"
        />
      </mask>
      <g mask={`url(#${uid}-PG-a)`}>
        <path fill="#DD2033" d="M73 72H1V0h72v72Z" />
        <path
          fill="#31373D"
          d="M62.367 61.632 36.912 87.088-14 36.177 11.456 10.72l50.911 50.911Z"
        />
        <path
          fill="#F5F7F8"
          d="m17.142 25.816-1.23-2.64-1.23 2.64-2.78-.659 1.245 2.633-2.235 1.818 2.782.643-.007 2.925 2.225-1.83 2.225 1.83-.008-2.925 2.783-.643-2.235-1.818 1.245-2.633-2.78.659Zm-11.23 5.361 1.23 2.639 2.78-.659-1.245 2.633 2.235 1.818-2.783.643.008 2.925-2.225-1.83-2.226 1.83.008-2.925-2.782-.643 2.234-1.818-1.244-2.633 2.779.659 1.23-2.64Zm7 23.999 1.476 3.168 3.335-.79-1.493 3.158 2.682 2.182-3.34.772.01 3.51-2.67-2.196-2.67 2.197.009-3.511-3.34-.772 2.682-2.182L8.1 57.553l3.335.79 1.477-3.167Zm13-22 1.23 2.64 2.78-.659-1.245 2.633 2.235 1.818-2.783.643.008 2.925-2.225-1.83-2.226 1.83.008-2.925-2.782-.643 2.234-1.818-1.244-2.633 2.779.659 1.23-2.64Zm-7.5 16a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        />
        <path
          fill="#F1B434"
          d="M40.922 12.947a3.338 3.338 0 0 0-4.665.724l5.614 4.106a4.45 4.45 0 0 0-3.032 7.15l5.064-3.921a7.145 7.145 0 0 0 9.268 9.75l-3.076-6.966 5.697 4.166a3.616 3.616 0 0 1 .785 5.054l-.164.224a3.338 3.338 0 0 1-4.665.725l-1.314 1.796a5.564 5.564 0 0 0 7.775-1.207l.164-.225a5.842 5.842 0 0 0-1.267-8.163l-5.723-4.185 7.607.823a7.145 7.145 0 0 0-11.526-6.38L49.87 9.84a4.45 4.45 0 0 0-5.81 5.4l-3.138-2.294Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default PG;
