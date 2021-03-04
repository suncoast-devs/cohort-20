namespace JobTrackerAPI.Models
{
    public class Company
    {
        //  - Id
        public int Id { get; set; }
        //  - Position (Position: text)
        public string Position { get; set; }
        // - Tech (Technology: text)
        public string Technology { get; set; }
        // - Contact name (ContactName: text)
        public string ContactName { get; set; }
        // - Contact email (ContactEmail: text)
        public string ContactEmail { get; set; }
        // - Remote- y/n? (Remote: boolean)
        public bool Remote { get; set; }
        // - Contact count (ContactCount: int)
        public int ContactCount { get; set; }
        // - Name of Company (CompanyName: text)
        public string CompanyName { get; set; }
        // - Salary (Salary: int)
        public int Salary { get; set; }
        // - Benefits- t/f? (Benefits: boolean)
        public bool Benefits { get; set; }
        // - Company logo(CompanyLogo: text)
        public string CompanyLogo { get; set; }

        public string URL { get; set; }
        public string Description { get; set; }
    }
}