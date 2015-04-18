using System.Collections.Generic;

namespace WriteDomLessJavaScriptUnitTests.Models
{
    public class ProductRepository
    {
        public IEnumerable<Product> GetProducts()
        {
            return new List<Product>
            {
                new Product { Id = 1, DepartmentId = 1, Name = "Bat", Price = 3.24m },
                new Product { Id = 2, DepartmentId = 2, Name = "T-Shirt", Price = 9.99m },
                new Product { Id = 3, DepartmentId = 1, Name = "Soccer Ball", Price = 4.45m }
            };
        }

        public IEnumerable<Department> GetDepartments()
        {
            return new List<Department>
            {
                new Department { Id = 1, Name = "Sports" },
                new Department { Id = 2, Name = "Clothing" }
            };
        }
    }
}
