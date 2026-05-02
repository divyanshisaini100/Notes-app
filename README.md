# Notes-app

This project is intended to deepen my understanding of JS and DOM concepts.

## Before I begin, here's the Github concepts I learnt:

- Codespaces are local copy (clone) of the repo

- A codespace can have multiple Branches

- BRANCHES

  - Branches are simply different versions of code
  - a practical example of why branches are used in first place. Say we made a project - fully funcitonal. We want to add a login-page. BUT without breaking the whole code (just incase something goes wrong). For such experimentation - we'll make a new branch say "login-page" 
  - Creating a new branch automatically gets the latest commit of the current branch into the new one
  - it doesn't really COPY the whole code but POINTS to 'the same code state' as previous branch (in which you created this new branch)

- COMMITS

  - it's snapshot of the whole project or file's state (at the time of commit)
  - Not just the last change that we made (but WHOLE FILES STATE)
  - wouldn't saving the whole project on each commit take up ALOT of memory?
  - No - Git efficiently uses *SMART COMPRESSION + DEDUPLICATION" - it shows that it copies the whole project but internally, it very efficiently, stores only what changed (exact files) - the rest unchanged files it resues. Concept of Deduplication uses hashing (SHA) in which git just references the old ones (doesn't store a new)  

- git fetch v/s git pull  

  - firstly, when you say make some changes in the remote repository (main project) directly - it doesn't automatically reflect on your codespace (tho it is in cloud but works as a local environment)
  - git push - to reflect codespace latest commit in main remote repository
  - git pull - (fetches + merges) to reflect the remote repository's latest commit in codespace
  - git fetch - tells git that a new version exists but just download the changes from origin/main or remote repository but don't change the files - keep them intact (you can use this to review changes before integrating or incase of conflicts if multiple members working in the team)
  
- main vs origin/main

  - They are both the same branch name (main), but in different locations — local vs remote.
  - "main" is your local branch (inside your Codespace)
  - Your local repo is a clone of the remote repo, and main is a branch inside it
  - "origin/main" is a reference in your local repo that points to the remote branch on GitHub
