import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
=======
>>>>>>> 2a5fd897100e7261b93f46f74bdb09a70374e978

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit{
<<<<<<< HEAD

  formulario!: FormGroup;
=======
  pensamento: Pensamento = {
    id: 0,
    conteudo: "",
    autoria: '',
    modelo: ''
  }
>>>>>>> 2a5fd897100e7261b93f46f74bdb09a70374e978

  constructor(
    private service: PensamentoService,
    private router: Router,
<<<<<<< HEAD
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
=======
    private route: ActivatedRoute
>>>>>>> 2a5fd897100e7261b93f46f74bdb09a70374e978
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
<<<<<<< HEAD
      this.formulario = this.formBuilder.group({
        id: [pensamento.id],
        conteudo: [pensamento.conteudo, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
        autoria: [pensamento.autoria, Validators.compose ([
          Validators.required,
          Validators.minLength(3)
        ])],
        modelo: [pensamento.modelo]
      })
=======
      this.pensamento = pensamento
>>>>>>> 2a5fd897100e7261b93f46f74bdb09a70374e978
    })
  }

  editarPensamento() {
<<<<<<< HEAD
    this.service.editar(this.formulario.value).subscribe(() => {
=======
    this.service.editar(this.pensamento).subscribe(() => {
>>>>>>> 2a5fd897100e7261b93f46f74bdb09a70374e978
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelarPensamento() {
    this.router.navigate(['/listarPensamento'])
  }
<<<<<<< HEAD

  habilitarBotao(): string{
    if(this.formulario.valid){
      return 'botao'
    }else{
      return 'botao__desabilitado'
    }
  }
=======
>>>>>>> 2a5fd897100e7261b93f46f74bdb09a70374e978
}
