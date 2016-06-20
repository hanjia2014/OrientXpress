using System.IO;
using System.Web;

namespace OrientXpress.Models
{
    public class FileHelper
    {
        public static byte[] GetImageBytes(HttpPostedFileBase imageFile)
        {
            if (imageFile != null && imageFile.ContentLength > 0)
            {
                var target = new MemoryStream();
                imageFile.InputStream.CopyTo(target);
                return target.ToArray();
            }

            return null;
        }
    }
}
