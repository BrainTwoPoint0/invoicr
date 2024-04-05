import { ProductLine, Invoice } from './types'

export const initialProductLine: ProductLine = {
  description: '',
  quantity: '1',
  rate: '0.00',
}

export const initialInvoice: Invoice = {
  logo: '/logo_example.png',
  logoWidth: 100,
  title: 'DENTAL INVOICE',
  name: 'Dr. Lina Chamseddine',
  companyAddress: 'Bechara El Khoury av.',
  companyAddress2: 'Beirut, 1103',
  companyCountry: 'Lebanon',
  billTo: 'Bill To:',
  billFrom: 'Bill From:',
  clientName: '',
  clientAddress: '',
  clientAddress2: '',
  clientCountry: 'Lebanon',
  invoiceDateLabel: 'Invoice Date',
  invoiceDate: '',
  invoiceDueDateLabel: 'Due Date',
  invoiceDueDate: '',
  productLineDescription: ' Description',
  productLineQuantity: 'Qty',
  productLineQuantityRate: 'Unit Price',
  productLineQuantityAmount: 'Amount',
  productLines: [
    {
      description: 'Brochure Design',
      quantity: '2',
      rate: '100.00',
    },
    { ...initialProductLine },
    { ...initialProductLine },
  ],
  subTotalLabel: 'Sub Total',
  totalLabel: 'TOTAL',
  currency: '$',
  notesLabel: 'Notes',
  notes: 'It was great doing business with you.'
}
