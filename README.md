# 📝 Recipes Mobile App

This project is a mobile app for saving and organizing recipes. The app works on both Android and iOS devices.

Key features:

- Creating a personal library of recipes
- Weekly meal planning
- Shopping list made from chosen recipes **_Coming soon_**

## ⚙️ Setting the Environment

1. Clone the repository.

   ```bash
   https://github.com/charliesmir/Recipes.git
   ```

2. Check that you have the latest Node.js version.

   ```bash
   node -v
   ```

3. If you do not have Node.js installed, you can download it from here: [Node.js website](https://nodejs.org/en).

4. [Expo Go](https://expo.dev/go) is recommended to be installed on your mobile device to see the app.

## 🚀 Instructions to Run the Project

1. Install dependencies.

   ```bash
   npm install
   ```

2. Start the app.

   ```bash
    npx expo start
   ```

3. Scan a QR code that will be displayed in the output with Expo Go, this launch the app on your mobile device. Web version is unavailable at the moment.

## 📘 Instructions to Run Storybook

1. Check the `index.tsx` file in the `/app` folder. Search and uncomment this line:

   ```
   <Button label={"Storybook"} onPress={() => router.push("./storybook")} />
   ```

2. Install dependencies.

   ```bash
   npm install
   ```

3. Start the app.

   ```bash
    npx expo start
   ```

4. Scan a QR code that will be displayed in the output with Expo Go, this launch the app on your mobile device. Web version is unavailable at the moment.

5. Press the `Storybook` button.

## 🏗️ The Architecture of the App

### 💻 Languages

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![CSS](https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)

### 📂 Project structure

```
.
├── .gitignore
├── .rnstorybook/                   # Storybook settings
│   ├── index.ts
│   ├── main.ts
│   ├── preview.tsx
│   └── storybook.requires.ts
├── adapters/
│   ├── types.ts                    # Local types used in project
│   └── zustand/
│       ├── placeholders.ts         # Placeholder images
│       └── store.ts                # Zustand store (state manager)
├── app/
│   ├── _layout.tsx                 # Root layout with general setup
│   ├── index.tsx                   # Home block with feed, menu and shopping pages
│   ├── recipe/
│   │   └── [id]/
│   │       ├── edit.tsx            # Recipe edit page
│   │       └── index.tsx           # Recipe card page
│   └── storybook.tsx               # Storybook page (available only in dev)
├── app.json
├── assets/                         # Assets for project
│   ├── icons/
│   ├── images/
│   └── theme/
│       ├── theme.ts                # Design tokens used the components
│       └── themeProvider.tsx       # Theme provider allows to use the design tokens across the whole app
├── components/                     # Components created with Storybook following Atomic Design methodology
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── pages/
├── declarations.d.ts               # Helper to declare the usage of svg in the project
├── eslint.config.js
├── metro.config.js
├── package-lock.json
├── package.json                    # Dependencies used in the project
├── README.md                       # Readme file you are reading now :)
└── tsconfig.json
```

### 🧭 App Navigation Structure

- Home block:
  - Feed page: The page with all added recipes.
  - Menu page: The weekly menu with active recipes.
  - Shopping page (coming soon): The page with a list of ingredients that needed for recipes located in menu page.
- Recipes:
  - Edit page: The page for adding or editing recipe's data.
  - Card page: The display page that shows recipe's information.

### 🎨 Design

The design is created in [Figma](https://www.figma.com/). The link to the design: [Recipes](https://www.figma.com/design/Q4viv7OrOprMVZKThEIfox/Recipes?node-id=0-1&t=gaMtiaYcNfYNuY14-1/).

### 📘 Storybook

The project's components were developed using [Storybook](https://storybook.js.org/), located in the `/components` directory.

- The design system follows **Atomic Design** methodology (Atoms → Molecules → Organisms → Pages).
- Each level contains a set of components categorized by size and complexity.
- Each component includes 2 files:
  1. `component.tsx` – the component implementation and custom styles specific to the component
  2. `component.stories.tsx` – the Storybook configuration and preview

## 🛠️ Tools

This project is built using the following technologies:

[![Figma](https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white)](https://www.figma.com/)
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=white)](https://storybook.js.org/)
[![React Native](https://img.shields.io/badge/React_Native-20232A?logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Expo](https://img.shields.io/badge/Expo-000020?logo=expo&logoColor=white)](https://expo.dev/)

## Upcoming features

- Shopping list
- Google Play release

## 🎅 Credits

**Charlie**  
_Developer & UI/UX Designer_  
Owner of the repositiry, designed the user interface, configured core technologies, created the custom components in Storybook and implemented logic.

[GitHub](https://github.com/charliesmir)  
[Portfolio](https://www.charliesmir.com/)

> [!IMPORTANT]
>
> - If you found any violations, please contact me via email to resolve these problems: **charlie.smirnova@gmail.com**.
