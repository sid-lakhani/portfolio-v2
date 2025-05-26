import { Metadata } from "next";

type MetadataProps = {
  preTitle?: string;
  title?: string;
  description?: string;
  url?: string;
  image?: string;
};

export const constructMetadata = ({
  title = "Siddhesh Lakhani - Full Stack Developer",
  description = "Explore the portfolio of Siddhesh Lakhani, a passionate full stack developer and technology enthusiast. Discover projects and insights into the world of coding and innovation.",
  url = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sidlakhani.in",
  image = "https://sidlakhani.in/open-graph/poster-1.png",
}: MetadataProps): Metadata => ({
  title: title,
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  description: description,
  authors: {
    name: "Siddhesh Lakhani",
    url: url,
  },
  creator: "Siddhesh Lakhani",
  publisher: "Siddhesh Lakhani",
  openGraph: {
    type: "website",
    url: url,
    title: title,
    description: description,
    siteName: "Siddhesh Lakhani Portfolio",
    emails: ["lakhani.siddhesh@gmail.com"],
    locale: "en_US",
    images: [
      {
        url: image,
        alt: title,
      },
    ],
  },
  metadataBase: new URL(url),
});
