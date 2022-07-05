import { User } from '@supabase/supabase-js';
import { definitions } from '~/supabase';

export enum itemOperation {
    ADD = 'ADD',
    SUBTRACT = 'SUBTRACT'
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

export type LayoutPageData = {
    header: Header,
    footer: Footer,
    env: typeof window.env,
    user?: User,
    profile?: definitions['profiles']
    isAuthenticated: boolean
}

export type Feature = {
    _id: string
    number: string
    desc: string,
    heading: string,
    title: string,
    image: Image,
    callToActions: Link[],
    highlights: string[]
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

export type Contact = {
    name: string,
    contactNumber: string,
    message: string
}

export type Review = {
    review: string
    rating: number
}

export type ProfileValidationError = {
    name?: string
    contactNumber?: string
}

export type ReviewValidationError = {
    review?: string,
    rating?: string
}

export type  ContactValidationError =  {
    name?: string,
    contactNumber?: string,
    message?: string
}

export type FormResponse<T,U> = {
    validationErrors?: U
    success?: T
    error?: string
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

export type testimonialsType = {
    id: number,
    name: string
    review: string
    rating: number
    source: string
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
    _id: string
    name: string
    shortDesc: string
    image: Image
    detailedDesc: string
}

export type Founder = {
    _key: string
    name: string
    description: string
    message: string
}

export type Business = {
    companyName: string
    coverImage: Image
    detailedDesc: string
    logo: Image
    shortDesc: string
    tagline: string
    founder: string
    whyUs: string[]
}

export interface IndexPageData {
    testimonials: {
        heading: string
        sub_heading: string,
        data: testimonialsType[]
    }
    services: Service[]
    process: Process
    features: Feature[]
    business: Business
}

export interface StorePageData {
    stores: Store[]
}

export type ReviewsPageDataType = {
    reviews: testimonialsType[]
}

export type PricingPageData = {
    services: Service[]
}

export type AboutPageData = {
    business: Business
}

export type ServicesPageData = {
    services: Service[]
}

export type ProcessPageData = {
    process: Process
}
