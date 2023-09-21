using Microsoft.AspNetCore.Mvc;
using Proyecto2_Manejo_de_presupuestos.Validaciones;
using System.ComponentModel.DataAnnotations;

namespace Proyecto2_Manejo_de_presupuestos.Models
{
    public class TipoCuenta: IValidatableObject
    {
        public int id { get; set; }

        [Required(ErrorMessage = "El campo {0} es requerido")]
        [PrimeraletraMayuscula]
        [Remote(action:"VerificarExisteTipoCuenta", controller:"TiposCuentas")]

        public string Nombre { get; set; }

        public int UsuarioId { get; set; }

        public int Orden { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            if(Nombre != null && Nombre.Length > 0)
            {
                var primeraLetra = Nombre[0].ToString();
                if(primeraLetra != primeraLetra.ToUpper())
                {
                    yield return new ValidationResult("La primera letra debe ser mayúscula",
                        new[] {nameof(Nombre)});
                }

            }
        }


    }
}
