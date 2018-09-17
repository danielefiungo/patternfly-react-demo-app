import React from 'react';
import { connect } from 'react-redux';
import pfLogo from 'patternfly/dist/img/logo-alt.svg';
import pfBrand from 'patternfly/dist/img/brand-alt.svg';
import { find } from 'lodash';
import {
  VerticalNav,
  VerticalNavMasthead,
  VerticalNavBrand,
  VerticalNavItem,
  VerticalNavSecondaryItem
} from 'patternfly-react';

const mapStateToProps = ({
  tennants: { list = [], current = false }
} = {}) => ({
  tennant: find(list, { id: current })
});

const Menu = ({ items, onSelect, location, className, children, tennant }) => (
  <VerticalNav persistentSecondary={false}>
    <VerticalNavMasthead>
      <VerticalNavBrand titleImg={pfBrand} iconImg={pfLogo} />
      <ul className="nav navbar-nav navbar-right navbar-iconic navbar-utility">
        <li className="dropdown">
          <button
            className="btn btn-link dropdown-toggle nav-item-iconic"
            id="userMenu"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <span title="Help" className="fa pficon-user" />
            {tennant && tennant.name}
          </button>
          <ul className="dropdown-menu" aria-labelledby="userMenu">
            <li>
              <a href="#0">{tennant && tennant.name}</a>
            </li>
          </ul>
        </li>
      </ul>
    </VerticalNavMasthead>

    {items.map(item => {
      const active = location.pathname === item.to;
      const subItemActive =
        item.subItems &&
        item.subItems.some(currentItem => location.pathname === currentItem.to);
      return (
        <VerticalNavItem
          key={item.to}
          title={item.title}
          iconClass={item.iconClass}
          active={active || subItemActive}
          onClick={() => onSelect(item.to)}
        >
          {item.subItems &&
            item.subItems.map(secondaryItem => (
              <VerticalNavSecondaryItem
                key={secondaryItem.to}
                title={secondaryItem.title}
                iconClass={secondaryItem.iconClass}
                active={secondaryItem.to === location.pathname}
                onClick={() => onSelect(secondaryItem.to)}
              />
            ))}
        </VerticalNavItem>
      );
    })}
  </VerticalNav>
);

export default connect(mapStateToProps)(Menu);
