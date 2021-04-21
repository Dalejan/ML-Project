# ML-Project
Simple project with supervised ML algorithms to predict using regresion (or clasification) 


### How to contribute
This project use the gitflow strategy (master>develop>features/hotfix...).  
Pushing a new feature will open a PR (Pull Request) that will be open until the crew check it and approve it to merge or deny it.

The branch creation sintax for new features is `git branch feature/name-of-the-feature`. The `feature/`prefix is mandatory so the actions can create the PR and execute other jobs.

The strategy to merge a Pull Request is **Squash and Merge**. So only the title of the PR will be taken as commit in the develop branch.

To merge into master you should manually create a PR with `base:master` and `compare:develop` so the commits in develop will be merged into master. This should be done once a week minimum.

![image](https://user-images.githubusercontent.com/20076843/115489707-411dec80-a222-11eb-96e2-aeded50a3573.png)
