import { HttpInterceptorFn } from '@angular/common/http';
import { HomePageComponent } from './home-page.component';

export const customInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const tooken = localStorage.getItem("token")
  req = req.clone({headers: req.headers.set('Authorization','bearer'+tooken)});
  return next(req);
};
