export interface Review {
    id: number,
    content: string,
    heading: string,
    location: string,
    name: string,
    rating: number,
    image: Image
}

export interface Link {
    _key: string,
    name: string,
    to: string,
}

export interface LinkList {
    _key: string,
    name: string,
    links: Link[]
}

export interface Image {
    alt: string,
    imageUrl: string,
    caption: string
}

export type Header = {
    _id: string
    logo: Image,
    nav: Link[]
}

export type Footer = {
    logo: Image,
    desc: string,
    sections: LinkList[]
}

export type Step = {
    _key: string,
    desc: string,
    heading: string,
    number: number
    image: Image
}

export type Process = {
    _id: string
    desc: string,
    title: string
    steps: Step[]
}

export type Metric = {
    id: number,
    name: string,
    suffix: string,
    value: number
}

export type Store = {
    _id: string
    address: string,
    contactNumber: string,
    direction: string,
    name: string,
    openOn: string,
    timings: string
}

export type Category = {
    _id: number,
    name: string
    desc?: string
}

export type Item = {
    _id: number
    name: string
    desc?: string
    minPrice: number
    maxPrice: number
    service: Service
    category: Category
}

export type Service = {
    id: number
    name: string
    shortDesc: string
    image: Image
    detailedDesc: string
}

export type Founder = {
    name: string
    message: string
    image: Image
}

export type WhyUsType = {
    _key: string,
    content: string,
    icon: Image
}

export type Business = {
    companyName: string
    coverImage: Image
    detailedDesc: string
    logo: Image
    shortDesc: string
    tagline: string
    founder: Founder
    whyUs: WhyUsType[]
}