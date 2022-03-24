import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CompanyComponent } from "./company/company.component";
import { HomeComponent } from "./home/home.component";

const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'company', component: CompanyComponent},
    
]
/**
 * @param ModuleWithProviders seleciona o caminho da página a ser carregada
 */

 export const appRoutingProviders: any[] = [];
 export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);