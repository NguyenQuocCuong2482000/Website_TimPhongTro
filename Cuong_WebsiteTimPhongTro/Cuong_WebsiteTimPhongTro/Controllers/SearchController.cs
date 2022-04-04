using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Cuong_WebsiteTimPhongTro.Models;

namespace Cuong_WebsiteTimPhongTro.Controllers
{
    public class SearchController : Controller
    {
        // GET: Search
         
        public ActionResult Index()
        {
            OnlineTimPhongTroEntities db = new OnlineTimPhongTroEntities();
            ViewBag.menu = db.TypeProducts.ToList();
            return View();
        }

        //public JsonResult GetProducts(string term)

        //{

        //    List<string> Products = db.Products.Where(s => s.ProductName.StartsWith(term))

        //        .Select(x => x.ProductName).ToList();

        //    return Json(Products, JsonRequestBehavior.AllowGet);
        //}

        //public JsonResult GetSearchValue(string searchString)
        //{
        //    OnlineTimPhongTroEntities db = new OnlineTimPhongTroEntities();
        //    List<CountryModel> allsearch = db.projects.Where(x => x.label.Contains(searchString)).Select(x => new CountryModel
        //    {
        //        label = x.label
        //    }).ToList();
        //    return new JsonResult { Data = allsearch, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        //}
    }
}