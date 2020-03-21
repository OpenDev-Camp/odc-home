export const numberOnlyInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const ASCIICode = (e.which) ? e.which : e.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
    e.preventDefault();
  }
};
