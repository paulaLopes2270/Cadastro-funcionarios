import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export const ConfirmationModal = ({
  useModal = [true, () => {}],
  title,
  description,
  yesButtonHandle = () => {},
  noButtonHandle = () => {},
}) => {
  const [isOpen, setIsOpen] = useModal;
  const yesHandle = () => {
    yesButtonHandle();
    setIsOpen(false);
  };
  const noHandle = () => {
    noButtonHandle();
    setIsOpen(false);
  };
  return (
    <Dialog
      open={isOpen}
      onClose={noHandle}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={noHandle}>Não</Button>
        <Button onClick={yesHandle} autoFocus>
          Sim
        </Button>
      </DialogActions>
    </Dialog>
  );
};
