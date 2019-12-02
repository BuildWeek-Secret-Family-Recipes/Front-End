import { 
  ADD_RECIPE_SUCCESS,
  ADD_RECIPE_FAILURE,
  ADD_INGREDIENTS_SUCCESS,
  ADD_INGREDIENTS_FAILURE,
  ADD_INSTRUCTIONS_SUCCESS,
  ADD_INSTRUCTIONS_FAILURE
} from "../actions/recipes";

export const initialState = {
    recipies: [
      {
        name: '',
        type_of_meal: '',
        original_author: '',
        private: null
      }
    ]
}

export default function recipeReducer(state = initialState, action) {
    switch(action.type) {
      case ADD_RECIPE_SUCCESS:
        return {
          ...state,
          recipes: action.payload
        };
      case ADD_RECIPE_FAILURE:
        return state;

      case ADD_INGREDIENTS_SUCCESS:
        return state;
      case ADD_INGREDIENTS_FAILURE:
        return state;
      
      case ADD_INSTRUCTIONS_SUCCESS:
        return state;
      case ADD_INSTRUCTIONS_FAILURE:
        return state;
      default:
        return state;
    }
  }