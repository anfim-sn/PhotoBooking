# PhotoBooking

Test task for PlumSail 

This app on my external web server:
- Full app: http://89.108.76.18:8000/
- Api: http://89.108.76.18:8000/api/
- Swagger: http://89.108.76.18:8000/swagger/


## Docker startup

1. Clone repo
2. Build docker `docker-compose -f docker-compose.build.yml build --no-cache`
3. Startup docker `docker-compose up -d`

## Stack

- React with Typescript, React Router, Axios
- C# with ASP.NET Core, InMemory DB, Swagger
- Docker (with docker-compose), Nginx
- Playwright
