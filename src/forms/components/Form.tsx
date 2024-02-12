import { Container, Typography, Button, Grid } from "@mui/material";
import FormInputs from "./FormInputs";
interface FormProps {
  title: string;
  inputs: string[];
  colNum: number;
  formActions: any;
}

const Form = ({ title, inputs, colNum, formActions }: FormProps) => {
  const { onSubmit, handleChange, errors } = formActions;
  return (
    <Container className="flex flex-col items-center text-center">
      <Typography variant="h2" fontSize={32}>
        {title}
      </Typography>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(event);
          onSubmit();
        }}
      >
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
          mt={2}
          gap={2}
        >
          <FormInputs
            inputs={inputs}
            colNum={colNum}
            onInputChange={handleChange}
            errors={errors}
          />
          <Grid item xs={12} className="flex justify-center">
            <Button
              color="primary"
              variant="contained"
              sx={{ px: 3, fontSize: 20, textTransform: "none" }}
              type="submit"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Form;
