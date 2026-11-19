import { routes } from "@/config/routes";
import {
  BellRing, BookOpen, Coffee, GraduationCap, Landmark, Monitor, ParkingSquare,
  Presentation, Sofa, Utensils, Waves, Wifi, type LucideIcon,
} from "lucide-react";

export type Campus = {
  name: string;
  cardTitle: string;
  href: string;
  image: string;
  region: string;
  address: string;
  introduction: string;
  paragraphs: string[];
  facilities: [string, LucideIcon][];
  photoAlt: string;
  videoId: string;
  poster?: string;
  inquiry: string;
  more: string;
};

export const campuses: Campus[] = [
  {
    name: "Miami Brickell",
    cardTitle: "Miami Brickell Campus",
    href: routes.miamiCampus,
    image: "miami",
    region: "South Florida",
    address: "825 Brickell Bay Drive, Suite 1850, Miami, FL 33131",
    introduction: "The OHLA Miami campus is located in the Four Ambassadors complex, just one block away from Mary Brickell Village and Brickell City Center. Brickell is Miami’s famous financial district and offers a variety of luxury condos, shops, and restaurants.",
    paragraphs: ["In Miami, OHLA has a partnership with Florida International University and, through Miami Dade College, offers various certification programs. Students can also choose to enroll in undergraduate courses at Westcliff University, located on the same campus."],
    facilities: [
      ["2 Reception Areas", BellRing], ["Student Lounge", Sofa],
      ["15 Classrooms", BookOpen], ["Free Wi-Fi", Wifi],
      ["2 Computer Labs", Monitor], ["Bay View", Waves],
      ["Graduate Center", GraduationCap], ["Restaurants & Cafés", Utensils],
      ["Interactive Whiteboards", Presentation], ["Westcliff University", Landmark],
    ],
    photoAlt: "Brickell City Centre and the surrounding towers in Miami",
    videoId: "9fk7pVbeXEw",
    inquiry: "Inquire now",
    more: "Check it out",
  },
  {
    name: "Orlando Celebration",
    cardTitle: "Celebration Campus",
    href: routes.orlandoCampus,
    image: "orlando",
    region: "Central Florida",
    address: "715 Bloom Street, Suite 200, Celebration, FL 34747",
    introduction: "The OHLA campus in Celebration is located in the heart of the picturesque town of Celebration, just a few miles from the Disney parks.",
    paragraphs: ["OHLA is partnered in the Celebration/Orlando area with the University of Central Florida and Valencia College. Students can also choose to enroll in degree programs with Westcliff University, located right on campus."],
    facilities: [
      ["Reception", BellRing], ["Student Lounge", Sofa], ["10 Classrooms", BookOpen],
      ["Parking", ParkingSquare], ["Computer Lab", Monitor], ["Restaurants and Cafés", Utensils],
      ["Smart Boards", Presentation], ["Starbucks", Coffee], ["Free Wi-Fi Access", Wifi],
      ["Lake View with Balcony", Waves],
    ],
    photoAlt: "Colorful buildings and palm trees in downtown Celebration",
    videoId: "_Dhnq48fjGE",
    poster: "orlando-poster",
    inquiry: "Contact us",
    more: "Explore",
  },
  {
    name: "Tampa",
    cardTitle: "Tampa Campus",
    href: routes.tampaCampus,
    image: "tampa",
    region: "Central Florida",
    address: "6800 N Dale Mabry Hwy, Suite 124, Tampa, FL 33614",
    introduction: "Our campus is located near downtown Tampa and the international airport. Tampa is the economic hub of West Florida. It is known for its beaches, professional sports teams, and tourist attractions—especially Busch Gardens, where the thrills of an amusement park and the fun of a zoo come together in one place.",
    paragraphs: ["Tampa is known for attractions such as Ybor City, Busch Gardens, Armature Works, the Florida Aquarium, museums, and its many beaches. It is an ideal place to study, live, and work. OHLA partners with the University of South Florida and Hillsborough Community College in the Tampa area."],
    facilities: [
      ["Reception", BellRing], ["8 Classrooms", BookOpen], ["Interactive Whiteboards", Presentation],
      ["Student Lounge", Sofa], ["Computer Lab", Monitor], ["Free Parking", ParkingSquare],
      ["Free Wi-Fi", Wifi], ["Nearby Restaurants and Cafés", Utensils],
    ],
    photoAlt: "Tampa’s waterfront and downtown skyline",
    videoId: "j5sLOmpxs8E",
    poster: "tampa-poster",
    inquiry: "Inquire now",
    more: "Learn more",
  },
];
