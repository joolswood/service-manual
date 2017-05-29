import React from 'react';
import PropTypes from 'prop-types';
import Container from './components/Container';
import DefaultHeadMeta from './components/DefaultHeadMeta';
import Header from './components/Header';
import Content from './components/Content';


// Styles
import './index.global.scss';


// component
const AppContainer = ( props ) => (
	<Container>
		<DefaultHeadMeta />
		<Header />
		<Content>
			{ props.children }
		</Content>
	</Container>
);

AppContainer.propTypes = {
	children: PropTypes.node,
};

export default AppContainer;