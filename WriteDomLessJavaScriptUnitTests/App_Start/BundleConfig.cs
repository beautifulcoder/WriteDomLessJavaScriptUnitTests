using System.Web.Optimization;

namespace WriteDomLessJavaScriptUnitTests
{
    public static class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/site.css"));
            bundles.Add(new ScriptBundle("~/Scripts/js").Include("~/Scripts/product.js").Include("~/Scripts/productloader.js"));
        }
    }
}
