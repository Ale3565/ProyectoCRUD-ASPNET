using Microsoft.AspNetCore.Mvc.Rendering;

namespace Proyecto2_Manejo_de_presupuestos.Models
{
    public class CuentaCreacionViewModel: Cuenta
    {

        public IEnumerable<SelectListItem> TiposCuentas {  get; set; } 

    }
}
