# Langton's Ant

Langton's ant is a two-dimensional universal Turing machine with a very simple set of rules but complex emergent behavior. It was invented by Chris Langton in 1986 and runs on a square lattice of black and white cells. The university of Langton's ant was proven in 2000. The idea has been generalized in several different ways, such as termites which add more colors and more states.

Additional information: [Wikipedia](https://en.wikipedia.org/wiki/Langton%27s_ant)

### Link

[Demo](https://langtons-ant-git-hw7-surtt.vercel.app/)

### Stack
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) ![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white) ![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black) ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

#### Setup

```
make install
```

#### Development mode

```
make start
```

#### Production mode

```
make build
```

#### Project testing

```
make test
```

#### To run Storybook

```
make story
```

#### To run Chromatic

```
make chromatic
```


### First step

- semantic markup

### Second step

- Stylization of the desktop version
- Stylization of the adaptive version

### Third step

- Adding Babel and Webpack

### Fourth step

- Added and configured eslint, jest, tsconfig
- Writing the core of the application (the function of generating a field, randomly adding an ant, changing the state of an ant and a cell)
- Writing tests for the application core

### Fifth step

- Adding storybook and chromatic
- Adding the initial state of the application via hooks

### Sixth step

- Configuring nginx and webpack

### Seventh step

- Writing tests for reducers
- Transferring the entire state to redux
