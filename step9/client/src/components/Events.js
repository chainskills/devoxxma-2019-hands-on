import React, { useState } from 'react';

import 'materialize-css/dist/css/materialize.min.css';

const Events = ({ drizzle, owner }) => {
  const { Greetings } = drizzle.contracts;
  const [eventGreetings, setEventGreetings] = useState(null);
  const [eventServiceFee, setEventServiceFee] = useState(null);
  const [eventMap, setEventMap] = useState(new Map());

  const subscribe = () => {
    if (eventGreetings === null) {
      // TODO: Listen to the event when the greetings message changed
      const event = Greetings.events
        .GreetingsChangedEvent({
          fromBlock: 'latest',
          lastBlock: 'latest'
        })
        .on('data', function(eventGreetings) {
          if (typeof eventMap.get(eventGreetings.id) === 'undefined') {
            const eventMessage =
              'Account: ' +
              eventGreetings.returnValues._account +
              ' Greetings: ' +
              eventGreetings.returnValues._greetings;

            eventMap.set(eventGreetings.id, {
              key: eventGreetings.id,
              name: eventGreetings.event,
              message: eventMessage
            });
            setEventMap(eventMap);
          }
        })
        .on('error', function(error) {
          console.error(error);
        });

      setEventGreetings(event);
    }

    if (owner && eventServiceFee === null) {
      // TODO: Listen to the event when the service fee changed

      const event = Greetings.events
        .NewServiceFeeEvent({
          fromBlock: 'latest',
          lastBlock: 'latest'
        })
        .on('data', function(eventServiceFee) {
          if (typeof eventMap.get(eventServiceFee.id) === 'undefined') {
            const eventMessage =
              'New Service fee: ' +
              drizzle.web3.utils.fromWei(
                eventServiceFee.returnValues._serviceFee,
                'ether'
              );

            eventMap.set(eventServiceFee.id, {
              key: eventServiceFee.id,
              name: eventServiceFee.event,
              message: eventMessage
            });

            setEventMap(eventMap);
          }
        })
        .on('error', function(error) {
          console.error(error);
        });

      setEventServiceFee(event);
    }
  };

  const unsubscribe = () => {
    // TODO: unsubcribe all events

    if (eventGreetings !== null) {
      eventGreetings.unsubscribe();
      setEventGreetings(null);
    }

    if (eventServiceFee !== null) {
      eventServiceFee.unsubscribe();
      setEventServiceFee(null);
    }

    setEventMap(new Map());
  };

  let allEvents = [];
  if (eventMap !== null && typeof eventMap !== 'undefined') {
    // received a new event
    const eventsList = Array.from(eventMap.values());
    eventsList.reverse().forEach(evt => {
      const currentEvent = (
        <p key={evt.key}>
          [<span className='notifications-item'>{evt.name}</span>] ->{' '}
          <span>{evt.message}</span>
        </p>
      );

      allEvents.push(currentEvent);
    });
  }

  return (
    <div>
      <div className='row'>
        <div className='col s12 m3 push-m9 input-field'>
          {eventGreetings !== null && (
            <a
              href='#!'
              className='waves-effect waves-light btn right primary-content blue'
              style={{ margin: '5px' }}
              onClick={() => unsubscribe()}
            >
              Unsubscribe
            </a>
          )}
          {eventGreetings === null && (
            <a
              href='#!'
              className='waves-effect waves-light btn right primary-content blue'
              style={{ margin: '5px' }}
              onClick={() => subscribe()}
            >
              Subscribe
            </a>
          )}
        </div>
      </div>
      <div className='row'>
        <div className='col s12'>{allEvents}</div>
      </div>
    </div>
  );
};

export default Events;
