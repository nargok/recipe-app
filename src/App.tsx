import React, { useState } from 'react';

interface Recipe {
  id: number,
  title: string,
  createdAt: Date,
}

interface State {
  recipeList: Array<Recipe>,
}

const dummyRecipe = [
  {
    id: 1,
    title: 'Banana Stick Bread',
    createdAt: new Date(),
  },
  {
    id: 2,
    title: 'Orange Cake',
    createdAt: new Date(),
  }, 
]

const initialState = {
  recipeList: dummyRecipe,
}

const App: React.FC = () => {
  const [state, setState] = useState<State>(initialState)

  return (
    <>
      <h1>Recipe App</h1>
      <ul>
        {
          state.recipeList.map(i => (
            <li key={i.id}>
              <div></div>
              <span>{i.title}</span>
            </li>
          ))
        }
      </ul>
    </>
  );
}

export default App;
