<p align="center">
<img src="./frontend/public/logo.svg" alt="GLPG" width="100"/>
</p>

<p align="center">
<strong>🚧&nbsp;&nbsp;This document is under construction&nbsp;&nbsp;🚧</strong>
<br/>
<em>Nov 11, 2020</em>
</p>

- [Getting Started](#getting-started)
  - [Working with `backend/`](#working-with-backend)
  - [Working with `frontend/`](#working-with-frontend)
    - [Frontend Structure](#frontend-structure)
- [Git Workflow](#git-workflow-gitflow)
  - [Develop & Master Branches](#develop--master-branches)
  - [Feature Branches](#feature-branches)
  - [Release & Hotfix Branches](#release--hotfix-branches)
  - [Examples](#examples)
- [Linting & Prettier](#linting--prettier)

## Getting Started

To get started working on this project, you will need to clone this repository to your local machine. Open your terminal and navigate to the directory you would like to clone this project to.

```
$ git clone https://github.com/good3n/glpg-emr.git
```

Enter the project directory

```
$ cd glpg-emr
```

### Working with `backend/`

This section is under construction.

### Working with `frontend/`

Navigate to the `frontend/` directory:

```
$ cd frontend
```

Install the node packages:

```
$ npm install
```

Start the Next.js development environment:

```
$ npm run dev
```

You are now working locally. You can navigate to `http://localhost:3000/` (unless configured otherwise) in your browser to view the application.

Please refer to the [Examples](#examples) section for examples on how to make changes to this project.

### Frontend Structure

#### Directories

`pages/` This directory contains React components exported from files. Pages are associated with a route based on their file name.  
`assets/` Assets is a container directory to organize styles, fonts, etc.  
`components/` Houses the application's components such as headers, footers, navigation, etc.

#### Files

`next.config.js` For custom advanced behavior of Next.js  
`postcss.config.js` For custom behavior of PostCSS  
`tailwind.config.js` For custom behavior of Tailwind  
`.babelrc` Babel is used for backwards compatible JavaScript. This file is for custom configuration.

## Git Workflow

This workflow consists of three main areas: `feature` branch, `production` branch, and `release` branch.

A `feature` branch (a copy of the master branch) is where the serious development work occurs. A developer creates a feature or bug fix branch and does all the work there rather than on a master branch. Once the work is complete, the developer creates a pull request to merge the work into the master branch.

The `production` branch is essentially a monolith – a single long-running production release branch rather than individual branches. It's possible to create a tag for each deployable version to keep track of those details easily.

The `release` branch. With every new release, you'll create a stable branch from master and decide on a tag. If you need to do a patch release, be sure to cherry-pick critical bug fixes first, and don't commit them directly to the stable branch.

Merging everything into the master branch, and deploying often, means you limit the amount of code in "inventory", which is in line with lean and continuous delivery best practices. **_The goal is to minimize the amount of unreleased code._**

### The Rules

- **Use feature branches, no direct commits on master**: You should create a branch for whatever you’re working on, so that you end up doing a code review during a pull request before you merge.
- **Perform code reviews before merges into master, not afterwards**: Don't test everything at the end of your week. Do it on the spot, because you'll be more likely to catch things that could cause problems and others will also be working to come up with solutions.
- **Deployments are automatic, based on production branch**
- **Releases are based on tags**: If you tag something, that creates a new release.
- **Everyone starts from master, and targets master**: This means you don’t have any long branches. You check out master, build your feature, create your pull request, and target master again. You should do your complete review before you merge, and not have any intermediate stages.
- **Fix bugs in master first and release branches second**: If you find a bug, always fix forward. Fix it in master, then cherry-pick it into another patch-release branch.
- **Commit messages reflect intent**: You should not only say what you did, but also why you did it.

### Pull Requests

If you work on a feature branch for more than a few hours, it's good to share the immediate result with the rest of your team. You can @mention your teammates, and mark the merge request as a "work-in-progress" (WIP). This means it's not ready to be merged, but feedback is welcome. Your teammates can comment on the pull request. The merge request serves as a code review tool. If the review reveals shortcomings, anyone can commit and push a fix. When you feel comfortable with it to be merged, you can assign it to the person who knows the most about the codebase, or who is in charge with approving pull requests into the master branch.

### Production Branch

### Examples

This section will feature an example or two on making a change to repository.

## Linting & Prettier

This project is pre-packaged with linting and prettier packages in the root directory.

It is recommended to install the [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extensions for Visual Studio Code. You can edit your VSCode User settings/preferences and set the `Format On Save` option to `true`.
