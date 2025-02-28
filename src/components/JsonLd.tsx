export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "BDB부동산",
    "image": "https://bdbagent.kr/images/logo.png",
    "description": "홍대, 합정, 연남동 지역 부동산 전문. 상가, 사무실 매매 및 임대차. 무권리, 통임대, 사옥, 카페, 스튜디오 등 다양한 매물 보유.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "홍익로5길 65, 2층",
      "addressLocality": "마포구",
      "addressRegion": "서울특별시",
      "postalCode": "04040",
      "addressCountry": "KR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "37.5504",
      "longitude": "126.9199"
    },
    "url": "https://bdbagent.kr",
    "telephone": "02-338-9998",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:30",
        "closes": "18:30"
      }
    ],
    "sameAs": [
        "https://blog.naver.com/bdbagent",
        "https://www.instagram.com/bdb_estate"
    ],
    "areaServed": [
      "홍대입구", "합정동", "상수동", "망원동", "연남동", 
      "서교동", "동교동", "신촌", "연희동"
    ],
    "serviceType": [
      "상가임대", "사무실임대", "상가매매", "사무실매매",
      "무권리상가", "통임대", "사옥", "카페임대", "작업실임대"
    ],
    "priceRange": "₩₩₩",
    "hasMap": "https://map.naver.com/p/search/서울%20마포구%20서교동%20370-28",
    "founder": {
      "@type": "Person",
      "name": "최영건"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
} 