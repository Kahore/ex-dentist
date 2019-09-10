import { firebaseAuth } from '../config/firebaseConfig'
export const logout = () => {
  return firebaseAuth().signOut()
}
