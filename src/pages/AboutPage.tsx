import { Container, Grid, Typography } from '@mui/material';
import PageHeader from './components/PageHeader';

const AboutPage = () => {
    return (
        <Container >
            <PageHeader title="About" subtitle='On this page you can find explanations about this application' />
            <Grid container spacing={2}>
                <Grid item xs={12} md={8} sx={{ placeItems: "center", display: "grid" }}>
                    <Typography variant="h5" color="initial">
                        This is my first react app, developed with React, Redux, Typescript and a lot of helper libraries.
                        Here you can see Cards created by students of HackerU, create users, like cards, delete and edit your cards and more.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4} justifyContent="center">
                    <img src="./assets/images/card.jpg" alt="business card" width="100%"


                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutPage;