# Kunduz Frontend Assignment 1

In this repository, the goal is building a Next.js project. While building the project Hacker News api has been used.  
Technologies such as Next.js, React Js, Styled-System, Styled-Components, express server has been used.

### Next Js.

The concern behind the using Next Js is building a SEO effective project with the gift of Next Js. called SSR. The required data is fetched on Server side rendering. In the project, fetched data is usually provides post detail and comment heads. Sub-comments are fetched dynamically with Context Api structure.

### React Js.

React Js used for creating page containers and components. Especially CommentBox component crucial part of the project.

### Styled-System Styled-Components

All the css requirements resolved with Styled-System. It is easily implemented and supports various different window sizes. Theme variants makes life like a piece of cake. Especially dynamic structure of Box component, adds flexibility to the project.

### Express

Express Server provides more powerful, faster and more controllable server side for project. We can edit url paths and we can have more control on queries and params. Environments may easily implemented and then we can implement development and production build.

# Important note

if you test the application with lighthouse please have a build with "yarn build:prod" and then start the project with "yarn start:prod" otherwise project performance score will drop dramaticly. In my calculations, performance result came in around 90-92 points.

## Install:

to install project hit "yarn"  
then you can start the project "yarn dev" on development mode.

### P.S.

Hardest trick I pulled off is loading sub-comments dynamically. You should look into that
