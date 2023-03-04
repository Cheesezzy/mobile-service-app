export function calculateDistance(
  locationA: { lat: number; lng: number },
  locationB: { lat: number; lng: number }
) {
  // Convert the locations to radians
  const lat1 = (Math.PI / 180) * locationA.lat;
  const lng1 = (Math.PI / 180) * locationA.lng;
  const lat2 = (Math.PI / 180) * locationB.lat;
  const lng2 = (Math.PI / 180) * locationB.lng;

  // Calculate the distance using the Haversine formula
  const a =
    Math.sin((lat1 - lat2) / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin((lng1 - lng2) / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = 6371 * c;

  return distance;
}

export function searchAndRank(
  query: string,
  businesses: any,
  location: { lat: number; lng: number }
) {
  // First, filter the businesses based on the search query
  const filteredBusinesses = businesses.filter((business: any) => {
    return (
      business.name.toLowerCase().includes(query) ||
      business.desc.toLowerCase().includes(query)
    );
  });

  // Next, sort the filtered businesses by rating
  const sortedByRating = filteredBusinesses.sort((a: any, b: any) => {
    return b.rating - a.rating;
  });

  //console.log(sortedByRating, "found ny rating!");

  // Finally, sort the businesses by proximity to the given location
  const sortedByProximity = sortedByRating.sort((a: any, b: any) => {
    const distanceToA = calculateDistance(location, a.location);
    const distanceToB = calculateDistance(location, b.location);
    return distanceToA - distanceToB;
  });

  // Return the sorted list of businesses
  return sortedByProximity;
}
