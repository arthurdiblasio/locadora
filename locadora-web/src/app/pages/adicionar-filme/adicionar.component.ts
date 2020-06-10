import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss']
})
export class AdicionarComponent implements OnInit {

  editando = false;
  filmeForm: FormGroup = this.formBuilder.group({
    id: [null],
    nome: [null, [Validators.required, Validators.min(2)]],
    capa: ['', Validators.required],
    elenco: [[], Validators.required],
    categoria: [null, Validators.required],
    sinopse: [null, Validators.required],
    classificacao: [null, Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder, private route: ActivatedRoute,
    private filmesService: FilmesService

  ) { }

  ngOnInit(): void {
    this.verificarParametros();
  }



  verificarParametros() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        const filme = this.filmesService.buscarPorId(params['id']);
        this.parseObjToForm(filme);
        this.editando = true;
      } else {
        this.editando = false;
      }
    });
  }

  parseFormToObj() {
    const form = this.filmeForm.value,
      filme = form;


    return filme;
  }

  parseObjToForm(filme) {
    console.log(filme);
    this.filmeForm = this.formBuilder.group({
      id: [filme.id],
      nome: [filme.nome],
      capa: [''],
      elenco: [filme.elenco],
      classificacao: [filme.classificacao],
      sinopse: [filme.sinopse],
      categoria: [filme.categoria]
    });
  }

  salvar() {
    const filme = this.parseFormToObj();
    this.filmesService.criarFilme(filme);
  }

}
