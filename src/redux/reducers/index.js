import { reducer as formReducer } from 'redux-form'
import { reducer as awaitReducer } from 'redux-await'

export default {
  form: formReducer,
  await: awaitReducer
}
