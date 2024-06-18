let contraseña = prompt('Introduzca la contraseña.');

while (contraseña !== 'coderhouse') {
    alert('La contraseña es incorrecta.');
    contraseña = prompt('Introduzca una nueva contraseña.');
}

alert('Bienvenido!');

comprar ();

function comprar () {
   let quiere = prompt('Por favor, ingrese qué tipo de producto quiere comprar marcando la letra según corresponda: a) Zapatillas b) Buzos c) Remeras');


   switch (quiere) {
   //Si el usuario elije a) zapatillas
    case 'a':
        let zapa = prompt ('Elija qué zapatillas desea: a) Nike Airforce blancas b) Puma SuedeXL azules c) Adidas Campus verdes d) DC Pure negras')
        switch (zapa) {
            case 'a':
                let nike = prompt('¿Quiere realizar la compra de las Nike Airforce blancas?. Responda por "si" o "no"');
                if (nike === 'si') {
                    alert('Muchas gracias por su compra!');
                    return comprar ();
                } else {
                    alert('Compra cancelada')
                    return comprar ();
                }
                break;

                case 'b':
                    let puma = prompt('¿Quiere realizar la compra de las Puma SuedeXL azules? Responda por "si" o "no"');
                    if (puma === 'si') {
                        alert('Muchas gracias por su compra!');
                        return comprar ();
                    } else {
                        alert('Compra cancelada')
                        return comprar ();
                    }
                    break;

                    case 'c':
                        let adidas = prompt('¿Quiere realizar la compra de las Adidas Campus verdes? Responda por "si" o "no"');
                        if (adidas === 'si') {
                            alert('Muchas gracias por su compra!');
                            return comprar ();
                        } else {
                            alert('Compra cancelada');
                            return comprar ();
                        }
                        break;
            
                        case 'd':
                            let dc = prompt('¿Quiere realizar la compra de las DC Pure negras? Responda por "si" o "no"');
                            if (dc === 'si') {
                                alert('Muchas gracias por su compra!');
                           return comprar ();
                            } else {
                                alert ('Compra cancelada');
                                return comprar ();
                            }
                            break;
        
            default:
                alert('Error, por favor ingrese alguna de las opciones disponibles (a, b, c y d).');
                comprar ();
                break;

                
        }

        //Si el usuario elije b) buzos
case 'b':
        let buzo = prompt ('Elija qué buzo desea: a) Adidas b) Nike c) Topper');
        switch (buzo) {
            case 'a':
                let adidasb = prompt('¿Quiere realizar la compra del buzo Adidas?. Responda por "si" o "no"');
                if (adidasb === 'si') {
                    alert('Muchas gracias por su compra!');
                    return comprar ();
                } else {
                    alert('Compra cancelada')
                    return comprar ();
                }
                break;

                case 'b':
                    let puma = prompt('¿Quiere realizar la compra del buzo Nike? Responda por "si" o "no"');
                    if (puma === 'si') {
                        alert('Muchas gracias por su compra!');
                        return comprar ();
                    } else {
                        alert('Compra cancelada')
                        return comprar ();
                    }
                    break;

                    case 'c':
                        let adidas = prompt('¿Quiere realizar la compra del buzo Topper? Responda por "si" o "no"');
                        if (adidas === 'si') {
                            alert('Muchas gracias por su compra!');
                            return comprar ();
                        } else {
                            alert('Compra cancelada');
                            return comprar ();
                        }
                        break;
            
                
        
            default:
                alert('Error, por favor ingrese alguna de las opciones disponibles (a, b, c y d).');
                comprar ();
                break;

                
        }

        //Si el usuario elije c) remeras

        case 'c':
        let remera = prompt ('Elija qué remera desea: a) Blanca b) Negra c) Beige');
        switch (remera) {
            case 'a':
                let adidasb = prompt('¿Quiere realizar la compra de la remera negra?. Responda por "si" o "no"');
                if (adidasb === 'si') {
                    alert('Muchas gracias por su compra!');
                    return comprar ();
                } else {
                    alert('Compra cancelada')
                    return comprar ();
                }
                break;

                case 'b':
                    let puma = prompt('¿Quiere realizar la compra de la remera blanca? Responda por "si" o "no"');
                    if (puma === 'si') {
                        alert('Muchas gracias por su compra!');
                        return comprar ();
                    } else {
                        alert('Compra cancelada')
                        return comprar ();
                    }
                    break;

                    case 'c':
                        let adidas = prompt('¿Quiere realizar la compra de la remera beige? Responda por "si" o "no"');
                        if (adidas === 'si') {
                            alert('Muchas gracias por su compra!');
                            return comprar ();
                        } else {
                            alert('Compra cancelada');
                            return comprar ();
                        }
                        break;
            
                
        
            default:
                alert('Error, por favor ingrese alguna de las opciones disponibles (a, b, c y d).');
                comprar ();
                break;

                
        }


        break;
       
    default:
        break;
}
}