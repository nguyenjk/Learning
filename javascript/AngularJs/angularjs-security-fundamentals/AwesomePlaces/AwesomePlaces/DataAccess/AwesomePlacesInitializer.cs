using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Web;
using AwesomePlaces.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;

namespace AwesomePlaces.DataAccess
{
  public class AwesomePlacesInitializer : DropCreateDatabaseIfModelChanges<AwesomePlacesContext>
  {
    protected override void Seed(AwesomePlacesContext context)
    {
      var userManager = HttpContext.Current.GetOwinContext().GetUserManager<ApplicationUserManager>();
      userManager.Create(new ApplicationUser { Name = "Troy Hunt", UserName = "troyhunt@hotmail.com", Email = "troyhunt@hotmail.com" }, "Password1!");
      userManager.Create(new ApplicationUser { Name = "Carmen Sandiego", UserName = "carmen@sandiego.com", Email = "carmen@sandiego.com" }, "Password1!");

      string[] countries = { "Afghanistan", "Åland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Antarctic Territory", "British Indian Ocean Territory", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Canton and Enderbury Islands", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos [Keeling] Islands", "Colombia", "Comoros", "Congo - Brazzaville", "Congo - Kinshasa", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Côte d’Ivoire", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Dronning Maud Land", "East Germany", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "French Southern and Antarctic Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Honduras", "Hong Kong SAR China", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Johnston Island", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau SAR China", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Metropolitan France", "Mexico", "Micronesia", "Midway Islands", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar [Burma]", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "Neutral Zone", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "North Korea", "North Vietnam", "Northern Mariana Islands", "Norway", "Oman", "Pacific Islands Trust Territory", "Pakistan", "Palau", "Palestinian Territories", "Panama", "Panama Canal Zone", "Papua New Guinea", "Paraguay", "People's Democratic Republic of Yemen", "Peru", "Philippines", "Pitcairn Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Romania", "Russia", "Rwanda", "Réunion", "Saint Barthélemy", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Saudi Arabia", "Senegal", "Serbia", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Korea", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard and Jan Mayen", "Swaziland", "Sweden", "Switzerland", "Syria", "São Tomé and Príncipe", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "U.S. Minor Outlying Islands", "U.S. Miscellaneous Pacific Islands", "U.S. Virgin Islands", "Uganda", "Ukraine", "Union of Soviet Socialist Republics", "United Arab Emirates", "United Kingdom", "United States", "Unknown or Invalid Region", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Wake Island", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe" };
      foreach (var country in countries)
      {
        context.Countries.Add(new Country { Name = country });
      }
      context.SaveChanges();

      var awesomePlaces = new List<AwesomePlace>
      {
        new AwesomePlace{ UserId = 1, CountryId = 14, PlaceName = "Gold Coast", Description = "Awesome sun, awesome surf, beautiful warm weather; what's not to love?!", CreateDate = new DateTime(2014, 3, 21, 9, 21, 13) },
        new AwesomePlace{ UserId = 1, CountryId = 14, PlaceName = "Great Barrier Reef", Description = "Clear waters and one of the world's greatest natural wonders", CreateDate = new DateTime(2014, 4, 3, 16, 56, 1) },
        new AwesomePlace{ UserId = 2, CountryId = 69, PlaceName = "Cairo", Description = "Wow, pyramids!", CreateDate = new DateTime(2014, 5, 30, 21, 1, 32) },
        new AwesomePlace{ UserId = 1, CountryId = 115, PlaceName = "Niseko", Description = "Super powdery snow and warm sake on the mountain", CreateDate = new DateTime(2014, 5, 4, 12, 11, 21) },
        new AwesomePlace{ UserId = 1, CountryId = 41, PlaceName = "Whistler", Description = "Big mountains and massive runs in truly epic scenery", CreateDate = new DateTime(2014, 12, 23, 4, 55, 43) },
        new AwesomePlace{ UserId = 1, CountryId = 251, PlaceName = "Salt Lake City", Description = "Heaps of awesome mountains close to the city plus it's the home of Pluralsight!", CreateDate = new DateTime(2015, 1, 8, 23, 4, 34) }
      };

      awesomePlaces.ForEach(s => context.AwesomePlaces.Add(s));
      context.SaveChanges();
    }
  }
}