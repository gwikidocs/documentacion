import { Component } from '@angular/core';

import { v4 as uuid } from 'uuid'

export interface IUsuario {
  id: string;
  nombre: string;
  modificado: string;
  modificadoPor: string;
  creado: string;
  creadoPor: string;
}

const USER_DATA: IUsuario[] = [];

const COLUMNS_SCHEMA = [
  {
    key: "nombre",
    type: "text",
    label: "Nombre"
  },
  {
    key: "modificado",
    type: "text",
    label: "Modificado"
  },
  {
    key: "modificadoPor",
    type: "text",
    label: "Modificado por"
  },
  {
    key: "creado",
    type: "date",
    label: "Creado"
  },
  {
    key: "creadoPor",
    type: "text",
    label: "CreadoPor"
  },
  {
    key: "esEditar",
    type: "esEditar",
    label: ""
  }
]

@Component({
  selector: 'inicio-salidas',
  templateUrl: './salidas.component.html',
  styleUrls: ['./salidas.component.scss']
})
export class SalidasComponent {

  displayedColumns: string[] = COLUMNS_SCHEMA.map(col => col.key);
  dataSource = USER_DATA;
  columnsSchema: any = COLUMNS_SCHEMA;

  agregarFila() {
    const newRow = { id: uuid(), nombre: '', modificado: '', modificadoPor: '', creado: '', creadoPor: '', esEditar: true };
    this.dataSource = [newRow, ...this.dataSource];
  }

  eliminarFila(id: string) {
    this.dataSource = this.dataSource.filter((u) => u.id !== id);
  }
}
