<div align="center" id="top"> 
  <!-- <a href="https://nativetimeago.netlify.com">Demo</a> -->
</div>

<h1 align="center">View Timeago</h1>

<p align="center">
  <img alt="Principal linguagem do projeto" src="https://img.shields.io/github/languages/top/fera765/view-timeago?color=56BEB8">

  <img alt="Quantidade de linguagens utilizadas" src="https://img.shields.io/github/languages/count/fera765/view-timeago?color=56BEB8">

  <img alt="Tamanho do repositório" src="https://img.shields.io/github/repo-size/fera765/view-timeago?color=56BEB8">

  <img alt="Licença" src="https://img.shields.io/github/license/fera765/view-timeago?color=56BEB8">

  <img alt="Github issues" src="https://img.shields.io/github/issues/fera765/view-timeago?color=56BEB8" />

  <img alt="Github forks" src="https://img.shields.io/github/forks/fera765/view-timeago?color=56BEB8" />

  <img alt="Github stars" src="https://img.shields.io/github/stars/fera765/view-timeago?color=56BEB8" />
</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  View Timeago 🚀 Em construção...  🚧
</h4> 

<hr> -->

<p align="center">
  <a href="#sparkles-funcionalidades">Functionalities</a> &#xa0; | &#xa0;
  <a href="#rocket-tecnologias">Technology</a> &#xa0; | &#xa0;
  <a href="#star-example">Example</a> &#xa0; | &#xa0;
  <a href="https://github.com/fera765" target="_blank">Autor</a>
</p>

<br>

## :sparkles: Functionalities ##

:heavy_check_mark: Convert Date to TimeAgo;

## :star: Example ##

Example 01
```js
import { View } from 'react-native';
import TimeAgo from 'view-timeago';

const App = () => {
  const date = new Date();
  return (
    <View>
      <TimeAgo date={date} language="pt-BR">
      //By default it updates every 1 minute
    </View>
  )
}
```

Example 02
```js
import { View } from 'react-native';
import TimeAgo from 'view-timeago';

const App = () => {
  const date = new Date();
  return (
    <View>
      <TimeAgo date={date} interval={1000} language="pt-BR" style={{fontSize: 20}}>
      //Updates every 1 second
    </View>
  )
}
```

Example 03 Styled-Components
```js
//styled.ts
import styled from 'styled-components/native';
import TimeAgo from 'view-timeago';

export const TimeAgoText = styled(TimeAgo)`
  font-size: 20px;
`;

// App.tsx
import { View } from 'react-native';
import { TimeAgoText } from './styles';

const App = () => {
  const date = new Date();
  return (
    <View>
      <TimeAgoText date={date} interval={1000} language="pt-BR" style={{fontSize: 20}}>
      //Updates every 1 second
    </View>
  )
}
```

## :rocket: Tecnologias ##

The following tools were used in the construction of the project:

- [Node.js](https://nodejs.org/en/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## :memo: Licença ##


This project is under MIT license. See the archive [LICENSE](LICENSE.md) for more details.


Done with :heart: per <a href="https://github.com/fera765" target="_blank">Mateus Conceição</a>

&#xa0;

<a href="#top">Back to the top
</a>
