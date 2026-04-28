const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
  const manager = await prisma.teamMember.create({ data: { name: 'Managing Partner', email: 'manager@example.com', role: 'MANAGING_PARTNER' } });
  const lawyer = await prisma.teamMember.create({ data: { name: 'Sarah Khan', email: 'sarah@example.com', role: 'LAWYER' } });
  const client = await prisma.client.create({ data: { name: 'Horizon Textiles Ltd.', email: 'client@horizon.com' } });
  const matter = await prisma.matter.create({
    data: {
      matterNumber: 'LIT-2026-014',
      title: 'Horizon Textiles v. Apex Trade',
      type: 'Commercial dispute',
      stage: 'Discovery',
      status: 'Active',
      clientId: client.id,
      leadLawyerId: lawyer.id
    }
  });
  await prisma.deadline.create({ data: { matterId: matter.id, title: 'Serve responses', dueDate: new Date('2026-05-03'), type: 'COURT' } });
  await prisma.communication.create({ data: { matterId: matter.id, source: 'OPPOSING_COUNSEL', senderName: 'Opposing Counsel', subject: 'Document request follow-up', receivedAt: new Date(), status: 'UNTRIAGED' } });
  await prisma.troubleTicket.create({ data: { clientId: client.id, matterId: matter.id, title: 'Status update request', status: 'Open', priority: 'HIGH' } });
  await prisma.delegatedTask.create({ data: { matterId: matter.id, title: 'Review response draft', assigneeId: lawyer.id, delegatedById: manager.id, status: 'IN_PROGRESS' } });
  await prisma.invoice.create({ data: { clientId: client.id, matterId: matter.id, invoiceNumber: 'INV-1001', amount: 12500, amountPaid: 5000, status: 'Partially Paid' } });
}
main().finally(() => prisma.$disconnect());
