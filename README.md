## Project Atelier Front-End Capstone

Project Atelier is a capstone project that builds a functional and delightfully designed front-end for a high fashion e-commerce site.

## Table of Contents

1. [Preview and Team Members](https://github.com/Krusty-Krab-Co/The-Krusty-Krab-FEC#team-member-previews)
2. [Git Workflow](https://github.com/Krusty-Krab-Co/The-Krusty-Krab-FEC#git-workflow)
3. [Installation Requirements](https://github.com/Krusty-Krab-Co/The-Krusty-Krab-FEC#installation-requirements)

## Team Member Previews

**Akash Rajan - Overview module**
<br>
<p>
  <img width="1215" alt="Screenshot 2023-07-08 at 6 59 44 PM" src="https://github.com/Krusty-Krab-Co/The-Krusty-Krab-FEC/assets/96401063/5c0f9545-7cf4-4337-9643-bca4d218032e">
</p>
<br>

**Kiel Fuller - Related Products module**
<br>
<p>
  <img width="950" alt="Screenshot 2023-07-08 at 11 02 55 AM" src="https://github.com/Krusty-Krab-Co/The-Krusty-Krab-FEC/assets/96401063/46dd4a8b-dd4f-45c2-9a90-ce2221d2c092">
</p>
<br>

**Jesse Werhnyak - Ratings and Reviews module**
<br>
<p>
  <img width="950" alt="Screenshot 2023-07-08 at 11 07 39 AM" src="https://github.com/Krusty-Krab-Co/The-Krusty-Krab-FEC/assets/96401063/f3f70347-491e-4179-94cd-4a341ed2e3aa">
</p>

## Git Workflow 

The Krusty Krab uses a Git Feature Branch Workflow.

### Collaborators should start with the main branch by using:
```
git checkout main
git fetch origin
git reset --hard origin/main
```

### Once the commands above have been run, create a new branch per feature you're working on using:
```
git checkout -b "new-feature"
```

### Update add, and commit as you normally would with git. To allow other collaborators to view your updates, use:
```
git push -u origin "new-feature"
```

### Forgot to create a new branch? Use:
```
git checkout "current_branch"
git branch "new-branch"
git switch "new-branch"
```

### Want the latest main while still working on a branch? Use:
```
git checkout main
git fetch origin
git reset --hard origin/main

git checkout "feature"
git merge main
```

## Installation Requirements

### This project uses React with Vite, and heavily utilizes Material UI's component library. Unit testing is done through Vitest.
Install these dependances and more after cloning the repo by running: 
```
npm install
```
### To compile JSX files with Vite, use: 
```
npm run build
```
### To create a server on your local machine using Vite, use: 
```
npm run dev
```
### To get a production version of this project for deployment, use: 
```
npm run preview
```
### Our project was deployed to an AWS EC2 instance. To learn more go to: 
https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-steps-server.html
