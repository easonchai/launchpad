import React from 'react';
import './List.css'
import { homepage } from './../../package.json';
import { Stepper, Step, StepLabel, StepContent, Button, Paper, Typography, Grid, Box, styled } from '@material-ui/core';

const Content = styled(Typography)({
    whiteSpace: 'pre-line',
    fontSize: 20,
    margin: 10
})

function getSteps() {
    return ['Propellant Tank Fill ⛽', `Activate Orbiter's Fuel Cells ⚡`, 'Align Flight Computers 🖥',
        'Transition to launch configuration 📀', 'Ignition 🔥', 'Lift off! 🚀'];
}

function getStepContent(step: number) {
    switch (step) {
        case 0:
            return <Content>💾 Clone & run {<code>npm install</code>}</Content>;
        case 1:
            return <Content>{`⚛ Start React app with npm start. \n It should be running on `}{<code>http://localhost:3000/</code>}</Content>
        case 2:
            return <Content>{`📑 Create a GitHub repo and change the 'homepage' attribute in package.json to: \n`}{<code>"homepage": "https://&lt;username&gt;.github.io/&lt;repo-name&gt;"</code>}</Content>
        case 3:
            return <Content>{`📦 Run `}{<code>npm deploy</code>}</Content>
        case 4:
            return <Content>{`⚙ Setup GitHub pages source. \n1. Head to your repo \n2. Settings (top right under '☆ Star')\n3. Scroll down to GitHub Pages \n4. Change Source to 'gh-pages'`}</Content>
        case 5:
            return <Content>{`✅ Test it out on your site!`}</Content>
        default:
            return <Content>{'Unknown step'}</Content>;
    }
}


export default function List() {

    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    React.useEffect(() => {
        console.log('Homepage: ' + homepage.includes('<'));
        console.log('Site: ' + window.location.href);
    })

    return (
        <Grid container>
            <Grid item sm={3} />
            <Grid item xs={12} sm={6}>
                <Typography align="center" style={{ margin: 10, marginTop: 20 }}>
                    <Box fontSize={24} fontWeight="bold">
                        🕒 Launch Sequence
                    </Box>
                </Typography>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                            <StepContent>
                                {getStepContent(index)}
                                <div>
                                    <div>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                        >
                                            Back
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                        >
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                    </div>
                                </div>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0}>
                        <Typography>Congrats! You've completed all the steps! Time to show the world your next big idea!</Typography>
                    </Paper>
                )}

                <Typography align="center" style={{ margin: 10, marginTop: 20 }}>
                    <Box fontSize={16}>
                        {<a href="https://github.com/easonchai/launchpad" target="_blank">Click here</a>} for some more detailed explanations on each step
                    </Box>
                </Typography>
            </Grid>
            <Grid item sm={3} />
        </Grid>
    );
}