import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'introduction',
    loadComponent: () =>
      import('./introduction/introduction.component').then(
        (c) => c.IntroductionComponent
      ),
    title: 'Introduction',
    data: { icon: 'lightbulb' },
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
    title: 'Dashboard',
    data: { icon: 'dashboard' },
  },
  {
    path: 'communities',
    loadComponent: () =>
      import('./communities/communities.component').then(
        (c) => c.CommunitiesComponent
      ),
    title: 'Communities',
    data: { icon: 'diversity_2' },
  },
  {
    path: 'marketplace',
    loadComponent: () =>
      import('./marketplace/marketplace.component').then(
        (c) => c.MarketplaceComponent
      ),
    title: 'Marketplace',
    data: { icon: 'storefront' },
  },
  {
    path: 'apps',
    loadComponent: () =>
      import('./apps/apps.component').then((c) => c.AppsComponent),
    title: 'Apps',
    data: { icon: 'apps' },
  },
  {
    path: 'app/chat',
    loadComponent: () =>
      import('./apps//app/chat/chat.component').then((c) => c.ChatComponent),
    title: 'Chat',
    data: { icon: 'chat' },
  },
  {
    path: 'registries',
    loadComponent: () =>
      import('./registries/registries.component').then(
        (c) => c.RegistriesComponent
      ),
    title: 'Registries',
    data: { icon: 'folder_shared' },
  },
  {
    path: 'registries/:id',
    loadComponent: () =>
      import('./registries/registry/registry.component').then(
        (c) => c.RegistryComponent
      ),
    title: 'Registry',
    data: { hide: true, icon: 'folder_shared' },
  },
  {
    path: 'data/view/:id',
    loadComponent: () =>
      import('./data/view/data-view.component').then(
        (c) => c.DataViewComponent
      ),
    title: 'Data View',
    data: { hide: true, icon: 'folder_shared' },
  },
  {
    path: 'data',
    loadComponent: () =>
      import('./data/data.component').then((c) => c.DataComponent),
    title: 'Data',
    data: { icon: 'source' },
  },
  {
    path: 'data/:source/:id',
    loadComponent: () =>
      import('./data/entry/entry.component').then((c) => c.DataEntryComponent),
    title: 'Data Entry',
    data: { hide: true, icon: 'source' },
  },
  {
    path: 'identity',
    loadComponent: () =>
      import('./identity/identity.component').then((c) => c.IdentityComponent),
    title: 'Identity',
    data: { icon: 'account_circle' },
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./settings/settings.component').then((c) => c.SettingsComponent),
    title: 'Settings',
    data: { icon: 'settings' },
  },
  {
    path: 'address',
    loadComponent: () =>
      import('./address-form/address-form.component').then(
        (c) => c.AddressFormComponent
      ),
    title: 'Address',
    data: { hide: false, icon: 'folder' },
  },
  {
    path: 'table',
    loadComponent: () =>
      import('./table/table.component').then((c) => c.TableComponent),
    title: 'Table',
    data: { hide: false, icon: 'folder' },
  },
  {
    path: 'tree',
    loadComponent: () =>
      import('./tree/tree.component').then((c) => c.TreeComponent),
    title: 'Tree',
    data: { hide: false, icon: 'folder' },
  },
  {
    path: 'drag-drop',
    loadComponent: () =>
      import('./drag-drop/drag-drop.component').then(
        (c) => c.DragDropComponent
      ),
    title: 'Drag-Drop',
    data: { hide: false, icon: 'folder' },
  },
];
