function passwordFuerza(password) {

        var fuerza = 0;

        if(password.match(/[A-Z][0-9]+/)) {
            fuerza +=1;
        }
        if(password.match(/[$%&/()+-]+/)) {
            fuerza +=1;
        }
        if(password.length >= 8) {
            fuerza += 1;
        } 

        switch(fuerza) {
            
            case 0:
                console.log('nada')
                break
            case 1:
                console.log('debil')
                break
            case 2:
                console.log('normal')
                break
            case 3:
                console.log('normal')
                break
            case 4:
                console.log('fuerte')
                break
        }

    }

    passwordFuerza("hola");
    