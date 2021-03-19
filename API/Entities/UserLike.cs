namespace API.Entities
{
    public class UserLike
    {
        public AppUser SourceUsr { get; set; }
        public int SourceUserId {get; set;}

        public AppUser LikedUser { get; set; }
        public int LikedUserId { get; set; }
    }
}