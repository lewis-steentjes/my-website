---
title: "TradeMe Housing Map"
description: "A website that displays **TradeMe** property listings on a map, built using **NextJS**, **Google Maps** and **TradeMe's API**.            Development is still ongoing."
pubDate: "May 03 2024"
tags: ["NextJS", "Tailwind", "GMaps API", "TradeMe API"]
heroImage: "/images/housing-map-3.png"
---

Based on my own past experiences at searching for rental properties online, I have decided to embark on a journey to improve the user experience for people searching through property listings online. By linking property listings with [Google Maps](https://mapsplatform.google.com/resources/blog/introducing-react-components-for-the-maps-javascript-api/), I aim to create a user experience where people can open a map and understand what the offers are at a glance. Check out the currently deployed version over [here](https://trademe-housing.vercel.app/).

![Housing Map](/images/housing-map-homes-2.png)

One of the more popular web apps for browsing for housing properties online is [Homes](https://homes.co.nz/).
It has a search box on the left-hand side of the screen, and displays the search results on the map on the right. When using primarily as a traditional search box with a map view on the side, it works quite well. When used primarily as a map to browse listings, it becomes difficult to infer important details important details such as bedroom count, bathroom count, listing price and listing age without clicking on a link and going to another webpage.

To address this I am adding a few key UX features to my implementation:

- Colour-coded icons to signify listing age
- Listing Price shown directly on the icon
- Hover to see more details (bedrooms, bathrooms, etc.)
- Icon changes after viewing (colour theme or transparency)

Combined, these features will allow for users to have an easier time browsing for properties by being able to simply navigate property listings online.
