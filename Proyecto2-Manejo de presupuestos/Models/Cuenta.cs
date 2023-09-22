using Proyecto2_Manejo_de_presupuestos.Validaciones;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Proyecto2_Manejo_de_presupuestos.Models
{
    public class Cuenta
    {

        public int Id { get; set; }

        [Required(ErrorMessage ="El campo {0} es requerido")]
        [StringLength(maximumLength:50)]
        [PrimeraletraMayuscula]
        public string Nombre { get; set; }

        [Display(Name = "Tipo Cuenta")]
        public int TipoCuentaId { get; set; }

        public decimal Balance { get; set; }

        [StringLength(maximumLength:1000)]
        public string Descripcion { get; set; }

        public string TipoCuenta { get; set; }
    }
}
