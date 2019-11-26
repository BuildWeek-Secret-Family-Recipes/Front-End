import { 
  FETCH_RECIPE_REQUEST,
  FETCH_RECIPE_SUCCESS,
  FETCH_RECIPE_FAILURE,
  SET_LOADING,
  ADD_RECIPE_SUCCESS,
  ADD_RECIPE_FAILURE,
  DELETE_RECIPE_SUCCESS,
  DELETE_RECIPE_FAILURE
} from "../actions/recipes";

export const initialState = {
    recipes: [
      {
        name: 'initName',
        type_of_meal: 'initMealType',
        original_author: 'initAuthor',
        user_id: 0,
        private: null
      }
    ],

    recipe: {
        name: 'initName',
        type_of_meal: 'initMealType',
        original_author: 'initAuthor',
        user_id: 0,
        private: null
    },

    instructions: [
      {
        recipe_id: 0,
        step_number: 0,
        instruction: 'init Instruction'
      }
    ],

    ingredients: [
      {
        name: 'init Ingredient',
        quantity: 'init Quant',
        measurement: 'init Measure',
        recipe_id: 0,
      }
    ],
    editing: false,
    loading: false,
    deleting: false,
    error: ''
}

export default function recipeReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_RECIPE_REQUEST:
        return {
          ...state,
        }
      case FETCH_RECIPE_SUCCESS:
        return {
          ...state,
          recipes: action.payload,
        }
      case FETCH_RECIPE_FAILURE:
        return {
          error: 'Fetch Recipe Failure',
        }

      case SET_LOADING:
        return {
          ...state,
          loading: true
        }

      case ADD_RECIPE_SUCCESS:
        return {
          ...state,
          recipes: action.payload
        };
      case ADD_RECIPE_FAILURE:
        return {
          error: 'Add Recipe Failure'
        }



      case DELETE_RECIPE_SUCCESS:
        return {
          ...state,
          recipes: state.recipes.filter(recipe => recipe.id !== action.payload.id),
          deleting: true,
        };
      case DELETE_RECIPE_FAILURE:
        return {
          error: 'Delete Recipe Failure'
        }

      default:
        return state;
    }
  }