# OpenDev Camp
OpenDev Camp's landing website to give visitors a glimpse into the identity of the organization

## Repo Rules

### Master Branch
- Do not touch master branch

### Develop Branch
- Every new branch should be made from this branch.
- Only touch this branch for minor fixes.

### Branching
- If you are working on a new feature, create a branch from 'develop' with a prefix "feature-" with a kebab-cased title.
- If you are working on a bug, create a branch from 'develop' with a prefix "hotfix-" with a kebab-cased title.

### Project board
- Never touch the Project board.
- To add new tasks to Project board, please submit an issue.

### Issues
- If it is a **feature**, use the Feature Request template then prefix the title with "Feature: ".
  - **Assignees**
  - Set all collaborators as assignees.
  - **Labels**
    - Set the label to "enhancement".
    - Optional, add other labels that you think fits your request. For example, if you want your code to be reviewed by everyone, Add the label "open" to your request.
  - **Projects**
  - Set the Project to the repository's project board.
  - **Milestones**
  - Set the Mileston to the sprint's milestone if there are any.
- If it is a **bug**, use the Bug Report template then prefix the title with "Bug".
 - **Assignees**
  - Set all collaborators as assignees.
  - **Labels**
    - Set the label to "bug".
    - Optional, add other labels that you think fits your request. For example, if you want your code to be reviewed by everyone, Add the label "open" to your request.
  - **Projects**
  - Set the Project to the repository's project board.
  - **Milestones**
  - Set the Mileston to the sprint's milestone if there are any.
- If you have progressed with the issue, open the issue then set the Project status to "In Progress"
  - The board is automated to migrate the card.
- If you feel that everything is done, submit a PR with the same issue title, then at the description, write "Resolves #(Issue no") for automated issue reference.

### Pull Requests
- On the title, follow the same title as the related issue.
- On the description, write "Resolves #(Issue No.)" for automated issue reference. You may add additional descritions if you wish.
- On the right panel, configure proper settings. To configure, click the cog/setting icon.
  - **Reviewers**
  - Set Cedrick or git-ced as the reviewer (always).
  - Set other people as a reviewer when they are accountable for your feature or bug fix request.
  - **Assignees**
  - Set all collaborators as assignees.
  - **Labels**
    - If it is a **feature** request.
      - Set the label to "enhancement".
    - If it is a **bug fix** request.
      - Set the label to "bug".
    - Optional, add other labels that you think fits your request. For example, if you want your code to be reviewed by everyone, Add the label "open" to your request.
  - **Projects**
  - Set the Project to the repository's project board.
  - **Milestones**
  - Set the Mileston to the sprint's milestone if there are any.
- Upon submission of a PR, wait for the reviewer's approval. Upon approval, Cedrick will merge the PR to the destination branch and delete the source branch.
