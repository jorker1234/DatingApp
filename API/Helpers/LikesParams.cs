namespace API.Helpers
{
    public class LikesParams: PaginarionParams
    {
        public int UserId { get; set; }
        public string Predicate { get; set; }
    }
}