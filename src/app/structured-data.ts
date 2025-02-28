export const businessStructuredData = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "프리미엄 부동산 컨설팅",
  "image": "/logo.png",
  "description": "사무실, 상가, 매매, 주택까지 - 전문가의 맞춤 부동산 솔루션을 경험하세요",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "강남대로 123",
    "addressLocality": "서울",
    "addressRegion": "강남구",
    "postalCode": "06123",
    "addressCountry": "KR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.4967,
    "longitude": 127.0276
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "123"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  }
} 