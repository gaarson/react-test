import React from 'react';
import DepartmentList from './department-list';
import renderer from 'react-test-renderer';

it('render departments list', () => {
  const component = renderer.create(
    <DepartmentList />
  )
  let tree = component.toJSON();

  exprect(tree).toMatchSnapshot();

})
