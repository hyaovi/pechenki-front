import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../globalSlice';

export function useAuth() {
  const auth = useSelector(selectIsAuthenticated);
  return auth ? auth : false;
}
