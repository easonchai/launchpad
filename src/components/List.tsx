import React from 'react';
import { Stepper, Step, StepLabel, StepContent, Button, Paper, Typography, Grid } from '@material-ui/core';

function getSteps() {
    return ['Propellant Tank Fill ⛽', `Activate Orbiter's Fuel Cells ⚡`, 'Align Flight Computers 🖥',
        'Transition to launch configuration 📀', 'Ignition 🔥', 'Lift off! 🚀'];
}

function getStepContent(step: number) {
    switch (step) {
        case 0:
            return `💾 Clone & run npm install`;
        case 1:
            return '⚛ Start React app with npm start. \n It should be running on http://localhost:3000/';
        case 2:
            return `📑 Open a GitHub repo and change the '' attribute to: \n "homepage: https://<username>.github.io/<repo-name>"`;
        case 3:
            return `📦 Run npm deploy`;
        case 4:
            return `⚙ Setup GitHub pages source. \n Head to your repo > Settings > scroll down to GitHub Pages > Source > 'gh-pages'`;
        case 5:
            return `✅ Test it out on your site!`;
        default:
            return 'Unknown step';
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

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Grid container>
            <Grid item sm={3} />
            <Grid item xs={12} sm={6}>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                            <StepContent>
                                <Typography style={{ whiteSpace: 'pre-line' }}>{getStepContent(index)}</Typography>
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
            </Grid>
            <Grid item sm={3} />
        </Grid>
    );
}