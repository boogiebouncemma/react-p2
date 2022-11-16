import data from "./data.js"

import Card from "./components/Card.js"
import Navbar from "./components/Navbar.js"


export default function App() {
    const trips = data.map(trip => <Card key={trip.title} item={trip} /> )
        
    return (
        <div className="app--container">
            <Navbar />
            {trips}

        </div>
    )
}