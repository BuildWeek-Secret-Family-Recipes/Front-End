export const initialState = {
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

export default function recipeReducer(state = initialState, action) {
    switch(action.type) {
      default:
        return state;
    }
  }