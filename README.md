# Dashboard Template

## Environment Prepare

Install `node_modules`:

```bash
npm install
```

or

```bash
yarn
```

## Provided Scripts

This project provides some useful script to help you quick start and build with web project, code style check and test.

Scripts provided in `package.json`. It's safe to modify or add additional script:

### Start project

```bash
npm start
```

### Build project

```bash
npm run build
```

### Test code

```bash
npm test
```

## Project Rules

### Languages and Frameworks
- [x] JavaScript ES6

### Styling Rules
To configurate **styled components** to the project, create a proper Javascript file in `src/assets/styles` and create a styled component as this following standard:
```bash
import styled from "styled-components";

/* For HTML origin components */
export const <Name_of_Styled_Component> = styled.<origin_component>`
    /* ... */
`

/* For customized components */
export const <Name_of_Styled_Component> = styled(<customized_component>)`
    /* ... */
`
```
To call the styled components that was defined in the former step, 
```bash
import { <Name_of_Styled_Component> } from '<path>'
```