import React from 'react';
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

const EmployeeCard = ({ employee, selectEmployee }) => {
  const { id, name, skillProficiencySet } = employee;
  return (
    <Card matchHeight accented>
      <CardHeading>
        <CardTitle>
          <Icon name="user" /> Name: {name} #{id}
        </CardTitle>
      </CardHeading>
      <CardBody>
        {name}
        <Button bsStyle="primary" onClick={() => selectEmployee(employee)}>
          Select
        </Button>
      </CardBody>
    </Card>
  );
};

export default EmployeeCard;
