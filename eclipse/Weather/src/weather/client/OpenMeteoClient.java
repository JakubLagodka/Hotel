package weather.client;

import weather.exception.OpenMeteoApiException;
import weather.exception.WeatherApiException;
import weather.model.CityLocation;
import weather.model.CurrentWeather;

import java.io.IOException;
import java.net.URI;
import java.net.URLEncoder;

import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Optional;

public class OpenMeteoClient implements WeatherClient, LocationClient {
    private static final URI WROCLAW_CURRENT_WEATHER_URI = URI.create(
            "https://api.open-meteo.com/v1/forecast"
                    + "?latitude=51.1079"
                    + "&longitude=17.0385"
                    + "&current=temperature_2m"
                    + "&timezone=Europe%2FWarsaw"
    );
    private static final String FORECAST_URL = "https://api.open-meteo.com/v1/forecast";
    private static final String GEOCODING_URL = "https://geocoding-api.open-meteo.com/v1/search";


    @Override
    public CurrentWeather fetchCurrentWeather(CityLocation location) {
		return null;
     


        
         
    }

    @Override
    public Optional<CityLocation> findLocation(String city) {
        URI uri = URI.create(GEOCODING_URL
                + "?name=" + URLEncoder.encode(city, StandardCharsets.UTF_8)
                + "&count=1"
                + "&language=en"
                + "&format=json");
		return null;
     
    }

    private URI buildCurrentWeatherUri(CityLocation location) {
        return URI.create(FORECAST_URL
                + "?latitude=" + location.latitude()
                + "&longitude=" + location.longitude()
                + "&current=temperature_2m"
                + "&timezone=" + URLEncoder.encode(location.timezone(), StandardCharsets.UTF_8));
    }

   
    private record OpenMeteoResponse(Current current) {
    }

    private record OpenMeteoGeocodingResponse(List<LocationResult> results) {
    }

    private record Current(String time,
                         double temperature2m) {
    }

    private record LocationResult(
            String name,
            String country,
            double latitude,
            double longitude,
            String timezone
    ) {
    }
}
