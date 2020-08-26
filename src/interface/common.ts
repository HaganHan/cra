import { FunctionComponent } from 'react'

export interface Page extends FunctionComponent {
  mustLogin?: boolean;
  title?: string;
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
