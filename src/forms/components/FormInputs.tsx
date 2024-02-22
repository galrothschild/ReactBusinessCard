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
import React, { memo } from "react";
import { formDataType } from "../models/formDataTypes";

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
  data: formDataType;
}

const FormInputs = ({
  inputs,
  colNum,
  onInputChange,
  errors,
  data,
}: forminputsType) => {
  return (
    <>
      {inputs &&
        colNum === 1 &&
        inputs.map((input, index) =>
          Input(input, onInputChange, errors, index, "center", data)
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
                  Input(input, onInputChange, errors, index, "flex-end", data)
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
                  Input(input, onInputChange, errors, index, "flex-start", data)
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
  justify: string,
  data: formDataType
) => {
  let inputType = "text";
  let inputName: keyof formDataType = input as keyof formDataType;
  if (input.includes("Pass")) {
    inputType = "password";
  }
  if (input.includes("Bool")) inputType = "checkbox";
  const required = input.includes("*");
  if (input.indexOf("(") !== -1)
    inputName = input.substring(0, input.indexOf("(")) as keyof typeof data;
  const value = data?.[inputName];
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
          // TODO: Fix checkbox
          <FormControlLabel
            control={<Checkbox />}
            label={capitalizeTitle(inputName)}
            required={required}
            onClick={onInputChange as React.MouseEventHandler<HTMLLabelElement>}
            id={inputName}
            name={inputName}
          />
        ) : (
          <TextField
            value={value}
            required={required}
            type={inputType}
            id={inputName}
            name={inputName}
            label={capitalizeTitle(inputName)}
            onChange={
              onInputChange as React.ChangeEventHandler<
                HTMLInputElement | HTMLTextAreaElement
              >
            }
            error={Boolean(errors[inputName])}
            autoComplete="off"
            helperText={errors[inputName]}
            fullWidth
          />
        )}
      </FormControl>
    </Grid>
  );
};

export default memo(FormInputs);
