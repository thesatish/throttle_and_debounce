import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './user-management/user-management.component';
import { RolesAndPermissionsComponent } from './roles-and-permissions/roles-and-permissions.component';
import { ModuleManagementComponent } from './module-management/module-management.component';
import { RolesComponent } from './roles/roles.component';

const routes: Routes = [
  { path: 'user-management', component: UserManagementComponent },
  { path: 'roles-and-permissions', component: RolesAndPermissionsComponent },
  { path: 'module-management', component: ModuleManagementComponent },
  { path: 'roles', component: RolesComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
