## 🚀 launchpad
A quick and easy way to bootstrap and deploy a React app to GitHub Pages.

This project uses TypeScript & [Material-UI](https://material-ui.com/getting-started/installation/) and bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Inspired by [scaffold-eth](https://github.com/austintgriffith/scaffold-eth) by austintgriffith.
<br /><br />

For additional info, I wrote an article [here](https://link.medium.com/GelT3mYUC7).<br />

## ⏱ Quickstart Guide

First, you'll need [NodeJS>=10](https://nodejs.org/en/download/) and [Git](https://git-scm.com/downloads) installed.
<br />

⛽ Propellant Tank Fill 
```bash
git clone https://github.com/easonchai/launchpad.git

cd launchpad

npm install
```
<br />

⚡ Activate Orbiter's Fuel Cells
```bash
npm start
```
>⚛ The React App should be running on [http://localhost:3000](http://localhost:3000). Open the link to view it in the browser (or it should open automatically).

<br />

🖥 Align Flight Computers 
```
📑 Create a GitHub repo and change the 'homepage' attribute in package.json to:
"homepage": "https://<username>.github.io/<repo-name>"
```
>You should be able to find this in the root directory of the cloned repo

<br />

🛰️ Comms. Check <br />

```
📡 Ensure you have connected your working directory to GitHub by running: 
git remote rm origin
git remote add origin <remote repository URL>
git push origin master
```
>The remote repository URL can be found on your repo's main page by clicking the 'Clone or download' button and usually looks like
```https://github.com/username/repo-name.git```

<br />

📀 Transition to launch configuration <br />
```bash
📦 
npm run deploy
``` 
>This will automatically create a new branch in your repo named 'gh-pages'

<br /> 

🔥 Ignition <br />
```
⚙ Setup GitHub pages source.
```
>Head to your repo > Settings (top right, under ☆ Star) > scroll down to GitHub Pages > Source > change to 'gh-pages'

<br />

## 🚀 Lift off!
Your site should be up and running on https://username.github.io/repo-name! Way to go!


## 🎉 Congratulations!
Now you're one step closer to showing the world your creation!
