using AutoMapper;
using Proyecto2_Manejo_de_presupuestos.Models;

namespace Proyecto2_Manejo_de_presupuestos.Servicios
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Cuenta, CuentaCreacionViewModel>();
        }
    }

}
