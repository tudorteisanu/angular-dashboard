// import { AuthStore } from "@/auth/auth.store";
import { EMPTY, of } from "rxjs";

export function initializeApp() {
  // const store = inject(AuthStore)

  return () => {
      // const accessToken = localStorage.getItem('accessToken');
      // const refreshToken = localStorage.getItem('refreshToken');

      // if (refreshToken) {
      //   store.setRefreshToken(refreshToken)
      // }
      //
      // if (accessToken) {
      //   store.setAccessToken(accessToken)
      //   return store.fetchCurrentUser()
      // }
    return of(EMPTY)
  }
}
