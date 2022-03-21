using Entities.Request;
using Entities.Response;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Entities.dbo;
using DataAccess.dbo;
using CodeMono.Entities;
using System.Threading.Tasks;






namespace Business.dbo
{
    public class UserService 
    {

        /*private readonly AppSettings _appSettings;

        public UserService(IOptions<IAppSettings> appSettings)
        {
            _appSettings = appSettings.Value;
        }*/
        private readonly usuarioDao dao;
        private ResponseModel m;

        public UserService(IConfiguration config, string con)
        {
            dao = new usuarioDao(config, con);
            m = new ResponseModel();
        }


        /*public UserResponse Auth(AuthRequest model)
            {
                UserResponse userresponse = new UserResponse();
                using (var db = new bddSisInvestigacionContext())
                {
                    string spassword = tools.Encript.GetSHA256(model.Password);
                    var usuario = db.Usuarios.Where(d => d.Idusuario == model.idusuario &&
                                                    d.Password == spassword).FirstOrDefault();
                    if (usuario == null) return null;
                    userresponse.idusuario = usuario.Idusuario;
                    userresponse.Token = GetToken(usuario);
                    userresponse.rol = usuario.Rol;
                }               
                
            return userresponse;
            }*/

        public async Task<ResponseModel> GetusuarioLogin(Dictionary<string, dynamic> parameters)
        {
            UserResponse userresponse = new UserResponse();
            try
            {
                var usuario = await dao.GetusuarioLogin<usuarioModel>(parameters);
                
                if (usuario == null) return null;             

                foreach (usuarioModel value in usuario)
                {
                    userresponse.dni = value.dni;
                    userresponse.Token = GetToken(value);
                    userresponse.rol = value.id_rol;
                }

                m.data = userresponse;
                m.executionError = false;
                m.message = "";
            }
            catch (Exception ex)
            {
                m.data = null;
                m.executionError = true;
                m.message = "Error: " + ex.Message + ". " + ex.InnerException;
            }
            return m;
        }


        private string GetToken(usuarioModel usuario)
            {

                var tokenHanler = new JwtSecurityTokenHandler();
            //var key = Encoding.ASCII.GetBytes(Configuration.GetValue<string>("SecretKey"));

            //var llave = Encoding.ASCII.GetBytes(_appSettings.Secreto);
            string key = "codemono-api-key-29062020";
            var llave = Encoding.ASCII.GetBytes(key);
            var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(
                        new Claim[]
                        {
                        new Claim(ClaimTypes.NameIdentifier,usuario.id_usuario.ToString()),
                        new Claim(ClaimTypes.Role,usuario.id_rol.ToString())
                        }
                        ),
                    Expires = DateTime.UtcNow.AddDays(60),
                    SigningCredentials =
                        new SigningCredentials(new SymmetricSecurityKey(llave), SecurityAlgorithms.HmacSha256Signature)
                };
                var token = tokenHanler.CreateToken(tokenDescriptor);
                return tokenHanler.WriteToken(token);
            }


        }
    
   
}

