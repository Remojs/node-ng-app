import { Component } from '@angular/core';
import { ConsultaService } from 'src/app/service/consulta.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Consultas } from '../../models/consultas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  //Creamos una variable de tipo formulario
  consultaForm: FormGroup;

  constructor(
    private consultaService: ConsultaService,
    private formBuilder: FormBuilder,
    private router: Router
    ) {
      this.consultaForm = this.formBuilder.group({
        nombre: ['', Validators.required],
        email: ['', Validators.required],
        whatsapp: ['', Validators.required],
        fecha_ingreso: ['', Validators.required],
        fecha_salida: ['', Validators.required],
        mensaje: ['', Validators.required]
      })
    }

    //función para enviar datos
    realizarConsulta(){
      const Consulta: Consultas = {
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

      setTimeout(() => {
        this.router.navigate(['home'])
      }, 2000)

    }


}
