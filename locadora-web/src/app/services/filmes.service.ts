import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  _filmes = [
    {
      id: '0',
      nome: 'Bad Boys para sempre',
      sinopse: 'lorem ipsum fdsbfds fdsbnufdn s ',
      classificacao: '14',
      capa: 'https://firebasestorage.googleapis.com/v0/b/pap-portal-dev.appspot.com/o/testeImgs%2F0608065.jpg?alt=media&token=0a43a61d-c982-48be-92d5-c0c018d9b6d2',
      categoria: 'Acao e drama',
      elenco: 'Arthur, Eduardo, Carletto'

    }, {
      id: '1',
      nome: 'Escuridão',
      sinopse: 'lorem ipsum fdsbfds fdsbnufdn s ',
      classificacao: '14',
      capa: 'https://firebasestorage.googleapis.com/v0/b/pap-portal-dev.appspot.com/o/testeImgs%2F164847_000_p.jpg?alt=media&token=66d50598-1fb4-4920-a50a-ba055b3a47a6',
      categoria: 'Acao e drama',
      elenco: 'Arthur, Eduardo, Carletto'

    }, {
      id: '2',
      nome: 'Escuridão',
      sinopse: 'lorem ipsum fdsbfds fdsbnufdn s ',
      classificacao: '14',
      capa: 'https://firebasestorage.googleapis.com/v0/b/pap-portal-dev.appspot.com/o/testeImgs%2F22466-cartaz.jpg?alt=media&token=7131311e-a262-4d99-935b-6f4b5ed95d89',
      categoria: 'Acao e drama',
      elenco: 'Arthur, Eduardo, Carletto'

    }, {
      id: '3',
      nome: 'Escuridão',
      sinopse: 'lorem ipsum fdsbfds fdsbnufdn s ',
      classificacao: '14',
      capa: 'https://firebasestorage.googleapis.com/v0/b/pap-portal-dev.appspot.com/o/testeImgs%2F22968-cartaz.jpg?alt=media&token=c940fe31-6396-4dd3-9d67-b73262af6605',
      categoria: 'Acao e drama',
      elenco: 'Arthur, Eduardo, Carletto'

    },
    {
      id: '4',
      nome: 'Bad Boys para sempre',
      sinopse: 'lorem ipsum fdsbfds fdsbnufdn s ',
      classificacao: '14',
      capa: 'https://firebasestorage.googleapis.com/v0/b/pap-portal-dev.appspot.com/o/testeImgs%2F0608065.jpg?alt=media&token=0a43a61d-c982-48be-92d5-c0c018d9b6d2',
      categoria: 'Acao e drama',
      elenco: 'Arthur, Eduardo, Carletto'

    }, {
      id: '5',
      nome: 'Escuridão',
      sinopse: 'lorem ipsum fdsbfds fdsbnufdn s ',
      classificacao: '14',
      capa: 'https://firebasestorage.googleapis.com/v0/b/pap-portal-dev.appspot.com/o/testeImgs%2F164847_000_p.jpg?alt=media&token=66d50598-1fb4-4920-a50a-ba055b3a47a6',
      categoria: 'Acao e drama',
      elenco: 'Arthur, Eduardo, Carletto'

    }, {
      id: '6',
      nome: 'Escuridão',
      sinopse: 'lorem ipsum fdsbfds fdsbnufdn s ',
      classificacao: '14',
      capa: 'https://firebasestorage.googleapis.com/v0/b/pap-portal-dev.appspot.com/o/testeImgs%2F22466-cartaz.jpg?alt=media&token=7131311e-a262-4d99-935b-6f4b5ed95d89',
      categoria: 'Acao e drama',
      elenco: 'Arthur, Eduardo, Carletto'

    }, {
      id: '7',
      nome: 'Escuridão',
      sinopse: 'lorem ipsum fdsbfds fdsbnufdn s ',
      classificacao: '14',
      capa: 'https://firebasestorage.googleapis.com/v0/b/pap-portal-dev.appspot.com/o/testeImgs%2F22968-cartaz.jpg?alt=media&token=c940fe31-6396-4dd3-9d67-b73262af6605',
      categoria: 'Acao e drama',
      elenco: 'Arthur, Eduardo, Carletto'

    },
    {
      id: '8',
      nome: 'Bad Boys para sempre',
      sinopse: 'lorem ipsum fdsbfds fdsbnufdn s ',
      classificacao: '14',
      capa: 'https://firebasestorage.googleapis.com/v0/b/pap-portal-dev.appspot.com/o/testeImgs%2F0608065.jpg?alt=media&token=0a43a61d-c982-48be-92d5-c0c018d9b6d2',
      categoria: 'Acao e drama',
      elenco: 'Arthur, Eduardo, Carletto'

    }, {
      id: '9',
      nome: 'Escuridão',
      sinopse: 'lorem ipsum fdsbfds fdsbnufdn s ',
      classificacao: '14',
      capa: 'https://firebasestorage.googleapis.com/v0/b/pap-portal-dev.appspot.com/o/testeImgs%2F164847_000_p.jpg?alt=media&token=66d50598-1fb4-4920-a50a-ba055b3a47a6',
      categoria: 'Acao e drama',
      elenco: 'Arthur, Eduardo, Carletto'

    }, {
      id: '10',
      nome: 'Escuridão',
      sinopse: 'lorem ipsum fdsbfds fdsbnufdn s ',
      classificacao: '14',
      capa: 'https://firebasestorage.googleapis.com/v0/b/pap-portal-dev.appspot.com/o/testeImgs%2F22466-cartaz.jpg?alt=media&token=7131311e-a262-4d99-935b-6f4b5ed95d89',
      categoria: 'Acao e drama',
      elenco: 'Arthur, Eduardo, Carletto'

    }, {
      id: '11',
      nome: 'Escuridão',
      sinopse: 'lorem ipsum fdsbfds fdsbnufdn s ',
      classificacao: '14',
      capa: 'https://firebasestorage.googleapis.com/v0/b/pap-portal-dev.appspot.com/o/testeImgs%2F22968-cartaz.jpg?alt=media&token=c940fe31-6396-4dd3-9d67-b73262af6605',
      categoria: 'Acao e drama',
      elenco: 'Arthur, Eduardo, Carletto'

    }
  ];

  constructor() { }

  getFilmes() {
    this._filmes = [
      {
        id: '0',
        nome: 'Bad Boys para sempre',
        sinopse: 'lorem ipsum fdsbfds fdsbnufdn s ',
        classificacao: '14',
        capa: 'https://firebasestorage.googleapis.com/v0/b/pap-portal-dev.appspot.com/o/testeImgs%2F0608065.jpg?alt=media&token=0a43a61d-c982-48be-92d5-c0c018d9b6d2',
        categoria: 'Acao e drama',
        elenco: 'Arthur, Eduardo, Carletto'

      }, {
        id: '1',
        nome: 'Escuridão',
        sinopse: 'lorem ipsum fdsbfds fdsbnufdn s ',
        classificacao: '14',
        capa: 'https://firebasestorage.googleapis.com/v0/b/pap-portal-dev.appspot.com/o/testeImgs%2F164847_000_p.jpg?alt=media&token=66d50598-1fb4-4920-a50a-ba055b3a47a6',
        categoria: 'Acao e drama',
        elenco: 'Arthur, Eduardo, Carletto'

      }, {
        id: '2',
        categoria: 'Acao e drama',
        nome: 'Escuridão',
        sinopse: 'lorem ipsum fdsbfds fdsbnufdn s ',
        classificacao: '14',
        capa: 'https://firebasestorage.googleapis.com/v0/b/pap-portal-dev.appspot.com/o/testeImgs%2F22466-cartaz.jpg?alt=media&token=7131311e-a262-4d99-935b-6f4b5ed95d89',
        elenco: 'Arthur, Eduardo, Carletto'

      }, {
        id: '3',
        nome: 'Escuridão',
        sinopse: 'lorem ipsum fdsbfds fdsbnufdn s ',
        classificacao: '14',
        capa: 'https://firebasestorage.googleapis.com/v0/b/pap-portal-dev.appspot.com/o/testeImgs%2F22968-cartaz.jpg?alt=media&token=c940fe31-6396-4dd3-9d67-b73262af6605',
        categoria: 'Acao e drama',
        elenco: 'Arthur, Eduardo, Carletto'

      },
      {
        id: '4',
        nome: 'Bad Boys para sempre',
        sinopse: 'lorem ipsum fdsbfds fdsbnufdn s ',
        classificacao: '14',
        capa: 'https://firebasestorage.googleapis.com/v0/b/pap-portal-dev.appspot.com/o/testeImgs%2F0608065.jpg?alt=media&token=0a43a61d-c982-48be-92d5-c0c018d9b6d2',
        categoria: 'Acao e drama',
        elenco: 'Arthur, Eduardo, Carletto'

      }, {
        id: '5',
        nome: 'Escuridão',
        sinopse: 'lorem ipsum fdsbfds fdsbnufdn s ',
        classificacao: '14',
        capa: 'https://firebasestorage.googleapis.com/v0/b/pap-portal-dev.appspot.com/o/testeImgs%2F164847_000_p.jpg?alt=media&token=66d50598-1fb4-4920-a50a-ba055b3a47a6',
        categoria: 'Acao e drama',
        elenco: 'Arthur, Eduardo, Carletto'

      }, {
        id: '6',
        nome: 'Escuridão',
        sinopse: 'lorem ipsum fdsbfds fdsbnufdn s ',
        classificacao: '14',
        capa: 'https://firebasestorage.googleapis.com/v0/b/pap-portal-dev.appspot.com/o/testeImgs%2F22466-cartaz.jpg?alt=media&token=7131311e-a262-4d99-935b-6f4b5ed95d89',
        categoria: 'Acao e drama',
        elenco: 'Arthur, Eduardo, Carletto'

      }, {
        id: '7',
        nome: 'Escuridão',
        sinopse: 'lorem ipsum fdsbfds fdsbnufdn s ',
        classificacao: '14',
        capa: 'https://firebasestorage.googleapis.com/v0/b/pap-portal-dev.appspot.com/o/testeImgs%2F22968-cartaz.jpg?alt=media&token=c940fe31-6396-4dd3-9d67-b73262af6605',
        categoria: 'Acao e drama',
        elenco: 'Arthur, Eduardo, Carletto'

      },
      {
        id: '8',
        nome: 'Bad Boys para sempre',
        sinopse: 'lorem ipsum fdsbfds fdsbnufdn s ',
        classificacao: '14',
        capa: 'https://firebasestorage.googleapis.com/v0/b/pap-portal-dev.appspot.com/o/testeImgs%2F0608065.jpg?alt=media&token=0a43a61d-c982-48be-92d5-c0c018d9b6d2',
        categoria: 'Acao e drama',
        elenco: 'Arthur, Eduardo, Carletto'

      }, {
        id: '9',
        nome: 'Escuridão',
        sinopse: 'lorem ipsum fdsbfds fdsbnufdn s ',
        classificacao: '14',
        capa: 'https://firebasestorage.googleapis.com/v0/b/pap-portal-dev.appspot.com/o/testeImgs%2F164847_000_p.jpg?alt=media&token=66d50598-1fb4-4920-a50a-ba055b3a47a6',
        categoria: 'Acao e drama',
        elenco: 'Arthur, Eduardo, Carletto'

      }, {
        id: '10',
        nome: 'Escuridão',
        sinopse: 'lorem ipsum fdsbfds fdsbnufdn s ',
        classificacao: '14',
        capa: 'https://firebasestorage.googleapis.com/v0/b/pap-portal-dev.appspot.com/o/testeImgs%2F22466-cartaz.jpg?alt=media&token=7131311e-a262-4d99-935b-6f4b5ed95d89',
        categoria: 'Acao e drama',
        elenco: 'Arthur, Eduardo, Carletto'

      }, {
        id: '11',
        nome: 'Escuridão',
        sinopse: 'lorem ipsum fdsbfds fdsbnufdn s ',
        classificacao: '14',
        capa: 'https://firebasestorage.googleapis.com/v0/b/pap-portal-dev.appspot.com/o/testeImgs%2F22968-cartaz.jpg?alt=media&token=c940fe31-6396-4dd3-9d67-b73262af6605',
        categoria: 'Acao e drama',
        elenco: 'Arthur, Eduardo, Carletto'

      }
    ];
    return this._filmes;
  }

  removeFilme(id: string) {
    this._filmes = this._filmes.filter(filme => filme.id !== id);
    return this._filmes;
  }

  buscarPorId(id: string) {
    return this._filmes.find(filme => filme.id === id);
  }

  criarFilme(filme) {
    this._filmes.push(filme);
    return this._filmes;
  }

}
