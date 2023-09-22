namespace Proyecto2_Manejo_de_presupuestos.Models
{
    public class IndiceCuentasViewModel
    {
        public string TipoCuenta { get; set; }
        public IEnumerable<Cuenta> Cuentas { get; set;}

        public decimal Balance => Cuentas.Sum(x => x.Balance);
    }
}
