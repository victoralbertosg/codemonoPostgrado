namespace CodeMono.Entities
{
    public class ResponseModel
    {
        public dynamic data { get; set; }
        public bool executionError { get; set; }
        public string message { get; set; }

        public ResponseModel()
        {
            data = null;
            executionError = true;
            message = "";
        }

        public ResponseModel(dynamic _d, bool _e, string _m = "")
        {
            data = _d;
            executionError = _e;
            message = _m;
        }
    }
}