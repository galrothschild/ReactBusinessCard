import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
} from "@mui/material";
import { capitalizeTitle } from "../utils/utils";
import { styled } from "@mui/material/styles";
import MuiTextField from "@mui/material/TextField";
import { memo } from "react";

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

const FormInputs = ({
  inputs,
  colNum,
  onInputChange,
  errors,
}: forminputsType) => {
  return (
    <>
      {inputs &&
        colNum === 1 &&
        inputs.map((input, index) =>
          Input(input, onInputChange, errors, index, "center")
        )}
      {inputs && colNum === 2 && (
        <>
          <Grid item md={5} xs={12}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexDirection: "column",
              }}
            >
              {inputs
                .slice(0, Math.ceil(inputs.length / 2))
                .map((input, index) =>
                  Input(input, onInputChange, errors, index, "flex-end")
                )}
            </Box>
          </Grid>
          <Grid item md={5} xs={12}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexDirection: "column",
              }}
            >
              {inputs
                .slice(Math.ceil(inputs.length / 2), inputs.length)
                .map((input, index) =>
                  Input(input, onInputChange, errors, index, "flex-start")
                )}
            </Box>
          </Grid>
        </>
      )}
    </>
  );
};
const Input = (
  input: string,
  onInputChange: Function,
  errors: Record<string, string>,
  index: number,
  justify: string
) => {
  let inputType = "text";
  if (input.includes("Pass")) {
    inputType = "password";
  }
  if (input.includes("Bool")) inputType = "checkbox";
  const required = input.includes("*");
  if (input.indexOf("(") !== -1) input = input.substring(0, input.indexOf("("));
  return (
    <Grid
      item
      xs={12}
      className="flex"
      sx={{ justifyContent: { xs: "center", md: justify } }}
      key={index}
    >
      <FormControl sx={{ minWidth: 250 }}>
        {inputType === "checkbox" ? (
          <FormControlLabel
            control={<Checkbox />}
            label={capitalizeTitle(input)}
            required={required}
          />
        ) : (
          <TextField
            required={required}
            type={inputType}
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
        )}
      </FormControl>
    </Grid>
  );
};

export default memo(FormInputs);
