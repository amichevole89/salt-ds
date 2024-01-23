import { createContext, useContext } from "react";
import { ValidationStatus } from "@salt-ds/core";

export const DialogContext = createContext<{
  dialogId?: string;
  status?: ValidationStatus;
}>({
  dialogId: undefined,
  status: undefined,
});

export const useDialogContext = () => {
  return useContext(DialogContext);
};
