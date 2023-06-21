import {
  cloneElement,
  forwardRef,
  HTMLAttributes,
  JSXElementConstructor,
  ReactElement,
  Ref,
} from 'react';
import { DisclosureProps } from 'reakit';
import {
  Menu as BaseMenu,
  MenuButton,
  MenuItem,
  MenuSeparator,
  MenuStateReturn,
} from 'reakit/Menu';

export interface DropdownProps {
  disclosure: ReactElement<any, string | JSXElementConstructor<any>>;
  menu?: MenuStateReturn;
  menuItems: ReactElement<any, string | JSXElementConstructor<any>>[];
  menuProps: HTMLAttributes<HTMLDivElement>;
}

const Dropdown = forwardRef(
  (
    { disclosure, menu, menuItems, menuProps, ...props }: DropdownProps,
    ref: Ref<any>
  ): JSX.Element => {
    return (
      <>
        <MenuButton ref={ref} {...menu} {...props} {...disclosure.props}>
          {(disclosureProps: DisclosureProps) =>
            cloneElement(disclosure, disclosureProps)
          }
        </MenuButton>
        <BaseMenu {...menu} {...menuProps}>
          {menuItems.map((item, i) => {
            if (item.type === MenuSeparator) {
              return cloneElement(item, {
                ...menu,
                key: item.key || i,
                ...item.props,
              });
            }
            return (
              <MenuItem {...menu} {...item.props} key={item.key || i}>
                {(itemProps) => cloneElement(item, itemProps)}
              </MenuItem>
            );
          })}
        </BaseMenu>
      </>
    );
  }
);

Dropdown.displayName = 'Dropdown';

export { Dropdown };
