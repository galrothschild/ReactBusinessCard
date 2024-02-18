export interface IUser {
  _id: string;
  name: Name;
  phone: string;
  email: string;
  image: Image;
  address: Address;
  isAdmin: boolean;
  isBusiness: boolean;
  createdAt: Date;
}

export interface Address {
  state: string;
  country: string;
  city: string;
  street: string;
  houseNumber: number;
  zip: number;
  _id: string;
}

export interface Image {
  url: string;
  alt: string;
  _id: string;
}

export interface Name {
  first: string;
  middle: string;
  last: string;
  _id: string;
}

export interface SignupResponse {
  name: Name;
  email: string;
  _id: string;
}

export interface signupData {
  "first name": string;
  "middle name": string;
  "last name": string;
  phone: string;
  email: string;
  password: string;
  "password confirmation": string;
  "image url": string;
  "image alt": string;
  state: string;
  country: string;
  city: string;
  street: string;
  "house number": string;
  zip: string;
  "business account": boolean;
}

type OmitID<T> = Omit<T, '_id'>;

export interface signupNormalizedData {
  name: OmitID<Name>;
  phone: string;
  email: string;
  password: string;
  image: OmitID<Image>;
  address: OmitID<Address>;
  isBuisness: boolean
}

export interface loginData {
  email: string;
  password: string;
}
