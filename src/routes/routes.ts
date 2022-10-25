import { lazy, LazyExoticComponent } from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string,
  path: string,
  Component: LazyExoticComponent<JSXComponent> | JSXComponent,
  name: string
}

// implementando load lazy
// con webpack: para renombrar los chunks:
// const Lazy1 = lazy(()=> import(/*webpackChunckName: "LazyPage1" */'../01-lazyload/pages/LazyPage1'))  // estos comp deben tener una export por default
// const Lazy2 = lazy(()=> import(/*webpackChunckName: "LazyPage2" */'../01-lazyload/pages/LazyPage2'))  // estos comp deben tener una export por default
// const Lazy3 = lazy(()=> import(/*webpackChunckName: "LazyPage3" */'../01-lazyload/pages/LazyPage3'))  // estos comp deben tener una export por default

const Lazy1 = lazy(()=> import('../01-lazyload/pages/LazyPage1'))  // estos comp deben tener una export por default
const Lazy2 = lazy(()=> import('../01-lazyload/pages/LazyPage2'))  // estos comp deben tener una export por default
const Lazy3 = lazy(()=> import('../01-lazyload/pages/LazyPage3'))  // estos comp deben tener una export por default

export const routes: Route[] = [
  {
    to: '/lazy1',
    path:'lazy1',
    Component: Lazy1,
    name: 'Lazy-1'
  },
  {
    to: '/lazy2',
    path:'lazy2',
    Component: Lazy2,
    name: 'Lazy-2'
  },
  {
    to: '/lazy3',
    path:'lazy3',
    Component: Lazy3,
    name: 'Lazy-3'
  },
]