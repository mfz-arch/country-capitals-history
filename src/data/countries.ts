export interface CountryData {
  id: string;
  name: string;
  capital: string;
  region: string;
  population: string;
  established: string;
  description: string;
  historyTimeline: {
    year: string;
    event: string;
  }[];
  imageUrl: string;
}

export const countries: CountryData[] = [
  {
    id: "japan",
    name: "Japan",
    capital: "Tokyo",
    region: "East Asia",
    population: "13.9 million",
    established: "1868 (as Tokyo)",
    description: "Tokyo, formerly known as Edo, transformed from a small fishing village into the world's most populous metropolitan economy. It serves as Japan's political, economic, and cultural center.",
    historyTimeline: [
      { year: "1457", event: "Edo Castle is built, establishing the first major settlement." },
      { year: "1603", event: "Tokugawa Ieyasu establishes the Tokugawa shogunate, making Edo the de facto capital." },
      { year: "1868", event: "Emperor Meiji moves the imperial capital from Kyoto to Edo, renaming it Tokyo ('Eastern Capital')." },
      { year: "1923", event: "Great Kanto earthquake devastates the city, leading to major modernization during rebuilding." },
      { year: "1945", event: "Extensive firebombing during WWII destroys much of the city, followed by the 'Japanese economic miracle' rebuilding phase." },
      { year: "1964", event: "Tokyo hosts the Summer Olympics, unveiling the Shinkansen (bullet train) and cementing its status as a high-tech global hub." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "uk",
    name: "United Kingdom",
    capital: "London",
    region: "Europe",
    population: "8.9 million",
    established: "43 AD",
    description: "Founded by the Romans as Londinium, London has survived plague, fire, and war to become one of the world's most pre-eminent financial and cultural capitals.",
    historyTimeline: [
      { year: "43 AD", event: "Romans found the settlement of Londinium." },
      { year: "1066", event: "William the Conqueror builds the Tower of London to solidify his rule." },
      { year: "1666", event: "The Great Fire of London destroys much of the medieval city, leading to widespread rebuilding." },
      { year: "1863", event: "The world's first underground railway opens, revolutionizing urban transport." },
      { year: "1940-1941", event: "The Blitz severely damages the city; post-war reconstruction shapes the modern skyline." },
      { year: "2012", event: "London hosts its third Summer Olympics, prompting major regeneration in East London." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1513635269975-5969336cd1dc?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "tanzania",
    name: "Tanzania",
    capital: "Dodoma",
    region: "East Africa",
    population: "410,000",
    established: "1907",
    description: "Dodoma was planned as the new national capital in the 1970s to replace Dar es Salaam, though the complete transfer of government functions took several decades.",
    historyTimeline: [
      { year: "1907", event: "Founded by German colonists during construction of the Tanzanian central railway." },
      { year: "1973", event: "The Tanzanian government announces the plan to move the capital from Dar es Salaam to Dodoma." },
      { year: "1996", event: "The National Assembly finally moves to Dodoma, marking a major milestone in the transition." },
      { year: "2019", event: "President John Magufuli officially relocates the executive branch to Dodoma, completing the transition." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "usa",
    name: "United States",
    capital: "Washington, D.C.",
    region: "North America",
    population: "689,000",
    established: "1790",
    description: "A planned city designed specifically to serve as the national capital, Washington, D.C. is known for its neoclassical monuments and buildings.",
    historyTimeline: [
      { year: "1790", event: "The Residence Act is signed, approving the creation of a national capital on the Potomac River." },
      { year: "1791", event: "Pierre Charles L'Enfant designs the master plan for the city." },
      { year: "1814", event: "British forces burn the capital during the War of 1812, including the White House and Capitol." },
      { year: "1901", event: "The McMillan Plan expands and beautifies the city's monumental core." },
      { year: "1963", event: "The March on Washington and Martin Luther King Jr.'s 'I Have a Dream' speech take place on the National Mall." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1617581629397-a72507c3de9e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "egypt",
    name: "Egypt",
    capital: "Cairo",
    region: "North Africa / Middle East",
    population: "9.5 million",
    established: "969 AD",
    description: "Known as 'The City of a Thousand Minarets', Cairo has been the center of the region's political and cultural life for centuries.",
    historyTimeline: [
      { year: "969 AD", event: "The Fatimid dynasty founds the city of Cairo." },
      { year: "1176", event: "Saladin builds the Cairo Citadel to protect the city from Crusaders." },
      { year: "1517", event: "The Ottoman Empire captures Cairo, reducing its status but maintaining its cultural importance." },
      { year: "1869", event: "Opening of the Suez Canal spurs modernization and European-style development in downtown Cairo." },
      { year: "2015", event: "Egypt announces plans to build a New Administrative Capital east of Cairo to alleviate congestion." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "australia",
    name: "Australia",
    capital: "Canberra",
    region: "Oceania",
    population: "431,000",
    established: "1913",
    description: "Chosen as a compromise between rivals Sydney and Melbourne, Canberra is a planned city featuring geometric motifs and extensive natural vegetation.",
    historyTimeline: [
      { year: "1908", event: "The location for the nation's capital is selected as a compromise between Sydney and Melbourne." },
      { year: "1911", event: "An international design competition is won by American architects Walter Burley Griffin and Marion Mahony Griffin." },
      { year: "1913", event: "The city is officially named Canberra and construction begins." },
      { year: "1927", event: "The Federal Parliament moves to Canberra from Melbourne." },
      { year: "1988", event: "The new, permanent Parliament House is opened on Capital Hill." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1558237953-b0521e1ba1f1?q=80&w=1000&auto=format&fit=crop"
  }
];
