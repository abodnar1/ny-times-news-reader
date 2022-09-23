# NY Times News Reader
Visit the deployed site [here](https://ny-times-news-reader.herokuapp.com/).

## Table of Contents
- [Summary](#summary)
- [Setup](#setup)
- [Planning](#planning)
- [Accessibility](#accessibility)
- [Technologies and Tools](#technologies-and-tools)
- [Roadmap](#roadmap)
- [Contributors](#contributors)


## Summary
The NY Times News Reader application was built for a take-home challenge where articles were fetched from the [New York Times Top Stories API](https://developer.nytimes.com/docs/top-stories-product/1/overview). The application was built in about 8 hours and achieves 100% accessibility.

</br>

![visual-gif](https://media.giphy.com/media/i34iF2Dq6sdYPvsIQq/giphy.gif)

</br>


## Setup
1. Fork this Repo
2. Clone it down to your machine
3. `cd` into the root of the project directory
4. Run `npm install`
5. Run `npm start`
6. Open `http://localhost:3000/` in your browser to view
7. Run `ctrl` + `c` to stop at any time.
8. To view additions made after the 8 hour time limit, run `git checkout feature/after-time-additions`.


## Planning
A Notion [document](https://picturesque-bandana-b81.notion.site/NY-Times-News-Reader-f84c4e09eb41404589604e5be5a097c4) was used to keep component architecture, wireframes, and inspirations all in one place. 

#### *Wireframes*
<img width="460" alt="articles-wireframe" src="https://user-images.githubusercontent.com/99693359/191517608-0657f3af-5603-4d8c-908a-aa16dedfe8cb.png">
</br>
</br>
<img width="460" alt="article-detail-wireframe" src="https://user-images.githubusercontent.com/99693359/191517890-2805482a-d294-44c7-a4e6-50c855f16fcf.png">

#### *User Stories & Acceptance Criteria*
1. As a user, when I visit the app I should see a list of Top news titles.
2. As a user, I should be able to click on a news title and get the details of that article.
3. As a user, from the detailed page, I should be redirected to the NYT website when the article url is clicked.
4. As a user, I should be able to choose a news section from the dropdown menu and see all the articles pertaining to that section.


## Accessibility
Accessibility was audited using Lighthouse.
</br>
![accessibility](https://user-images.githubusercontent.com/99693359/191518243-b1efc9d1-0045-4ab9-975b-62f56b25f080.png)


## Technologies and Tools
* JavaScript
* React
* React Router
* HTML
* CSS
* Postman
* Figma
* Notion
* Agile Workflow
* GitHub Issues
* GitHub Projects


## Roadmap
Future features could include:
* Update styling on the Article Details page to be responsive on all screen sizes.
* Add a back button from the Article Details page so user can navigate from the app and not just through the browser.
* Test user stories using Cypress


## Contributors
Amber Bodnar
* [LinkedIn](https://www.linkedin.com/in/amberbodnar/)
* [GitHub](https://github.com/abodnar1)


*The [Turing School of Software and Design](https://turing.edu/) provided a spec sheet, which can be found [here](https://mod4.turing.edu/projects/take_home/take_home_fe).*
