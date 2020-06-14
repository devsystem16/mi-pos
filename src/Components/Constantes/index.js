const ambiente = "local"

let ipServer = ""
let puerto = "9000"
let http = ""

if (ambiente === "prod") {
    ipServer = "http://localhost"
    http = `${ipServer}`
} else {
    ipServer = "http://localhost"
    http = `${ipServer}:${puerto}`
}

const ApiMiPos = `${http}/api/v1/`

 
// Endpoints 
export const API_BALANCE = ApiMiPos + "cashier/balance"
export const API_ABRIR_DIA = ApiMiPos + "cashier/balance/open/day"
export const API_CERRAR_DIA = ApiMiPos + "cashier/balance/close/day"
export const API_BALANCE_OPEN= ApiMiPos + "has/open/cashier/balance"

 

 