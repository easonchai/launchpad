import React from 'react';
import { Stepper, Step, StepLabel, StepContent, Button, Paper, Typography, Container, Grid, styled } from '@material-ui/core';

const MainSection = styled(Grid)({
    background: '#282c34',
})

function getSteps() {
    return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step: number) {
    switch (step) {
        case 0:
            return `Clone & run npm install`;
        case 1:
            return 'Start the react app on localhost:3000 by running npm start';
        case 2:
            return `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`;
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
            <Grid item sm={4} />
            <Grid item xs={12} sm={4}>
                <Stepper activeStep={activeStep} orientation="vertical" style={{ backgroundColor: '#282c34', color: 'white' }}>
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                            <StepContent>
                                <Typography>{getStepContent(index)}</Typography>
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
                        <Typography>All steps completed - you&apos;re finished</Typography>
                        <Button onClick={handleReset}>
                            Reset
                        </Button>
                    </Paper>
                )}
            </Grid>
            <Grid item sm={4} />
        </Grid>
    );
}