import eslintIcon from "assets/icons/eslint.svg";
import graphqlIcon from "assets/icons/graphql.svg";
import materialUiIcon from "assets/icons/material-ui.svg";
import nextjsIcon from "assets/icons/next-js.svg";
import prettierIcon from "assets/icons/prettier.svg";
import reactIcon from "assets/icons/react.svg";
import reactHookFormIcon from "assets/icons/react-hook-form.svg";
import reduxIcon from "assets/icons/redux.svg";
import storybookIcon from "assets/icons/storybook.svg";
import styledComponentsIcon from "assets/icons/styled-components.svg";
import tailwindcssIcon from "assets/icons/tailwind-css.svg";
import typescriptIcon from "assets/icons/typescript.svg";
import viteIcon from "assets/icons/vite.svg";
import angularIcon from "assets/icons/angular.svg";
import nodeIcon from "assets/icons/node-js.svg";
import mongoIcon from "assets/icons/mongo.svg";
import djangoicon from "assets/icons/django.svg";

type Skill = {
  src: string;
  website: string;
  text: string;
};

export const skills: {
  experiencedWith: Skill[];
  wantToLearn: Skill[];
} = {
  experiencedWith: [
    {
      src: reactIcon,
      website: "https://reactjs.org",
      text: "React"
    },
    {
      src: angularIcon,
      website: "https://angular.dev",
      text: "Angular"
    },
    {
      src: nextjsIcon,
      website: "https://nextjs.org",
      text: "Next"
    },
    {
      src: typescriptIcon,
      website: "https://www.typescriptlang.org",
      text: "TypeScript"
    },
    {
      src: nodeIcon,
      website: "https://nodejs.org",
      text: "Node"
    },
    {
      src: graphqlIcon,
      website: "https://graphql.org",
      text: "GraphQL"
    },
    {
      src: reduxIcon,
      website: "https://redux-toolkit.js.org",
      text: "Redux Toolkit"
    },
    {
      src: storybookIcon,
      website: "https://storybook.js.org",
      text: "Storybook"
    },
    {
      src: reactHookFormIcon,
      website: "https://react-hook-form.com",
      text: "React Hook Form"
    },
    {
      src: tailwindcssIcon,
      website: "https://tailwindcss.com",
      text: "Tailwind CSS"
    },
    {
      src: styledComponentsIcon,
      website: "https://styled-components.com",
      text: "Styled Components"
    },
    {
      src: materialUiIcon,
      website: "https://mui.com/core/",
      text: "Material UI"
    },
    {
      src: eslintIcon,
      website: "https://eslint.org",
      text: "ESLint"
    },
    {
      src: prettierIcon,
      website: "https://prettier.io",
      text: "Prettier"
    },
    {
      src: viteIcon,
      website: "https://vitejs.dev",
      text: "Vite"
    },
    {
      src: mongoIcon,
      website: "https://www.mongodb.com",
      text: "Mongo"
    }
  ],
  wantToLearn: [
    {
      src: reactIcon,
      website: "https://reactnative.dev",
      text: "React Native"
    },
    {
      src: djangoicon,
      website: "https://www.djangoproject.com",
      text: "Django"
    },
  ]
};
