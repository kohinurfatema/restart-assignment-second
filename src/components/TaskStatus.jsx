const TaskStatus = ({ inProgressTickets, resolvedTickets, onComplete }) => {
  return (
    <div className="task-status-panel">
      <div className="task-status-section">
        <h2 className="task-status-heading">Task Status</h2>
        {inProgressTickets.length === 0 ? (
          <p className="task-status-empty">Select a ticket to add to Task Status</p>
        ) : (
          <ul className="task-status-list">
            {inProgressTickets.map((ticket) => (
              <li key={ticket.id} className="task-status-item">
                <span className="task-status-title">{ticket.title}</span>
                <button
                  className="btn-complete"
                  onClick={() => onComplete(ticket)}
                >
                  Complete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="resolved-section">
        <h2 className="task-status-heading">Resolved Task</h2>
        {resolvedTickets.length === 0 ? (
          <p className="task-status-empty">No resolved tasks yet.</p>
        ) : (
          <ul className="task-status-list">
            {resolvedTickets.map((ticket) => (
              <li key={ticket.id} className="task-status-item resolved-item">
                <span className="task-status-title">{ticket.title}</span>
                <span className="resolved-badge">✔ Resolved</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TaskStatus;
