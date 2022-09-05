import * as React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export const ButtonSend = ({ isSubmitting }) => {
  return (
    <Button
      variant="contained"
      endIcon={<SendIcon />}
      type="submit"
      disabled={isSubmitting}
    >
      Send
    </Button>
  );
};
