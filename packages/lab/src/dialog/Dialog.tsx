import {
  forwardRef,
  HTMLAttributes,
  useEffect,
  useMemo,
  useState,
  ComponentProps,
} from "react";
import { clsx } from "clsx";
import {
  FloatingFocusManager,
  useClick,
  useDismiss,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import {
  makePrefixer,
  useForkRef,
  useId,
  ValidationStatus,
  Scrim,
  useFloatingUI,
  useFloatingComponent,
  useCurrentBreakpoint,
} from "@salt-ds/core";
import { useWindow } from "@salt-ds/window";
import { useComponentCssInjection } from "@salt-ds/styles";
import dialogCss from "./Dialog.css";
import { DialogContext } from "./DialogContext";

export interface DialogProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Display or hide the component.
   */
  open?: boolean;
  /**
   * Callback function triggered when open state changes.
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * Status indicator
   * */
  status?: ValidationStatus;
  /**
   * Which element to initially focus. Can be either a number (tabbable index as specified by the order) or a ref.
   * Default value is 0 (first tabbable element).
   * */
  initialFocus?: ComponentProps<typeof FloatingFocusManager>["initialFocus"];

  id?: string;
  /**
   * Size of the Dialog
   * */
  size?: "small" | "medium" | "large";
  /**
   * Prevent the dialog closing on click away
   * */
  closeOnBlur?: boolean;
}

const withBaseName = makePrefixer("saltDialog");

export const Dialog = forwardRef<HTMLDivElement, DialogProps>(function Dialog(
  props,
  ref
) {
  const {
    children,
    className,
    open = false,
    onOpenChange,
    status,
    id,
    closeOnBlur = true,
    size = "medium",
    ...rest
  } = props;
  const dialogId = useId(id) ?? "";
  const targetWindow = useWindow();
  useComponentCssInjection({
    testId: "salt-dialog",
    css: dialogCss,
    window: targetWindow,
  });

  const currentbreakpoint = useCurrentBreakpoint();

  const [showComponent, setShowComponent] = useState(false);

  const { context, floating } = useFloatingUI({
    open,
    onOpenChange,
  });

  const { getFloatingProps } = useInteractions([
    useClick(context),
    useRole(context),
    useDismiss(context, { enabled: closeOnBlur }),
  ]);

  const { Component: FloatingComponent } = useFloatingComponent();

  const floatingRef = useForkRef<HTMLDivElement>(floating, ref);

  useEffect(() => {
    if (open && !showComponent) {
      setShowComponent(true);
    }
  }, [open, showComponent]);

  const contextValue = useMemo(
    () => ({ dialogId, status }),
    [dialogId, status]
  );

  if (!open && !showComponent) return null;

  return (
    <Scrim>
      <DialogContext.Provider value={contextValue}>
        <FloatingComponent
          id={`${dialogId}-FLoatigComponent`}
          open={open}
          aria-modal="true"
          ref={floatingRef}
          focusManagerProps={{
            context: context,
          }}
          className={clsx(
            withBaseName(),
            withBaseName(size, currentbreakpoint),
            {
              [withBaseName("enterAnimation")]: open,
              [withBaseName("exitAnimation")]: !open,
              [withBaseName(status as string)]: status,
            },
            className
          )}
          onAnimationEnd={() => {
            if (!open && showComponent) {
              setShowComponent(false);
            }
          }}
          {...getFloatingProps()}
          {...rest}
        >
          {children}
        </FloatingComponent>
      </DialogContext.Provider>
    </Scrim>
  );
});
