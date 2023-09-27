using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Proyecto2_Manejo_de_presupuestos.Models
{
    public class Categoria
    {
        public int Id { get; set; }


        [Required(ErrorMessage ="El campo {0} es requerido")]
        [StringLength(maximumLength:50, ErrorMessage ="No puede ser mayor a {1} caracteres")]
        public string Nombre { get; set; }
        [Display(Name = "Tipo Operación")]
        public TipoOperacion TipoOperacionId { get; set; }

        public int usuarioId { get; set; }


    }
}
