# Redux NewsTV

[![Netlify Status](https://api.netlify.com/api/v1/badges/52c4590b-b633-44b0-8752-0e76159989eb/deploy-status)](https://app.netlify.com/sites/redux-newstv/deploys)
<br><br>
[https://redux-newstv.netlify.app/](https://redux-newstv.netlify.app/)
<br><br>
News website to stay up-to-date with the current affairs built using React and Redux
<br>
Also used [GNewsAPI](https://gnews.io/) for fetching latest news.

<br>

The main intent of making this project was to understand how a library like Redux simplifies the process of state management. Though it was a basic project, some inferences that I made from the process were that it,

-   Contains a lot of boilerplate code even for small tasks like updating a single variable.

-   Simplifies the codebase by seperating component logic and state management logic.
-   Is easily maintainable since it follows a strict code structure.
-   Is easily debuggable because of Redux DevTools.
-   Is better in performance since components only re-render when the respective state is changed (which is not the case in Context API)
