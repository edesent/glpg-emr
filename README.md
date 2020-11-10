<img src="./frontend/public/logo.svg" alt="GLPG" width="100" style="margin: 0 auto; display: block;"/>
**README is under construction.**

## Git Workflow (Gitflow)

This repository uses the [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) method for workflow design. **Please note** that you are _not_ required to use the git-flow CLI.

### Develop and Master Branches

Instead of a single master branch, this workflow uses two branches to record the history of the project. The master branch stores the official release history, and the develop branch serves as an integration branch for features.

<div markdown="1" style="width: 500px; margin: 0 auto;">
<img src="https://wac-cdn.atlassian.com/dam/jcr:2bef0bef-22bc-4485-94b9-a9422f70f11c/02%20(2).svg?cdnVersion=1324" alt="" width="500" style="margin: 0 auto; display: block; max-width: 100%;"/>
</div>

The develop branch will contain the complete history of the project, whereas master will contain an abridged version. Other developers should now clone the central repository and create a tracking branch for develop.

### Feature Branches

Each new feature should reside in its own branch, which can be pushed to the central repository for backup/collaboration. But, instead of branching off of master, feature branches use develop as their parent branch. When a feature is complete, it gets merged back into develop. Features should never interact directly with master.

<div markdown="1" style="width: 500px; margin: 0 auto;">
<img src="https://wac-cdn.atlassian.com/dam/jcr:b5259cce-6245-49f2-b89b-9871f9ee3fa4/03%20(2).svg?cdnVersion=1324" alt="" width="500" style="margin: 0 auto; display: block; max-width: 100%;"/>
</div>

Note that feature branches combined with the develop branch is, for all intents and purposes, the Feature Branch Workflow. But, the Gitflow Workflow doesn’t stop there.

Feature branches are generally created off to the latest develop branch.

#### Creating a Feature Branch

Without git-flow:  
`git checkout develop git checkout -b feature_branch`

With git-flow:  
`git flow feature start feature_branch`

Continue your work and use Git like you normally would.

#### Finishing a feature branch

When you’re done with the development work on the feature, the next step is to merge the feature_branch into develop.

Without git-flow:  
`git checkout develop git merge feature_branch`

With git-flow:  
`git flow feature finish feature_branch`

### Release & Hotfix Branches

Please see the following guide: https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow

## Linting & Prettier

This project is pre-packaged with linting and prettier packages in the root directory.

It is recommended to install the [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extensions for Visual Studio Code. You can edit your VSCode User settings/preferences and set the `Format On Save` option to `true`.
