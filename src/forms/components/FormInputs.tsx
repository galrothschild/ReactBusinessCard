import { FormControl, Grid } from "@mui/material";
import { capitalizeTitle } from "../utils/utils";
import { styled } from "@mui/material/styles";
import MuiTextField from "@mui/material/TextField";

const TextField = styled(MuiTextField)({
  "& .MuiFormHelperText-root": {
    width: "222px", // Set the desired width
  },
});
interface forminputsType {
  inputs: string[];
  colNum: number;
  onInputChange: Function;
  errors: Record<string, string>;
}

export default function FormInputs({
  inputs,
  colNum,
  onInputChange,
  errors,
}: forminputsType) {
  return (
    <>
      {inputs &&
        colNum === 1 &&
        inputs.map((input, index) =>
          Input(input, onInputChange, errors, index)
        )}
      {inputs && colNum === 2 && (
        <>
          <Grid container xs={6} gap={2}>
            {inputs
              .slice(0, Math.ceil(inputs.length / 2))
              .map((input, index) =>
                Input(input, onInputChange, errors, index)
              )}
          </Grid>
          <Grid container xs={6} gap={2}>
            {inputs
              .slice(Math.ceil(inputs.length / 2), inputs.length)
              .map((input, index) =>
                Input(input, onInputChange, errors, index)
              )}
          </Grid>
        </>
      )}
    </>
  );
}
const Input = (
  input: string,
  onInputChange: Function,
  errors: Record<string, string>,
  index: number
) => {
  return (
    <Grid item xs={12} className="flex justify-center" key={index}>
      <FormControl sx={{ minWidth: 250 }}>
        <TextField
          type={input.includes("password") ? "password" : "text"}
          id={input}
          name={input}
          label={capitalizeTitle(input)}
          onChange={
            onInputChange as React.ChangeEventHandler<
              HTMLInputElement | HTMLTextAreaElement
            >
          }
          error={Boolean(errors[input])}
          autoComplete="off"
          helperText={errors[input]}
          fullWidth
        />
      </FormControl>
    </Grid>
  );
};
