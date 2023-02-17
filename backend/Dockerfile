#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["PhotoBooking/PhotoBooking.API.csproj", "PhotoBooking/"]
COPY ["PhotoBooking.API.Core/PhotoBooking.API.Core.csproj", "PhotoBooking.API.Core/"]
COPY ["PhotoBooking.API.Data/PhotoBooking.API.Data.csproj", "PhotoBooking.API.Data/"]
RUN dotnet restore "PhotoBooking/PhotoBooking.API.csproj"
COPY . .
WORKDIR "/src/PhotoBooking"
RUN dotnet build "PhotoBooking.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "PhotoBooking.API.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "PhotoBooking.API.dll"]