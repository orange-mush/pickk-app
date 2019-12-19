import React from 'react';
import styled from 'styled-components/native';

import {ApolloProvider} from 'react-apollo';
import {client} from './lib/apollo/client';

import Navigator from './navigation/navigator';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Container>
        <Navigator />
      </Container>
    </ApolloProvider>
  );
}

const Container = styled.View`
  flex: 1;
`;