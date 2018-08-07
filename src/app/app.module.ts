import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DetailedComponent } from './detailed/detailed.component';
import { ListComponent } from './list/list.component';

const appRoutes: Routes = [
  { path: 'detailed', component: DetailedComponent },
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  declarations: [AppComponent, ListComponent, DetailedComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
