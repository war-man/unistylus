import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

import {HomeComponent} from './pages/home/home.component';
import {OopsComponent} from './pages/oops/oops.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'getting-started/introduction', loadChildren: () => import('./pages/getting-started/introduction/introduction.module').then(m => m.IntroductionPageModule) },
  { path: 'getting-started/install', loadChildren: () => import('./pages/getting-started/install/install.module').then(m => m.InstallPageModule) },
  { path: 'getting-started/usage', loadChildren: () => import('./pages/getting-started/usage/usage.module').then(m => m.UsagePageModule) },
  { path: 'getting-started/contribute', loadChildren: () => import('./pages/getting-started/contribute/contribute.module').then(m => m.ContributePageModule) },
  { path: 'customize/builtin-themes', loadChildren: () => import('./pages/customize/builtin-themes/builtin-themes.module').then(m => m.BuiltinThemesPageModule) },
  { path: 'customize/customize-theme', loadChildren: () => import('./pages/customize/customize-theme/customize-theme.module').then(m => m.CustomizeThemePageModule) },
  { path: 'customize/add-theme', loadChildren: () => import('./pages/customize/add-theme/add-theme.module').then(m => m.AddThemePageModule) },
  { path: 'content/reboot', loadChildren: () => import('./pages/content/reboot/reboot.module').then(m => m.RebootPageModule) },
  { path: 'content/core', loadChildren: () => import('./pages/content/core/core.module').then(m => m.CorePageModule) },
  { path: 'content/typography', loadChildren: () => import('./pages/content/typography/typography.module').then(m => m.TypographyPageModule) },
  { path: 'content/images', loadChildren: () => import('./pages/content/images/images.module').then(m => m.ImagesPageModule) },
  { path: 'content/tables', loadChildren: () => import('./pages/content/tables/tables.module').then(m => m.TablesPageModule) },
  { path: 'forms/form-controls', loadChildren: () => import('./pages/forms/form-control/form-control.module').then(m => m.FormControlPageModule) },
  { path: 'components/alerts', loadChildren: () => import('./pages/components/alerts/alerts.module').then(m => m.AlertsPageModule) },
  { path: 'components/badges', loadChildren: () => import('./pages/components/badges/badges.module').then(m => m.BadgesPageModule) },
  { path: 'components/buttons', loadChildren: () => import('./pages/components/buttons/buttons.module').then(m => m.ButtonsPageModule) },
  { path: 'components/icons', loadChildren: () => import('./pages/components/icons/icons.module').then(m => m.IconsPageModule) },
  { path: 'utilities/spacing', loadChildren: () => import('./pages/utilities/spacing/spacing.module').then(m => m.SpacingPageModule) },
  { path: 'utilities/background', loadChildren: () => import('./pages/utilities/background/background.module').then(m => m.BackgroundPageModule) },
  { path: 'utilities/colors', loadChildren: () => import('./pages/utilities/colors/colors.module').then(m => m.ColorsPageModule) },
  { path: 'utilities/borders', loadChildren: () => import('./pages/utilities/borders/borders.module').then(m => m.BordersPageModule) },
  { path: 'utilities/transitions', loadChildren: () => import('./pages/utilities/transitions/transitions.module').then(m => m.TransitionsPageModule) },
  {path: '**', component: OopsComponent},
];

@NgModule({
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
