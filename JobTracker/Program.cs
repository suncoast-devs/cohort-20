using System;
using JobTracker.Models;
using System.Linq;

namespace JobTracker
{
    class Program
    {
        static void Main(string[] args)
        {
            var context = new DatabaseContext();
            var company = new Company
            {
                Position = "C# Developer",
                Technology = "C#",
                ContactName = "Jim Bob",
                ContactEmail = "jimbob@example.com",
                Remote = true,
                ContactCount = 2,
                CompanyName = "Developers Plus",
                Benefits = true,
                CompanyLogo = "https://unsplash.com/photos/bmmcfZqSjBU/download?force=true&w=640",
                Salary = 50000,
            };
            context.Companies.Add(company);

            var otherCompany = new Company
            {
                Position = "JavaScript Developer",
                Technology = "React",
                ContactName = "Barbara React",
                ContactEmail = "barb@example.com",
                Remote = true,
                ContactCount = 10,
                CompanyName = "Faceboooooook",
                Benefits = false,
                CompanyLogo = "https://unsplash.com/photos/bmmcfZqSjBU/download?force=true&w=640",
                Salary = 95000
            };
            context.Companies.Add(otherCompany);
            context.SaveChanges();

            var totalSalary = context.Companies.Average(company => company.Salary);
            Console.WriteLine(totalSalary);
        }
    }
}







