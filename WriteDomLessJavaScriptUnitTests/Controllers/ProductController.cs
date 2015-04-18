using System.Web.Mvc;
using WriteDomLessJavaScriptUnitTests.Models;

namespace WriteDomLessJavaScriptUnitTests.Controllers
{
    public class ProductController : Controller
    {
        private readonly ProductRepository products;

        public ProductController()
        {
            products = new ProductRepository();
        }

        public ActionResult Index()
        {
            var vm = new ProductAllViewModel { Products = products.GetProducts(), Departments = products.GetDepartments() };
            if (Request.IsAjaxRequest())
            {
                return Json(vm, JsonRequestBehavior.AllowGet);
            }
            return View(vm);
        }
    }
}
