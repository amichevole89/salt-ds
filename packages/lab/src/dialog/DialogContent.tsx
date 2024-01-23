import { forwardRef, HTMLAttributes, ReactNode, useState } from "react";
import { clsx } from "clsx";
import { makePrefixer } from "@salt-ds/core";
import { useWindow } from "@salt-ds/window";
import { useComponentCssInjection } from "@salt-ds/styles";

import dialogContentCss from "./DialogContent.css";
import { useDialogContext } from "./DialogContext";

const withBaseName = makePrefixer("saltDialogContent");

export interface DialogContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of Dialog Content
   */
  children?: ReactNode;
}

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  function DialogContent(props, ref) {
    const { children, className, ...rest } = props;
    const { dialogId } = useDialogContext();
    const [scrollTop, setScrollTop] = useState(0);

    const handleScroll = (e: React.UIEvent<HTMLElement>) => {
      setScrollTop((e.target as HTMLElement).scrollTop);
    };

    const targetWindow = useWindow();
    useComponentCssInjection({
      testId: "salt-dialog-content",
      css: dialogContentCss,
      window: targetWindow,
    });

    return (
      <>
        <div className={clsx({ [withBaseName("scroll")]: scrollTop > 0 })} />
        <div
          id={`${dialogId}-description`}
          className={clsx(withBaseName(), className)}
          onScroll={handleScroll}
          {...rest}
          ref={ref}
        >
          {children}
        </div>
      </>
    );
  }
);
