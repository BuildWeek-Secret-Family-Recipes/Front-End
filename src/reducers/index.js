export const initialState = {
  title: 'Hello World'
}

const state = {
  user: 'username',
  recipies: [
    {
      title: '',
      source: '',
      ingredients: [
        {
          type: '',
          amount: ''
        }
      ],
      instructions: '',
      category: '',
      private: null
    }
  ]
}

export function reducer(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}