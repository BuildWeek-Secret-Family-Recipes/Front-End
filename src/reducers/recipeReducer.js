import { 
  FETCH_RECIPE_REQUEST,
  FETCH_RECIPE_SUCCESS,
  FETCH_RECIPE_FAILURE,
  FETCH_ALL_REQUEST,
  FETCH_ALL_SUCCESS,
  FETCH_ALL_FAILURE,
  SET_LOADING,
  ADD_RECIPE_SUCCESS,
  ADD_RECIPE_FAILURE,
  EDIT_RECIPE_SUCCESS,
  EDIT_RECIPE_FAILURE,
  DELETE_RECIPE_SUCCESS,
  DELETE_RECIPE_FAILURE
} from "../actions/recipes";

export const initialState = {
    recipes: [
      {
        name: '',
        type_of_meal: '',
        original_author: '',
        user_id: 0,
        private: null
      }
    ],

    recipe: {
        name: '',
        type_of_meal: '',
        original_author: '',
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
          loading: true
        }
      case FETCH_RECIPE_SUCCESS:
        return {
          ...state,
          userRecipes: action.payload,
          loading: false
        }
      case FETCH_RECIPE_FAILURE:
        return {
          error: 'Fetch Recipe Failure',
          loading: false
        }

      case FETCH_ALL_REQUEST: 
        return {
          ...state,
          loading: true
        }
      case FETCH_ALL_SUCCESS: 
        return {
          ...state,
          allRecipes: action.payload,
          loading: false,
        }
      case FETCH_ALL_FAILURE: 
        return {
          error: 'Fetch all failed',
          loading: false
        }

      case SET_LOADING:
        return {
          ...state,
          loading: false
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

      case EDIT_RECIPE_SUCCESS:
        return {
          ...state,
          recipe: action.payload,
          editing: true
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