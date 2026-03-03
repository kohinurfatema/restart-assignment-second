const TicketCard = ({ ticket, onAddToProgress }) => {
  const priorityClass = {
    high: 'priority-high',
    medium: 'priority-medium',
    low: 'priority-low',
  };

  const statusClass = {
    open: 'status-open',
    'in-progress': 'status-inprogress',
  };

  return (
    <div className="ticket-card" onClick={() => onAddToProgress(ticket)}>
      <div className="ticket-card-top">
        <h3 className="ticket-title">{ticket.title}</h3>
        <span className={`status-badge ${statusClass[ticket.status] || 'status-open'}`}>
          {ticket.status === 'in-progress' ? '🟡 In-Progress' : '🟢 Open'}
        </span>
      </div>
      <p className="ticket-description">{ticket.description}</p>
      <div className="ticket-card-bottom">
        <span className="ticket-id">#{ticket.id}</span>
        <span className={`priority-badge ${priorityClass[ticket.priority]}`}>
          {ticket.priority.toUpperCase()} PRIORITY
        </span>
        <span className="ticket-customer">{ticket.customer}</span>
        <span className="ticket-date">📅 {ticket.createdAt}</span>
      </div>
    </div>
  );
};

export default TicketCard;
