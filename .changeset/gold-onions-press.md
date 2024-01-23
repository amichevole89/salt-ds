---
"@salt-ds/lab": minor
---

- Refactored `Dialog` to use floating-ui and Salt's `Scrim`.
- Implemented desktop support.
- Added optional `closeOnBlur` prop to prevent a click away dismissing the dialog.
- Added a `size` prop which takes `small`, `medium` and `large`.

```tsx
const AlertDialogTemplate = () => {
  const [open, setOpen] = useState(openProp);

  const handleRequestOpen = () => {
    setOpen(true);
  };

  const onOpenChange = (value: boolean) => {
    setOpen(value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button data-testid="dialog-button" onClick={handleRequestOpen}>
        Click to open dialog
      </Button>
      <Dialog
        size={size}
        {...args}
        role="alertdialog"
        status={status}
        open={open}
        onOpenChange={onOpenChange}
        initialFocus={1}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{content}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="cta" onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
```
