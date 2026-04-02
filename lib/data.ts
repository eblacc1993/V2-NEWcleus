export const commandStats = [
  { label: 'Active pipeline', value: '$1.46M' },
  { label: 'Open alerts', value: '4' },
  { label: 'Collections target', value: '$84.5K' },
  { label: 'Launch-ready markets', value: '3' },
];

export const alerts = [
  { title: 'Aging receivable', detail: 'INV-2208 is past target collection timing.', severity: 'Critical' },
  { title: 'Launch dependency', detail: 'Dallas operator economics need final approval.', severity: 'High' },
  { title: 'Dealer inactivity', detail: 'Six Los Angeles dealer targets have no next action.', severity: 'Medium' },
  { title: 'Legal stall', detail: 'Enterprise pilot remains blocked in legal review.', severity: 'High' },
];

export const tasks = [
  { title: 'Finalize Dallas operator packet', team: 'Operations', due: 'Today' },
  { title: 'Approve dealer outreach sequence', team: 'Growth', due: 'Tomorrow' },
  { title: 'Review AR/AP sync rules', team: 'Finance', due: '2 days' },
  { title: 'Publish command KPI board', team: 'Leadership', due: '3 days' },
];

export const crmRecords = [
  {
    id: 'westlake-private-client',
    name: 'Westlake Private Client',
    type: 'UHNW Client',
    market: 'Los Angeles',
    owner: 'Eric Brooks',
    status: 'Hot',
    value: '$285,000',
    nextAction: 'Finalize proposal and confirm travel scope.',
  },
  {
    id: 'dallas-launch-partner',
    name: 'Dallas Launch Partner',
    type: 'Operator',
    market: 'Dallas',
    owner: 'Victoria Chen',
    status: 'Active',
    value: '$420,000',
    nextAction: 'Review economics and launch sequence.',
  },
  {
    id: 'premier-auto-group',
    name: 'Premier Auto Group',
    type: 'Dealer Group',
    market: 'Dallas',
    owner: 'Alex Parker',
    status: 'Warm',
    value: '$590,000',
    nextAction: 'Book GM intro and broker program review.',
  },
];

export const ledger = [
  { date: '2026-04-01', type: 'AR', description: 'Westlake Private Client retainer', amount: '+$84,500', status: 'Open' },
  { date: '2026-03-31', type: 'AP', description: 'Vendor logistics payment', amount: '-$12,800', status: 'Pending Approval' },
  { date: '2026-03-30', type: 'Commission', description: 'Dallas operator allocation', amount: '-$9,200', status: 'Hold' },
  { date: '2026-03-29', type: 'Membership', description: 'Black tier monthly billing', amount: '+$14,000', status: 'Collected' },
];

export const users = [
  { name: 'Eric Brooks', role: 'Founder / Command', market: 'Global', state: 'Active' },
  { name: 'Victoria Chen', role: 'Operator Lead', market: 'Dallas', state: 'Active' },
  { name: 'Alex Parker', role: 'Dealer Lead', market: 'National', state: 'Invited' },
  { name: 'Sophia Grant', role: 'Finance Control', market: 'Los Angeles', state: 'Active' },
];

export const schema = [
  ['users', 'id, full_name, email, role, market, status'],
  ['clients', 'id, name, type, tier, market, owner_id, status, notes'],
  ['deals', 'id, client_id, title, stage, value, owner_id, priority'],
  ['tasks', 'id, title, related_type, related_id, assigned_to, due_date'],
  ['operators', 'id, name, market, readiness_score, category, status'],
  ['dealers', 'id, group_name, market, broker_friendly, score'],
  ['invoices', 'id, deal_id, invoice_number, amount, status, due_date'],
  ['alerts', 'id, title, severity, related_type, related_id, resolved'],
];
