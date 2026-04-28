export const dashboardStats = {
  activeMatters: 60,
  openDeadlines: 148,
  overdueMilestones: 11,
  openTickets: 9,
  untriagedCommunications: 14,
  delegatedTasks: 38,
  arOutstanding: 84250,
  wipUnbilled: 46800
};

export const matters = [
  {
    id: 'm1',
    client: 'Horizon Textiles Ltd.',
    matterNumber: 'LIT-2026-014',
    type: 'Commercial dispute',
    stage: 'Discovery',
    leadLawyer: 'Sarah Khan',
    nextDeadline: '2026-05-03',
    nextMilestone: 'Draft interrogatories',
    daysToDeadline: 5,
    daysToMilestone: 2,
    risk: 'High',
    openTasks: 4,
    openTickets: 2,
    arOutstanding: 12500,
    comment: 'Awaiting client documents and response draft review.'
  },
  {
    id: 'm2',
    client: 'Delta Marine',
    matterNumber: 'LIT-2026-008',
    type: 'Employment litigation',
    stage: 'Motions',
    leadLawyer: 'Imran Rahman',
    nextDeadline: '2026-05-08',
    nextMilestone: 'Prepare hearing binder',
    daysToDeadline: 10,
    daysToMilestone: 6,
    risk: 'Medium',
    openTasks: 3,
    openTickets: 1,
    arOutstanding: 8400,
    comment: 'Client responsive; opposing counsel requested extension.'
  },
  {
    id: 'm3',
    client: 'Nexa Foods',
    matterNumber: 'LIT-2026-002',
    type: 'Contract claim',
    stage: 'Pre-trial',
    leadLawyer: 'Ayesha Noor',
    nextDeadline: '2026-04-30',
    nextMilestone: 'Witness prep complete',
    daysToDeadline: 2,
    daysToMilestone: -1,
    risk: 'High',
    openTasks: 5,
    openTickets: 0,
    arOutstanding: 19300,
    comment: 'Internal prep slipped; needs manager intervention.'
  }
];

export const communications = [
  { id: 'c1', from: 'Opposing counsel', matter: 'Horizon Textiles Ltd.', subject: 'Document request follow-up', age: '2d', status: 'Awaiting response', priority: 'High' },
  { id: 'c2', from: 'Client', matter: 'Delta Marine', subject: 'Urgent update request', age: '6h', status: 'Untriaged', priority: 'High' },
  { id: 'c3', from: 'Client', matter: 'Nexa Foods', subject: 'Billing question', age: '1d', status: 'Assigned', priority: 'Medium' }
];

export const tickets = [
  { id: 't1', client: 'Horizon Textiles Ltd.', matter: 'LIT-2026-014', title: 'Need filing status update', owner: 'Paralegal Team', sla: '4h left', priority: 'High', status: 'Open' },
  { id: 't2', client: 'Delta Marine', matter: 'LIT-2026-008', title: 'Invoice clarification request', owner: 'Billing Coordinator', sla: '1d left', priority: 'Medium', status: 'In progress' }
];

export const tasks = [
  { id: 'd1', title: 'Review draft response', assignee: 'Sarah Khan', due: 'Today', delegatedBy: 'Managing Partner', status: 'Blocked' },
  { id: 'd2', title: 'Assemble exhibits', assignee: 'Paralegal - Tania', due: 'Tomorrow', delegatedBy: 'Imran Rahman', status: 'In progress' },
  { id: 'd3', title: 'Call client re settlement authority', assignee: 'Ayesha Noor', due: '3 days', delegatedBy: 'Managing Partner', status: 'Not started' }
];

export const billing = [
  { matter: 'Horizon Textiles Ltd.', wip: 14200, billed: 9900, collected: 7400, ar: 2500, signal: 'Under-billed' },
  { matter: 'Delta Marine', wip: 9200, billed: 11000, collected: 11000, ar: 0, signal: 'Healthy' },
  { matter: 'Nexa Foods', wip: 18100, billed: 12300, collected: 3000, ar: 9300, signal: 'Collection risk' }
];


export const teamCapacity = [
  { name: 'Sarah Khan', role: 'Lead Lawyer', utilization: 92 },
  { name: 'Imran Rahman', role: 'Senior Lawyer', utilization: 78 },
  { name: 'Ayesha Noor', role: 'Lawyer', utilization: 88 },
  { name: 'Tania Sultana', role: 'Paralegal', utilization: 71 }
];
