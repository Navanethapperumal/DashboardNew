import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { DashboardComponent } from './modules/dashboard/dashboard.component';
//import { PostsComponent } from './modules/posts/posts.component';
//import { FooterComponent } from './shared/components/footer/footer.component';
//import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatBadgeModule} from '@angular/material/badge'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list'
import {MatDividerModule} from '@angular/material/divider'
import {MatGridListModule} from '@angular/material/grid-list'
import  {MatExpansionModule} from '@angular/material/expansion'
import  {MatTabsModule} from '@angular/material/tabs'
import  {MatCardModule} from '@angular/material/card'
import  {MatStepperModule} from '@angular/material/stepper'
import  {MatFormFieldModule} from '@angular/material/form-field'
import  {MatInputModule} from '@angular/material/input'
import  {MatSelectModule} from '@angular/material/select'
import  {MatAutocompleteModule} from '@angular/material/autocomplete'
import  {MatCheckboxModule} from '@angular/material/checkbox'
import  {MatRadioModule} from '@angular/material/radio'
import  {MatDatepickerModule} from '@angular/material/datepicker'
import  {MatNativeDateModule} from '@angular/material/core'
import  {MatTooltipModule} from '@angular/material/tooltip'
import  {MatSnackBarModule} from '@angular/material/snack-bar'
import  {MatDialogModule} from '@angular/material/dialog'
import  {MatTableModule} from '@angular/material/table'
import  {MatSortModule} from '@angular/material/sort'
import  {MatPaginatorModule} from '@angular/material/paginator';
// import {DefaultComponent} from './layouts/default/default.component';
// import {SidebarComponent} from './shared/components/sidebar/sidebar.component';
// import {AreaComponent} from './shared/widgets/area/area.component';
// import {CardComponent} from './shared/widgets/card/card.component';
// import {PieComponent} from './shared/widgets/pie/pie.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { DefaultModule } from './layouts/default/default.module';

//import {  } from 'highcharts-angular';


@NgModule({
  declarations: [
    AppComponent,
    //DashboardComponent,
    //PostsComponent,
    //FooterComponent,
    //HeaderComponent,
    // DefaultComponent,
    // SidebarComponent,
    // AreaComponent,
    // CardComponent,
    // PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    DefaultModule,
  MatBadgeModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatTabsModule,
  MatCardModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatDialogModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }