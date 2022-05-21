# seachRepos

npm library for searching repos github and find repostiry with github search API

# instalation

```
#using npm
npm install searchrepos

#using yarn
yarn install searchrepos
```

# usage

using import

```javascript
import { searchrepos } from "searchrepos";
```

using const

```javascript
const searcgrepos = require("searcgrepos");
```

#example

using promise

```javascript
searchrepos({
  username: "Dickyrdiar",
  page: "1",
  per_page: "50",
});
```

using async

```javascript
const getRepositories = async function () {
  const repositories = await getRepos({
    username: "Dickyrdiar",
    page: 1,
    per_page: 50,
  });
  console.log(repositories);
};

getRepositories();
```
