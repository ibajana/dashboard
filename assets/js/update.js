let runScripts = () => {
    let chart_bars = document.getElementById('chart-bars')

    let icons = document.getElementsByTagName('i')



    let cards = document.getElementsByClassName('card')

}
let modifyText = () => {
    let listOfP = document.getElementsByTagName('p')
    let elementP = listOfP[3]
    elementP.innerHTML = 'Dinero actual'

    let listOfH4 = document.getElementsByTagName('h4')
    let elementH4 = listOfH4[0]
    elementH4.innerHTML = '$301k'
}

let updateData = () => {

    let data = [{
        title: 'Usuarios actuales',
        value: '3,200'
    },
    {
        title: 'Nuevos clientes',
        value: '4,215'
    },
    {
        title: 'Ventas',
        value: '$121,520'
    }];

    let [users, clients, sales] = data;

    let { title: title_users, value: value_users } = users;
    let { title: title_clients, value: value_clients } = clients;
    let { title: title_sales, value: value_sales } = sales;


    let message_users = `<p class="text-sm mb-0 text-capitalize">${title_users}</p><h4 class="mb-0">${value_users}</h4>`;
    let message_clients = `<p class="text-sm mb-0 text-capitalize">${title_clients}</p><h4 class="mb-0">${value_clients}</h4>`;
    let message_sales = `<p class="text-sm mb-0 text-capitalize">${title_sales}</p><h4 class="mb-0">${value_sales}</h4>`;


    let listOfElements = document.getElementsByClassName('text-end pt-1')

    let [, second, third, fourth] = listOfElements;

    second.innerHTML = message_users;
    third.innerHTML = message_clients;
    fourth.innerHTML = message_sales;
}

let modifyIndicators = () => {

    let cambios = [
        {
            valor_previo: 250,
            valor_actual: 301,
            mensaje_tiempo: 'que la semana anterior'
        },
        {
            valor_previo: 3510,
            valor_actual: 3200,
            mensaje_tiempo: 'que la semana anterior'
        },
        {
            valor_previo: 3920,
            valor_actual: 4215,
            mensaje_tiempo: 'que ayer'
        },
        {
            valor_previo: 110200,
            valor_actual: 121520,
            mensaje_tiempo: 'que ayer'
        }
    ]

    let [obj1, obj2, obj3, obj4] = cambios

    let fPorcentaje = (valor1, valor2) => {
        let porcentaje_de_cambio = (valor2 - valor1) * 100 / valor1
        return parseInt(porcentaje_de_cambio)
    };

    let { valor_previo: valor_previo_obj1, valor_actual: valor_actual_obj1, mensaje_tiempo: mensaje_tiempo_obj1 } = obj1
    let { valor_previo: valor_previo_obj2, valor_actual: valor_actual_obj2, mensaje_tiempo: mensaje_tiempo_obj2 } = obj2
    let { valor_previo: valor_previo_obj3, valor_actual: valor_actual_obj3, mensaje_tiempo: mensaje_tiempo_obj3 } = obj3
    let { valor_previo: valor_previo_obj4, valor_actual: valor_actual_obj4, mensaje_tiempo: mensaje_tiempo_obj4 } = obj4

    let porcentaje1 = fPorcentaje(valor_previo_obj1, valor_actual_obj1);
    if (porcentaje1 > 0) {
        porcentaje1 = "+" + porcentaje1;
        clase_cambio1 = 'text-success';
    }
    else {
        clase_cambio1 = 'text-danger';
    }

    let porcentaje2 = fPorcentaje(valor_previo_obj2, valor_actual_obj2);
    if (porcentaje2 > 0) {
        porcentaje2 = "+" + porcentaje2
        clase_cambio2 = 'text-success';
    }
    else {
        clase_cambio2 = 'text-danger';
    }

    let porcentaje3 = fPorcentaje(valor_previo_obj3, valor_actual_obj3);
    if (porcentaje3 > 0) {
        porcentaje3 = "+" + porcentaje3
        clase_cambio3 = 'text-success';
    }
    else {
        clase_cambio3 = 'text-danger';
    }

    let porcentaje4 = fPorcentaje(valor_previo_obj4, valor_actual_obj4);
    if (porcentaje4 > 0) {
        porcentaje4 = "+" + porcentaje4
        clase_cambio4 = 'text-success';
    }
    else {
        clase_cambio4 = 'text-danger';
    }




    let message1 =
        `<p class="mb-0"><span class="text-sm ${clase_cambio1} font-weight-bolder"> ${porcentaje1}%</span> ${mensaje_tiempo_obj1} </p>`;

    let message2 =
        `<p class="mb-0"><span class="text-sm ${clase_cambio2} font-weight-bolder"> ${porcentaje2}%</span> ${mensaje_tiempo_obj2} </p>`;

    let message3 =
        `<p class="mb-0"><span class="text-sm ${clase_cambio3} font-weight-bolder"> ${porcentaje3}%</span> ${mensaje_tiempo_obj3} </p>`;

    let message4 =
        `<p class="mb-0"><span class="text-sm ${clase_cambio4} font-weight-bolder"> ${porcentaje4}%</span> ${mensaje_tiempo_obj4} </p>`;

    let listOfElements = document.getElementsByClassName('mb-0')
    let element1 = listOfElements[8]
    let element2 = listOfElements[11]
    let element3 = listOfElements[14]
    let element4 = listOfElements[17]

    console.log(listOfElements)
    element1.innerHTML = message1
    element2.innerHTML = message2
    element3.innerHTML = message3
    element4.innerHTML = message4

}

modifyIndicators()
updateData()
runScripts()
modifyText()