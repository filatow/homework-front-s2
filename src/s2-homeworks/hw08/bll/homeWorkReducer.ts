import {UserType} from '../HW8'

type ActionType =
  | { type: 'sort'; payload: 'up' | 'down' }
  | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
  switch (action.type) {
    case 'sort': { // by name
      const sorting = {
        'down': ({name: a}: UserType, {name: b}: UserType) => a > b ? -1 : 1,
        'up': ({name: a}: UserType, {name: b}: UserType) => b > a ? -1 : 1,
      }
      let newState = [...state]
      newState.sort(sorting[action.payload])
      return newState // need to fix
    }
    case 'check': {
      return state.filter(u => u.age >= 18)
    }
    default:
      return state
  }
}
