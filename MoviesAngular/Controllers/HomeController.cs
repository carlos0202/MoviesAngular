using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.SqlClient;
using CommonTasksLib.Data.ADOExtensions;
using CommonTasksLib.Collections;
using System.Collections;
using System.Data;
using System.Dynamic;

namespace MoviesAngular.Controllers
{
    public class HomeController : Controller
    {
        private static string Conn = HomeController.GetConnectionString("MovieDB");
        private DAO dao = new DAO(HomeController.Conn, InstanceType.SqlServer);
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        public ActionResult Anonymous()
        {
            dao.OpenConnection();
            var reader = dao.ExecuteReader("Select * From Movies", null);
            string excludedFields = "ID,Runtime";
            string includedFields = "Title";
            var result = reader.ToExpandoArray(includedFields, excludedFields);
            dao.CloseConnection();

            return View(result);
        }

        protected static string GetConnectionString(string ConnectionName)
        {
            System.Configuration.Configuration rootWebConfig =
                System.Web.Configuration.WebConfigurationManager.OpenWebConfiguration("~/");
            System.Configuration.ConnectionStringSettings connString;
            connString = rootWebConfig.ConnectionStrings.ConnectionStrings[ConnectionName];

            return connString.ConnectionString;
        }
    }

    class DAO : CommonTasksLib.Data.ADOExtensions.GenericDAO<SqlCommand, SqlConnection, SqlDataAdapter>
    {
        public DAO(string ConnString, CommonTasksLib.Data.ADOExtensions.InstanceType instance)
            : base(ConnString, instance) { }

        public DAO(string ConnString)
            : base(ConnString) { }
    }
}
