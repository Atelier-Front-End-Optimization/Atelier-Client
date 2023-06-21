# The-Krusty-Krab-FEC

The Krusty Krab uses a Git Feature Branch Workflow.

Collaborators should start with the main branch by using:
```
git checkout main
git fetch origin
git reset --hard origin/main
```

Once the commands above have been run, create a new branch per feature you're working on using:
```
git checkout -b "new-feature"
```

Update add, and commit as you normally would with git. To allow other collaborators to view your updates, use:
```
git push -u origin "new-feature"
```