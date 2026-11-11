// Shared content for the home page and the section pages.

export const bookingURL = 'https://b2bservicesgroup.zohobookings.com/#/b2bservicesgroup';
export const startURL = '/llc';

export const whyCards = [
  {
    title: 'Protect your personal assets',
    body: 'An LLC separates business debts and liabilities from your home, savings and personal property when it is set up and run correctly.',
    icon: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z',
  },
  {
    title: 'Look established from day one',
    body: 'Customers, lenders and vendors take a registered business more seriously than a sole proprietor working under a personal name.',
    icon: 'M4 20h16M6 20V9l6-5 6 5v11M10 20v-5h4v5',
  },
  {
    title: 'Open business bank accounts',
    body: 'With your LLC, EIN and business license in place, you can open accounts that keep business and personal money apart.',
    icon: 'M3 10h18M5 10v8M9 10v8M15 10v8M19 10v8M3 20h18M12 3l9 5H3z',
  },
  {
    title: 'Get it right the first time',
    body: 'Washington splits LLC setup between the Secretary of State and the Department of Revenue. We handle both so nothing gets missed.',
    icon: 'M5 12l5 5 9-10',
  },
];

export const services = [
  { num: 1, title: 'Certificate of Formation', body: 'We prepare and file your LLC with the Washington Secretary of State.' },
  { num: 2, title: 'State business license', body: 'We file your Washington Business License Application with the Department of Revenue.' },
  { num: 3, title: 'Trade name (DBA)', body: 'One trade name is included, so you can do business under your name without "LLC."' },
  { num: 4, title: 'EIN setup', body: 'We obtain your Employer Identification Number from the IRS so you can bank, hire and file.' },
  { num: 5, title: 'New business checklist', body: 'A clear list of what your new LLC needs next, from accounts to records.' },
  { num: 6, title: 'Local Washington team', body: 'Real people in Rochester, WA, not a national call center. Call, text or meet with us.' },
];

export const included = [
  'Washington Certificate of Formation filing fee ($200)',
  'Washington Business License Application fee',
  'One trade name (DBA), state fee included',
  'EIN obtained from the IRS',
  'A checklist of everything your new LLC needs next',
  'Our preparation and filing service',
];

// Published rates as of November 2026. Review before each update.
export const compareRows = [
  { label: 'Service fee', b2b: 'Included', lz: '$249', zb: '$199' },
  { label: 'WA Certificate of Formation ($200)', b2b: 'Included', lz: '+ $200', zb: '+ $200' },
  { label: 'WA Business License Application', b2b: 'Included', lz: 'Not included', zb: 'Not included' },
  { label: 'Trade name (DBA)', b2b: 'Included', lz: 'Not included', zb: 'Not included' },
  { label: 'EIN', b2b: 'Included', lz: 'Included', zb: 'Included' },
  { label: 'Renews every year', b2b: 'No', lz: 'No', zb: 'Yes, $199/yr' },
  { label: 'Local Washington team', b2b: 'Yes', lz: 'No', zb: 'No' },
];

export const steps = [
  { num: '01', title: 'Tell us about your business', body: 'Fill out our short online request with your name choices, owners and addresses. Questions first? Book a free consultation.' },
  { num: '02', title: 'Review & e-sign', body: 'We email your work order and service agreement to review and sign online, then check name availability.' },
  { num: '03', title: 'We file', body: 'We file with the Secretary of State and Department of Revenue and obtain your EIN.' },
  { num: '04', title: 'You’re open for business', body: 'You get your formation documents, business license, EIN and next-steps checklist.' },
];

export const faqs = [
  { q: 'Does the $400 really include the state fees?', a: 'Yes. The $400 flat rate includes the $200 Certificate of Formation fee, the Washington Business License Application fee and one trade name. City licenses, state endorsements and specialty licenses are not included and are billed at the actual government fee.' },
  { q: 'What are city licenses and endorsements?', a: 'Many Washington cities require their own business license, and some industries need state endorsements or specialty licenses. These are added to your state business license application and carry their own fees, which vary by city and business type.' },
  { q: 'What is a trade name (DBA)?', a: 'A trade name lets you do business under a name other than your legal LLC name. We always recommend at least one, typically your company name without "LLC." One is included, and additional trade names are $5 each (the state fee).' },
  { q: 'Do you form LLCs outside Washington?', a: 'Not at this time. Our LLC formation service is for Washington businesses only.' },
  { q: 'What happens after my LLC is formed?', a: 'You get your formation documents, business license, EIN and a checklist of next steps. B2B Solutions can also help with bookkeeping, payroll and HR as your business grows.' },
];
