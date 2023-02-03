import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioComponent } from './componente/formulario/formulario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MudulosModule } from './mudulos.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { CursoComponent } from './componente/curso/curso.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    CursoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MudulosModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
