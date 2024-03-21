import { Logo, MobileNavBar } from '@lobehub/ui';
import { memo } from 'react';

import ShareAgentButton from '../../features/ShareAgentButton';

const Header = memo(() => {
  return <MobileNavBar right={<ShareAgentButton mobile />} />; //center={<Logo type={'text'} />}
});

export default Header;
