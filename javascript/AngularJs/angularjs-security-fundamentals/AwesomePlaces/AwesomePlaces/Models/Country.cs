using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace AwesomePlaces.Models
{
  public class Country
  {
    public int Id { get; set; }

    [Required]
    public string Name { get; set; }

    [JsonIgnore]
    public virtual ICollection<AwesomePlace> AwesomePlaces { get; set; }
  }
}