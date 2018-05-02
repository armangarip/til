#!/usr/bin/env sh
set -ex
vuepress build .

cd .vuepress/dist

# echo 'til.com' > CNAME

git init
git add -A
git commit -m "deploy ${date}"

git push -f git@github.com:hasantayyar/til.git master:gh-pages

cd -

