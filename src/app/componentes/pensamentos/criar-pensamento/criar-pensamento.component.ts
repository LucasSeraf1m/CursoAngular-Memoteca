import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
=======
>>>>>>> 2a5fd897100e7261b93f46f74bdb09a70374e978

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit{
<<<<<<< HEAD

  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void{
    this.formulario = this.formBuilder.group({
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      autoria: ['', Validators.compose ([
        Validators.required,
        Validators.minLength(3)
      ])],
      modelo: ['modelo1']
    })
  }

  criarPensamento(){
    console.log(this.formulario.get('autoria')?.errors);
    if(this.formulario.valid){
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      })
    }
=======
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(
    private service: PensamentoService,
    private router: Router
  ){}

  ngOnInit(): void{
  }

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
>>>>>>> 2a5fd897100e7261b93f46f74bdb09a70374e978
  }

  cancelarPensamento(){
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
