using Microsoft.AspNetCore.Mvc;

namespace ProductController.Controllers
{
    public class ProductController : Controller
    {
        
        


        [HttpPost]
        public ActionResult Edit( ProductController product )
        {
            return Ok(product);
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Details()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Create(Product product)
        {
            // Save the product data to a database or perform other operations
            // Return the product data in the response
            return Json(product);
        }

        public ActionResult Create()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Edit(Product product)
        {
            // Save the product data to a database or perform other operations
            // Return the product data in the response
            return Json(product);
        }
        public ActionResult Edit()
        {
            return View();
        }

        public ActionResult Delete()
        {
            return View();
        }
    }





    //    public ActionResult Index()
    //    {
    //        return Content("Index");
    //    }

    //    public ActionResult Details()
    //    {
    //        return Content("Details");
    //    }

    //    public ActionResult Create()
    //    {
    //        return Content("Create");
    //    }

    //    public ActionResult Edit()
    //    {
    //        return Content("Edit");
    //    }

    //    public ActionResult Delete()
    //    {
    //        return Content("Delete");
    //    }
}

