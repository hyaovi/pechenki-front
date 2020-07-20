import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setUser } from "../../globalSlice";
import { selectIsAuthenticated } from "../../globalSlice";
import { getSession } from "../../utils";

export function useAuth() {
  const dispath = useDispatch();
  const localAuth = getSession("user");
  let auth = useSelector(selectIsAuthenticated);
  auth = auth ? auth : false;

  useEffect(() => {
    const setUserfromLocal = () => {
      !auth && localAuth && dispath(setUser(localAuth));
    };
    setUserfromLocal();
  }, [dispath, localAuth, auth]);
  return auth ? auth : false;
}
