# <Simple Git Workflow 실습>

## 1. **Both pair `fork` repo on github**

## 2. Both pair `clone` their repo to local

## 3. Add pair's fork as `remote`

- `git remote add pair <http://github~pair's repo address>`
- `git remote` || `git remote -v`

## 4. Commit your change to your local repo

- `git add <change file>`
- `git commit -m 'change'`

## 5. Push your code to your remote origin

- `git push origin master`

## 6. Pull pair's code to local repo

- `git pull pair master`

> 4, 5, 6 을 반복한다

> 중요한점은 풀받을땐 상대방에서 내껄로 푸쉬할땐 내꺼에서 내껄로를 절대 지키는게 중요하다

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3e5df054-5e6a-4481-b26a-b915193db893/IMG_7744.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3e5df054-5e6a-4481-b26a-b915193db893/IMG_7744.jpg)

# <git branch>

- 분리된 작업 영역. 독립된
- 현재 작업 공간을 베이스로 만들어진다 !!
  - 가지를 어디서 뻗어나갈지 결정하는 중요한개념!
- `git checkout <branch name>` ⇒ 원하는 위치로 이동
- `git checkout -b <branch name>` ⇒ 브랜치를 만들면서 해당 브랜치로 이동

# <git workflow for Project>

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6a4a4c59-0436-4c34-8e40-8557c3bed2d7/_2021-01-11__10.02.03.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6a4a4c59-0436-4c34-8e40-8557c3bed2d7/_2021-01-11__10.02.03.png)
