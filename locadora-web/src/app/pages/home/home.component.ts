import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../../services/filmes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  _filmes = [];
  filmes = [];
  filmeSearch = '';
  filmesFiltrados = false;
  arrayListados = [];
  filmeExcluir = '';

  constructor(
    private filmesService: FilmesService
  ) {

  }

  ngOnInit(): void {

    this.filmes = this.filmesService.getFilmes();
  }

  search() {

    console.log(this.filmeSearch);

    if (this.filmeSearch === '') {
      this.filmes = [...this._filmes];
      this.filmesFiltrados = false;
      return;
    }

    this.filmes = this._filmes.filter(filme => {
      filme.nome.toUpperCase().includes(this.filmeSearch.toUpperCase());
    });
    this.filmesFiltrados = true;
  }

  exibirInfo(id: string) {
    const listado = this.arrayListados.indexOf(id);
    return listado === -1 ? false : true;
  }

  leiaMais(id: string) {
    const index = this.arrayListados.indexOf(id);
    if (index === -1) {
      this.arrayListados.push(id);
    } else {
      this.arrayListados.splice(index, 1);
    }

  }

  removerFilme(id: string) {
    this.filmes = this.filmesService.removeFilme(id);
  }


}
