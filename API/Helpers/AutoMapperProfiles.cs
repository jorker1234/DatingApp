using System.Linq;
using API.DTOs;
using API.Entities;
using API.Extends;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<AppUser, MemberDto>()
                .ForMember(dest => dest.PhotoUrl, opt => opt.MapFrom(src => src.Photos.FirstOrDefault(x => x.IsMain).Url))
                .ForMember(dest => dest.Age, option => option.MapFrom(src => src.DateOfBirth.CalculateAge()));
                
            CreateMap<Photo, PhotoDto>();
        }
    }
}