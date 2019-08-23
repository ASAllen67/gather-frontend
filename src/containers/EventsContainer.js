import React from 'react'
import EventCard from '../components/EventCard'
import '../stylesheets/EventsContainer.scss'

export default class EventsContainer extends React.Component {

	state = { events: null }

	componentDidMount() {
		fetch('http://localhost:3000/events')
		.then(res => res.json())
		.then(res => this.setState({ events: res }))
	}

	render() {
		if (!this.state.events)
			return null

		console.log(this.state)
		return (
			<div id='EventsContainer'>
				{
					this.state.events.map( e => <EventCard event={e} key={e.id} /> )
				}
			</div>
		)
	}
}
