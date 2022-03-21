export class usuarioModel {

  constructor(
    public id_usuario?: number,
    public nombre?: string,
    public apellido?: string,
    public email?: string,
    public dni?: number,
    public id_rol?: number,
    public ciclo?: number,
    public password?: string,
    public estado?: number,

  ) { }
}

