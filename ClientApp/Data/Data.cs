using System;
using System.Collections.Generic;


namespace Trips.Data
{
    public static class Data
    {
        public static List<Trip> Trips => allTrips;
        static List<Trip> allTrips = new List<Trip>()
        {
            new Trip()
            {
                Id=1,
                Name="Teharn, Karaj",
                Description="lorem ipsom is not meaning word that we use",
                DateStarted= new DateTime(2020 , 01 , 01),
                DateCompleted= null
            },
            new Trip()
            {
                Id=2,
                Name="Teharn, Ankara",
                Description="lorem ipsom is not meaning word that we use",
                DateStarted= new DateTime(2020 , 01 , 02),
                DateCompleted= new DateTime(2020 , 01 , 03)
            },
            new Trip()
            {
                Id=3,
                Name="Karaj, Estambul",
                Description="lorem ipsom is not meaning word that we use",
                DateStarted= new DateTime(2020 , 01 , 03),
                DateCompleted= new DateTime(2020 , 01 , 04)
            },
            new Trip()
            {
                Id=4,
                Name="Teharn, Azarbayjan",
                Description="lorem ipsom is not meaning word that we use",
                DateStarted= new DateTime(2020 , 01 , 04),
                DateCompleted= null
            },
            new Trip()
            {
                Id=5,
                Name="Teharn, Arbil",
                Description="lorem ipsom is not meaning word that we use",
                DateStarted= new DateTime(2020 , 01 , 05),
                DateCompleted= new DateTime(2020 , 01 , 06)
            },
            new Trip()
            {
                Id=6,
                Name="Teharn, Van",
                Description="lorem ipsom is not meaning word that we use",
                DateStarted= new DateTime(2020 , 01 , 06),
                DateCompleted= new DateTime(2020 , 01 , 07)
            }
        };
    }
}