import { 
  ADD_RECIPE_START,
  ADD_RECIPE_SUCCESS,
  ADD_RECIPE_FAILURE
} from "../actions/recipes";

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

export function reducer(state = initialState, action) {
    switch(action.type) {
      case ADD_RECIPE_START:
        return state;
      case ADD_RECIPE_SUCCESS:
        return state;
      case ADD_RECIPE_FAILURE:
        return state;
      default:
        return state;
    }
  }