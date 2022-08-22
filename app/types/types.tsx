import { User } from '@supabase/supabase-js';
import { Business, Footer, Header, Image, Metric, Process, Review, Service, Store } from '~/sanity/types';
import { definitions } from '~/supabase';

export enum itemOperation {
    ADD = 'ADD',
    SUBTRACT = 'SUBTRACT'
}

export type LayoutPageData = {
    header: Header,
    footer: Footer,
    env: typeof window.env,
    user?: User,
    isAuthenticated: boolean
}

export type BookingDto = definitions["bookings"] & {
    token: string
}

export type BookingValidationError = Omit<Partial<definitions['bookings']>,"time_slot"> & {
    time_slot?: string
    token?: string
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
    success?: T | string
    error?: string
}

export interface IndexPageData {
    reviews: Review[]
    services: Service[]
    process: Process
    business: Business
    metrics: Metric[]
}

export interface ContactPageData {
    image: Image
}

export interface StorePageData {
    stores: Store[]
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
