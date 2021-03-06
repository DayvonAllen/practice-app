import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",

    children: [
      {
        path: "",
        loadChildren: () =>
          import("./home/home.module").then(m => m.HomePageModule)
      },
      {
        path: "words",
        loadChildren: "./word-menu/word-menu.module#WordMenuPageModule"
      },
      {
        path: "usage",
        loadChildren: "./usage/usage.module#UsagePageModule"
      },
      {
        path: "words/:wordId",
        loadChildren: "./word-details/word-details.module#WordDetailsPageModule"
      }
    ]
  },
  { path: 'word-menu', loadChildren: './word-menu/word-menu.module#WordMenuPageModule' },
  { path: 'usage', loadChildren: './usage/usage.module#UsagePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
