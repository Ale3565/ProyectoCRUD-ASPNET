namespace Proyecto2_Manejo_de_presupuestos.Servicios
{


    public interface IServicioUsuarios
    {
        int ObtenerUsuarioId();
    }
    public class ServicioUsuarios : IServicioUsuarios
    {

        public int ObtenerUsuarioId()
        {
            return 1;
        }
    }
}
