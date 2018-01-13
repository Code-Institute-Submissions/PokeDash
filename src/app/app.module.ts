import { HttpModule } from '@angular/http';
import { PokemonDataService } from './services/pokemon-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './sections/dashboard/dashboard.component';
import { PokemonListComponent } from './sections/pokemon-list/pokemon-list.component';
import { appRoutes } from '../routes';

import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/charts/line-chart/line-chart.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { BattleStatusComponent } from './sections/battle-status/battle-status.component';
import { BattlesComponent } from './components/battles/battles.component';
import { PaginationComponent } from './components/pagination/pagination.component';

import { DataTableModule } from "angular2-datatable";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    PokemonListComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    BattleStatusComponent,
    BattlesComponent,
    PaginationComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), ChartsModule, HttpModule, DataTableModule],
  providers: [PokemonDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
