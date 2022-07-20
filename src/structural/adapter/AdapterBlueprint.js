import React from 'react';

export class AdapterClient extends React.Component {
  send(data) {
    this.props.adapter.send(data);
  }

  render() {
    return (
      <>
        <button onClick={() => this.send({ a: 1 })}>Client Method</button>
      </>
    );
  }
}

// ClientAdapter provides an interface for client -> service
// where the service only accepts JSON data, and the client
// works with POJOs
export class ClientAdapter {
  constructor(service) {
    this.adaptee = service;
  }

  send(data) {
    const json = JSON.stringify(data);
    this.adaptee.send(json);
  }
}

export class AdapterService {
  send(json) {
    if (typeof json !== 'string') {
      throw new Error('AdapterService data must be a string');
    }

    console.log({ json });
  }
}

function AdapterBlueprint() {
  const adapterService = new AdapterService();
  const clientAdapter = new ClientAdapter(adapterService);

  return (
    <>
      <AdapterClient adapter={clientAdapter} />
    </>
  );
}

export default AdapterBlueprint;
