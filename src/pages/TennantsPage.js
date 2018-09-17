import React from 'react';
import { connect } from 'react-redux';
import { find } from 'lodash';
import Tennants from '../containers/Tennants';

const mapStateToProps = ({ tennants: { list = [], current = false } } = {}) => ({
  tennant: find(list, { id: current })
});
const TennanstPage = () => <Tennants />;

export default connect(mapStateToProps)(TennanstPage);
