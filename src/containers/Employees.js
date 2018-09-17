import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map, mapKeys } from 'lodash';
import { CardGrid, Row, Col } from 'patternfly-react';

import { readEmployees, selectEmployee } from '../actions/employees.actions';
import EmployeeCard from '../components/EmployeeCard';

const mapStateToProps = state => ({
  employees: {
    map: mapKeys(state.employees.list, 'id'),
    active: state.employees.current,
    err: state.employees.err
  },
  tennants: {
    map: mapKeys(state.tennants.list, 'id'),
    active: state.tennants.current
  }
});

const mapDispatchToProps = dispatch => ({
  fetchEmployees: tennant => dispatch(readEmployees(tennant)),
  selectEmployee: employee => dispatch(selectEmployee(employee))
});

class Employees extends Component {
  componentDidMount() {
    const { fetchEmployees, tennants } = this.props;
    fetchEmployees(tennants.map[tennants.active]);
  }

  renderEmoloyee = employees => {
    const { selectEmployee } = this.props;
    return map(employees, employee => {
      const { id = -1 } = employee;
      return (
        <Col xs={6} sm={4} md={4} key={id}>
          <EmployeeCard employee={employee} selectEmployee={selectEmployee} />
        </Col>
      );
    });
  };

  render() {
    // return <h1>{JSON.stringify(this.props.tennants.map, null, 2)}</h1>;
    const {
      employees: { map, err }
    } = this.props;
    switch (err) {
      case 'no-tennant':
        return <h1>Please select a tennant</h1>;
      default:
        return (
          <CardGrid matchHeight>
            <Row style={{ marginBottom: '20px', marginTop: '20px' }}>
              {this.renderEmoloyee(map)}
            </Row>
          </CardGrid>
        );
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Employees);
