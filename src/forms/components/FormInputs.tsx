import { FormControl, Grid, InputLabel, OutlinedInput } from "@mui/material";
import { capitalizeTitle } from "../utils/utils";

interface forminputsType {
  inputs: string[];
  colNum: number;
  onInputChange: Function;
}

export default function FormInputs({
  inputs,
  colNum,
  onInputChange,
}: forminputsType) {
  return (
    <>
      {inputs &&
        inputs.map((input, index) => (
          <Grid
            item
            xs={12}
            md={colNum > 1 && 6}
            className="flex justify-center"
            key={index}
          >
            <FormControl>
              <InputLabel htmlFor={input}>{capitalizeTitle(input)}</InputLabel>
              <OutlinedInput
                id={input}
                name={input}
                label={capitalizeTitle(input)}
                onChange={
                  onInputChange as React.ChangeEventHandler<
                    HTMLInputElement | HTMLTextAreaElement
                  >
                }
              />
            </FormControl>
          </Grid>
        ))}
    </>
  );
}
