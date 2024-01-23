import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import {
  H2,
  StatusIndicator,
  ValidationStatus,
  makePrefixer,
} from "@salt-ds/core";
import { useDialogContext } from "./DialogContext";
import { useWindow } from "@salt-ds/window";
import { useComponentCssInjection } from "@salt-ds/styles";
import dialogTitleCss from "./DialogTitle.css";

const withBaseName = makePrefixer("saltDialogTitle");

interface DialogTitleProps extends ComponentPropsWithoutRef<"h2"> {
  /**
   * Status indicator
   * */
  status?: ValidationStatus;
  /**
   * Displays the accent bar in the Dialog Title
   * */
  accent?: boolean;
}

export const DialogTitle = ({
  children,
  className,
  accent = true,
  status: statusProp,
  ...rest
}: DialogTitleProps) => {
  const { dialogId, status: statusContext } = useDialogContext();
  const targetWindow = useWindow();
  useComponentCssInjection({
    testId: "salt-dialog-title",
    css: dialogTitleCss,
    window: targetWindow,
  });

  const status = statusProp || statusContext;

  return (
    <H2
      id={`${dialogId}-heading`}
      className={clsx(
        withBaseName(),
        {
          [withBaseName("withAccent")]: accent && !status,
          [withBaseName(status as ValidationStatus)]: !!status,
        },
        className
      )}
      {...rest}
    >
      {status && <StatusIndicator status={status as ValidationStatus} />}
      {children}
    </H2>
  );
};
