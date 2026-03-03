import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketCard from './components/TicketCard';
import TaskStatus from './components/TaskStatus';
import ticketsData from './data/tickets.json';
import './App.css';

function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  const handleAddToProgress = (ticket) => {
    const alreadyAdded = inProgressTickets.find((t) => t.id === ticket.id);
    if (alreadyAdded) {
      toast.warn(`"${ticket.title}" is already in progress!`);
      return;
    }
    setInProgressTickets([...inProgressTickets, ticket]);
    setTickets(tickets.filter((t) => t.id !== ticket.id));
    toast.info(`"${ticket.title}" added to Task Status!`);
  };

  const handleComplete = (ticket) => {
    setInProgressTickets(inProgressTickets.filter((t) => t.id !== ticket.id));
    setResolvedTickets([...resolvedTickets, ticket]);
    toast.success(`"${ticket.title}" marked as resolved!`);
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar />
      <Banner inProgress={inProgressTickets.length} resolved={resolvedTickets.length} />

      <main className="main-section">
        <div className="tickets-panel">
          <h2 className="section-heading">Customer Tickets</h2>
          <div className="tickets-grid">
            {tickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                onAddToProgress={handleAddToProgress}
              />
            ))}
          </div>
        </div>

        <TaskStatus
          inProgressTickets={inProgressTickets}
          resolvedTickets={resolvedTickets}
          onComplete={handleComplete}
        />
      </main>
    </>
  );
}

export default App;
