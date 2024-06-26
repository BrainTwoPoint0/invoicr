import { CSSProperties } from 'react'

export interface ProductLine {
  description: string
  quantity: string
  rate: string
}

export interface Invoice {
  logo: string
  logoWidth: number

  signature: string
  signatureWidth: number

  title: string
  name: string
  companyAddress: string
  companyAddress2: string
  companyCountry: string

  billTo: string
  billFrom: string
  clientName: string
  clientAddress: string
  clientAddress2: string
  clientCountry: string

  invoiceDateLabel: string
  invoiceDate: string
  invoiceDueDateLabel: string
  invoiceDueDate: string

  productLineDescription: string
  productLineQuantity: string
  productLineQuantityRate: string
  productLineQuantityAmount: string

  productLines: ProductLine[]

  subTotalLabel: string

  totalLabel: string
  currency: string

  notesLabel: string
  notes: string
}

export interface CSSClasses {
  [key: string]: CSSProperties
}
