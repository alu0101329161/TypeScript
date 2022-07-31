import {Deportista} from './models/deportista';

// Clase para las operaciones
export class Crud {
  public static add(deportista) {
    deportista.save().then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
  public static search(id: string) {
    Deportista.findOne({
      dni: `${id}`,
    }).then((result) => {
      if (!result) {
        console.log(result);
      } else {
        console.log(result);
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  public static delete(id: string) {
    const filter = {dni: id};
    Deportista.findOneAndDelete(filter).then((result) => {
      if (!result) {
        console.log(result);
      } else {
        console.log(result);
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  public static update(id: string, update) {
    const filter = {dni: id};
    Deportista.findOneAndUpdate(filter, update, {
      new: true,
      runValidators: true,
    }).then((result) => {
      if (!result) {
        console.log('result not found');
      } else {
        console.log(result);
      }
    }).catch((error) => {
      console.log(error);
    });
  }
}
