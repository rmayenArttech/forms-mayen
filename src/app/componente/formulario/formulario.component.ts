import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Estudiante } from 'src/app/modelo/estudiante';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  nombreFC = new FormControl('', [Validators.required]);
  segNombreFC = new FormControl('');
  apellidoPaternoFC = new FormControl('', [Validators.required]);
  apellidoMaternoFC = new FormControl('');
  fechaNacimientoFC = new FormControl('', [Validators.required]);
  telefonoFC = new FormControl('', [Validators.required]);
  mailFC = new FormControl('', [Validators.required]);
  avenidaFC = new FormControl('', [Validators.required]);
  numeroFC = new FormControl('', [Validators.required]);
  coloniaFC = new FormControl('', [Validators.required]);
  ciudadFC = new FormControl('', [Validators.required]);
  municipioFC = new FormControl('', [Validators.required]);
  cpFC = new FormControl('', [Validators.required]);
  carreraFC = new FormControl('');
  matriculaFC = new FormControl('', [Validators.required]);
  grupoFC = new FormControl('', [Validators.required]);

  estudiante: Estudiante ={
    nombre: '',
    segNombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    fechaNacimiento: '',
    telefono: '',
    mail: '',
    avenida: '',
    numero : '',
    colonia: '',
    ciudad: '',
    municipio: '',
    cp: '',
    carrera: '',
    matricula: '',
    grupo: ''
  }


  matcher = new MyErrorStateMatcher();

  guardarRegistro(){
    this.setObject();
    console.log("alumno creado con exito: " + (JSON.stringify(this.estudiante) ))
  }

  setObject(){
    this.estudiante.nombre = this.nombreFC.value;
    this.estudiante.segNombre = this.segNombreFC.value;
    this.estudiante.apellidoPaterno = this.apellidoPaternoFC.value;
    this.estudiante.apellidoMaterno= this.apellidoMaternoFC.value;
    this.estudiante.fechaNacimiento= this.fechaNacimientoFC.value;
    this.estudiante.telefono= this.telefonoFC.value;
    this.estudiante.mail= this.mailFC.value;
    this.estudiante.avenida= this.avenidaFC.value;
    this.estudiante.numero = this.numeroFC.value;
    this.estudiante.colonia= this.coloniaFC.value;
    this.estudiante.ciudad= this.ciudadFC.value;
    this.estudiante.municipio= this.municipioFC.value;
    this.estudiante.cp= this.cpFC.value;
    this.estudiante.carrera= this.carreraFC.value;
    this.estudiante.matricula= this.matriculaFC.value;
    this.estudiante.grupo= this.grupoFC.value;
  }
}
