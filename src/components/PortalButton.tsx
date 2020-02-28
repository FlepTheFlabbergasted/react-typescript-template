import React from 'react';
import { createPortal } from 'react-dom';

import usePortal from '../common/helpers/use_portal';

interface PortalButtonProps {
  id: string;
  className: string
  onClick: () => void;
}

const PortalButton = (props: PortalButtonProps) => {
  const portalContainer = usePortal(props.id);
  const onlyChildComponent = <button onClick={props.onClick}>Recenter</button>;
  portalContainer.setAttribute('class', props.className);

  return createPortal(onlyChildComponent, portalContainer);
}

export default PortalButton;