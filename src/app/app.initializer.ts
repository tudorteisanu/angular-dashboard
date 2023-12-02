import { inject, PLATFORM_ID } from "@angular/core";
// import { AuthStore } from "@/auth/auth.store";
import { EMPTY, of } from "rxjs";
import { isPlatformBrowser } from "@angular/common";

export function initializeApp() {
  const platform = inject(PLATFORM_ID);
  // const store = inject(AuthStore)

  return () => {
    if (isPlatformBrowser(platform)) {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');

      // if (refreshToken) {
      //   store.setRefreshToken(refreshToken)
      // }
      //
      // if (accessToken) {
      //   store.setAccessToken(accessToken)
      //   return store.fetchCurrentUser()
      // }
    }


    return of(EMPTY)
  }
}
