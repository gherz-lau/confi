import { Component } from '@angular/core';
import { Participante } from './participantes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  file: any; //DECLARAS VARIABLE FILE TIPO ANY
  participantes: Array<Participante> = [];
  premios: Array<string> = [];

  fileChanged(e: any) {
    //ESTA ES LA FUNCION
    //CARGAMOS EL ARCHIVO

    this.file = e.target.files[0];
    let fileReader = new FileReader();

    fileReader.onload = (e) => {
      //LO DIVIDIMOS Y GUARDAMOS EN UN ARRAY LLAMADO "ALL TEXT LINES"
      let csv: any = fileReader.result;
      let allTextLines = []; //DECLARAS UN ARREGLO
      allTextLines = csv.split(/\n/); //guardas el csv en el arreglo, partiendolo cada salto de linea

      //eliminamos la ultima posicion del array, que es un salto de línea (vacío)
      let longitud = allTextLines.length;
      allTextLines.splice(longitud - 1, 1);
      longitud = allTextLines.length;

      for (let i = 0; i < longitud; i++) {
        const newPlayer = new Participante();
        newPlayer.nombre = allTextLines[i];
        this.participantes.push(newPlayer);
      }
      console.log('participantes', this.participantes);
    };

    fileReader.readAsText(this.file);
  }
  filePremios(e: any) {
    this.file = e.target.files[0];
    let fileReader = new FileReader();

    fileReader.onload = (e) => {
      //LO DIVIDIMOS Y GUARDAMOS EN UN ARRAY LLAMADO "ALL TEXT LINES"
      let csv: any = fileReader.result;
      this.premios = csv.split(/\n/); //guardas el csv en el arreglo, partiendolo cada salto de linea
      console.log('premios', this.premios);
    };

    fileReader.readAsText(this.file);
  }

  generar() {
    const ganadores = this.premios.length;
    if (this.participantes.length < ganadores) {
      alert('estas loco esto no se puede');
      return;
    }

    while (this.premios.length > 0) {
      const index = this.getRandomArbitrary(0, this.participantes.length - 1);
      if (this.participantes[index].premio === '') {
        this.participantes[index].premio = this.premios[0];
        this.premios.shift();
      }
    }
  }
  getRandomArbitrary(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }
}
