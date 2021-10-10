## Getting started with bit.dev

1. npx @teambit/bvm install

cd workspace
mkdir bit-install
cd bit-install
```bit init --harmony``` (feature flag to enable all updated features)

2. Add export PATH=$HOME/bin:$PATH to ~/.profile

3. Install all the dependencies
```bit install ```

- behind the scene include yarn or npm react installation

4. ```bit add components/button --namespace ui```

- bit add will track your directory as a component
- namespace a way for you to organized and sort components in subdirectory written in bit


5 ```bit show ui/button```

ui where you place your namespace

- give you info about your components

6. ```bit compile```

- it put the dists to their implementation in your node_modules

workspace.jsonc 
- bit configuration is a set of different extensions composed together
- bit will know to load it when it runs commands and dev servers

7. ```bit start```

- bit will start a local dev server for all your components

- bit need to build the entire local dev ui first time, it will take a couple of minutes
- subsequent run it will be alot of faster

Composition
 - Allow you to render your component in isolation
 - think of rendering your component as an app

 button.composition.tsx

 - similar to storybook 
 but unlike storybook, every app renders on its' own server

 8. ```bit start```
 - Start the server

 9. To add test
 button.spec.tsx

 - Add the test library
 bit install @testing-library/react

 - Go to the tests tab and check the test result



reference: https://harmony-docs.bit.dev/

