import { ConsultaService } from './../../service/consulta.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Consultas } from '../../models/consultas';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  //VARIABLE DE TIPO FORMULARIO
  consultaForm: FormGroup; 
  
  constructor(
    private consultaService: ConsultaService,
    private fb: FormBuilder,
    ) { 
      this.consultaForm = this.fb.group({
        nombre: ['', Validators.required],
        email: ['', Validators.required],
        whatsapp: ['', Validators.required],
        fecha_ingreso: ['', Validators.required],
        fecha_salida: ['', Validators.required],
        mensaje: ['', Validators.required]
      })
  }

  //Función para envíar datos
  realizarConsulta(){
    const Consulta : Consultas = {
      nombre: this.consultaForm.get('nombre')?.value,
      email: this.consultaForm.get('email')?.value,
      whatsapp: this.consultaForm.get('whatsapp')?.value,
      fecha_ingreso: this.consultaForm.get('fecha_ingreso')?.value,
      fecha_salida: this.consultaForm.get('fecha_salida')?.value,
      mensaje: this.consultaForm.get('mensaje')?.value,
    }
    this.consultaService.guardarConsulta(Consulta).subscribe({
      error: (e) => console.log(e)
    })

    this.consultaForm.reset()

  }
  

}
