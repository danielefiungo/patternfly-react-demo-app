import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map, mapKeys } from 'lodash';
import {
  CardGrid,
  Row,
  Col,
  Card,
  CardHeading,
  CardTitle,
  Icon,
  Button,
  CardBody
} from 'patternfly-react';

import { readTennants, selectTennant } from '../actions/tennants.actions';

const mapStateToProps = state => ({
  tennants: {
    map: mapKeys(state.tennants.list, 'id'),
    active: state.tennants.current
  }
});

const mapDispatchToProps = dispatch => ({
  fetchTennants: () => dispatch(readTennants()),
  selectTennant: event => dispatch(selectTennant(event))
});

class Tennants extends Component {
  componentDidMount() {
    const { fetchTennants } = this.props;
    fetchTennants();
  }
  handleClick = () => {};

  renderTennant = tennants => {
    const { selectTennant } = this.props;
    return map(tennants, tennant => {
      const { id, version, name } = tennant;
      return (
        <Col xs={6} sm={4} md={4} key={id}>
          <Card matchHeight accented>
            <CardHeading>
              <CardTitle>
                <Icon name="user" /> ID: {id} rev: {version}
              </CardTitle>
            </CardHeading>
            <CardBody>
              {name}
              <Button bsStyle="primary" onClick={() => selectTennant(tennant)}>
                Select
              </Button>
            </CardBody>
          </Card>
        </Col>
      );
    });
  };

  render() {
    // return <h1>{JSON.stringify(this.props.tennants.map, null, 2)}</h1>;
    const { tennants } = this.props;
    return (
      <CardGrid matchHeight>
        <Row style={{ marginBottom: '20px', marginTop: '20px' }}>
          {this.renderTennant(tennants.map)}
        </Row>
      </CardGrid>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tennants);
