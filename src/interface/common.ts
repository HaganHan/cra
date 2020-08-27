import { FunctionComponent } from 'react'

export interface Page extends FunctionComponent {
  title: string;
  mustLogin?: boolean;
  mustLogout?: boolean;
}

export interface PageInfo {
  path: string;
  Component: Page;
}

export interface BreadcrumbPage {
  path: string;
  title: string;
}

export interface WebpackFileModule {
  default: Page;
}
