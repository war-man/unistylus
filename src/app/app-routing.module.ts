import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

import {HomeComponent} from './pages/home/home.component';
import {OopsComponent} from './pages/oops/oops.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'getting-started/introduction', loadChildren: () => import('./pages/getting-started/introduction/introduction.module').then(m => m.IntroductionModule) },
  { path: 'getting-started/install', loadChildren: () => import('./pages/getting-started/install/install.module').then(m => m.InstallModule) },
  { path: 'getting-started/usage', loadChildren: () => import('./pages/getting-started/usage/usage.module').then(m => m.UsageModule) },
  { path: 'getting-started/icons', loadChildren: () => import('./pages/getting-started/icons/icons.module').then(m => m.IconsModule) },
  { path: 'getting-started/contribute', loadChildren: () => import('./pages/getting-started/contribute/contribute.module').then(m => m.ContributeModule) },
  { path: 'customize/builtin-themes', loadChildren: () => import('./pages/customize/builtin-themes/builtin-themes.module').then(m => m.BuiltinThemesModule) },
  { path: 'customize/customize-theme', loadChildren: () => import('./pages/customize/customize-theme/customize-theme.module').then(m => m.CustomizeThemeModule) },
  { path: 'customize/add-theme', loadChildren: () => import('./pages/customize/add-theme/add-theme.module').then(m => m.AddThemeModule) },
  { path: 'content/reboot', loadChildren: () => import('./pages/content/reboot/reboot.module').then(m => m.RebootModule) },
  { path: 'content/core', loadChildren: () => import('./pages/content/core/core.module').then(m => m.CoreModule) },
  { path: 'content/typography', loadChildren: () => import('./pages/content/typography/typography.module').then(m => m.TypographyModule) },
  { path: 'content/images', loadChildren: () => import('./pages/content/images/images.module').then(m => m.ImagesModule) },
  { path: 'content/tables', loadChildren: () => import('./pages/content/tables/tables.module').then(m => m.TablesModule) },
  { path: 'forms/form-control', loadChildren: () => import('./pages/forms/form-control/form-control.module').then(m => m.FormControlModule) },
  { path: 'components/alerts', loadChildren: () => import('./pages/components/alerts/alerts.module').then(m => m.AlertsModule) },
  { path: 'components/badges', loadChildren: () => import('./pages/components/badges/badges.module').then(m => m.BadgesModule) },
  { path: 'components/buttons', loadChildren: () => import('./pages/components/buttons/buttons.module').then(m => m.ButtonsModule) },
  { path: 'utilities/spacing', loadChildren: () => import('./pages/utilities/spacing/spacing.module').then(m => m.SpacingModule) },
  { path: 'utilities/colors', loadChildren: () => import('./pages/utilities/colors/colors.module').then(m => m.ColorsModule) },
  { path: 'utilities/borders', loadChildren: () => import('./pages/utilities/borders/borders.module').then(m => m.BordersModule) },
  { path: 'utilities/transitions', loadChildren: () => import('./pages/utilities/transitions/transitions.module').then(m => m.TransitionsModule) },
  {path: '**', component: OopsComponent},
];

@NgModule({
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
