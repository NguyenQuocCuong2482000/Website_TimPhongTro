//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Cuong_WebsiteTimPhongTro.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Comment
    {
        public int CommentID { get; set; }
        public Nullable<int> CustomerID { get; set; }
        public string AddComment { get; set; }
    
        public virtual Customer Customer { get; set; }
    }
}