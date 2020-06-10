export class Photo {
  key: string;
  file: File;
  nome: string;
  url: string;

  constructor(file: File) {
    this.file = file;
    this.nome = `${Date.now()}-${file.name}`;
  }
}
