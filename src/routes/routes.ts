import { lazy, LazyExoticComponent } from "react";
// import { LazyPage01, LazyPage02, LazyPage03 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
};

const Lazy01 = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage01'));
const Lazy02 = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage02'));
const Lazy03 = lazy(() => import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage03'));

export const routes: Route[] = [
  {
    to: '/lazy01',
    path: 'lazy01',
    Component: Lazy01,
    name: 'lazy-1'
  },
  {
    to: '/lazy02',
    path: 'lazy02',
    Component: Lazy02,
    name: 'lazy-2'
  },
  {
    to: '/lazy03',
    path: 'lazy03',
    Component: Lazy03,
    name: 'lazy-3'
  },
];