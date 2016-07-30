/*export const increment = ({ dispatch }) => dispatch('INCREMENT')
export const decrement = ({ dispatch }) => dispatch('DECREMENT')
export const pushUrl = ({ dispatch }) => ({ dispatch, state}) => {
  dispatch('INCREMENT')
}*/

export const increment = ({ dispatch, state }) => { dispatch('INCREMENT') }
export const decrement = ({ dispatch }) => dispatch('DECREMENT')
