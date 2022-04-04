using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Cuong_WebsiteTimPhongTro.Models;

namespace Cuong_WebsiteTimPhongTro.Controllers
{
    public class MapController : Controller
    {
        public OnlineTimPhongTroEntities db = new OnlineTimPhongTroEntities();
        // GET: Map
        public ActionResult Index()
        {
            ViewBag.menu = db.TypeProducts.ToList();
            return View();
        }
    }
}