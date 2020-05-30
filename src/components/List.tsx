import React from 'react';
import './List.css';
import { homepage, deployed } from '../../package.json';
import { Stepper, Step, StepLabel, StepContent, Button, Paper, Typography, Grid, Box, styled } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';

const Content = styled(Typography)({
    whiteSpace: 'pre-line',
    fontSize: 20,
    margin: 10
})

function getSteps() {
    return ['Propellant Tank Fill ⛽', `Activate Orbiter's Fuel Cells ⚡`, 'Align Flight Computers 🖥', 'Comms. Check 🛰️',
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
            return <Content>{`📡 Ensure you have connected your working directory to GitHub by running: \n
<<<<<<< HEAD
            git remote rm origin\ngit remote add origin <remote repository URL>\ngit pull origin master --allow-unrelated-histories\ngit push origin master\n
=======
            git init\ngit add .\ngit commit -m "Beep Boop"\ngit remote add origin <remote repository URL>\ngit push origin master\n
>>>>>>> f1c02ad06516f489d44e3af3b770dfc44eb13ce0
            The remote repository URL can be found on your repo's main page by clicking the 'Clone or download' button and usually looks like\n`}
                {<code>https://github.com/username/repo-name.git</code>}
            </Content>
        case 4:
            return <Content>{`📦 `}{<code>npm run deploy</code>}</Content>
        case 5:
            return <Content>{`⚙ Setup GitHub pages source. \n1. Head to your repo \n2. Settings (top right under '☆ Star')\n3. Scroll down to GitHub Pages \n4. Change Source to 'gh-pages'`}</Content>
        case 6:
            return <Content>{`✅ Test it out on your site!`}</Content>
        default:
            return <Content>{'Unknown step'}</Content>;
    }
}


export default function List() {
    const [activeStep, setActiveStep] = React.useState(1);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    React.useEffect(() => {
        switch (activeStep) {
            case 1:
                window.location.href.includes('localhost') && handleNext();
                break;
            case 2:
                homepage.includes('<') || handleNext();
                break;
            case 3:
            case 4:
                deployed && handleNext();
                break;
            case 5:
            case 6:
                window.location.href.includes('github') && handleNext();
                break;
        }
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
                            <StepLabel style={activeStep > index ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>{label}</StepLabel>
                            <StepContent>
                                {getStepContent(index)}
                                {activeStep >= 3 &&
                                    <Box>
                                        <Button
                                            disabled={activeStep === 5}
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
                                    </Box>
                                }
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
                        📝 {<a href="https://github.com/easonchai/launchpad" target="_blank">Click here</a>} for some more detailed explanations on each step
                    </Box>
                    <Box fontSize={16} style={{ margin: 10 }}>
                        💬 Questions/feedback? Feel free to {
                            <a href="https://twitter.com/messages/compose?recipient_id=933716466"
                                data-screen-name="@easonchaiii"
                                target="_blank">DM me on Twitter</a>}!
                        <TwitterIcon style={{ marginLeft: 10, color: '#1DA1F2' }} />
                    </Box>
                </Typography>
            </Grid>
            <Grid item sm={3} />
        </Grid>
    );
}