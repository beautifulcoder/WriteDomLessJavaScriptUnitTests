using System.Collections.Generic;

namespace WriteDomLessJavaScriptUnitTests.Models
{
    public class ProductAllViewModel
    {
        public IEnumerable<Product> Products { get; set; }
        public IEnumerable<Department> Departments { get; set; }
    }
}
