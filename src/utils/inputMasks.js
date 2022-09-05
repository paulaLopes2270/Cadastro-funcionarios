import { mask } from "remask";

export const phoneInputMask = (event) => {
  const { value } = event.target;
  event.target.value = mask(value, ["(99) 99999-9999 "]);
};

export const cpfInputMask = (event) => {
  const { value } = event.target;

  event.target.value = mask(value, ["999.999.999-99 "]);
};

export const realInputMask = (event) => {
  const { value } = event.target;
  const maskared = mask(value.replace("R$ ", ""), ["R$ 999,999.99 "]);

  event.target.value = maskared;
};
