import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';
import { TableApiComponent } from './components/table-api/table-api.component';
import { EditRouteComponent } from './components/edit-route/edit-route.component';

const appRoutes: Routes = [
  { path: 'table-api', component: TableApiComponent, data: { animation: 'isRight'} },
  { path: 'edit-route', component: EditRouteComponent, data: { animation: 'isLeft'} },
  { path: '', component: TableApiComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    TableApiComponent,
    EditRouteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
     // { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
