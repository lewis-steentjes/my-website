---
title: "TradeMe Housing Map"
description: "A website that displays TradeMe property listings on a map, built using NextJS, TradeMe's API and Google Maps.            Development is still ongoing."
pubDate: "May 03 2024"
tags: ["NextJS", "Tailwind", "GMaps API", "TradeMe API"]
heroImage: "/images/housing-map.png"
---

Based on my own past experiences at searching for rental properties online, I have decided to embark on a journey to improve the user experience for people searching through property listings online. By linking property listings with [Google Maps](https://mapsplatform.google.com/resources/blog/introducing-react-components-for-the-maps-javascript-api/), I aim to create a user experience where people can open a map and understand what the offers are at a glance. Looking at the already existing options like [Homes](https://homes.co.nz/), it's difficult to determine important details such as bedroom count, bathroom count and listing price without clicking on a link and going to another webpage.

![Housing Map](/images/housing-map-homes-2.png)

I am currently developing a
website that utilises TradeMe API endpoints to show available listings in a more digestible way, when compared to existing solutions.

Currently, the website is in the early stages of development. I am using NextJS for the frontend, and TailwindCSS for styling. The Google Maps API is used to display the location of each listing on a map. The TradeMe API is used to fetch the listings.

The website will allow users to filter listings based on their preferences, such as price range, number of bedrooms, and location. Users will also be able to view the location of each listing on a map, and view more details about each listing.

You can check out the current deployment of the website [here](https://trademe-housing.vercel.app/).
