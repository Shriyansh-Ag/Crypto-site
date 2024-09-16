import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaLightbulb } from 'react-icons/fa';

  const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaLightbulb); 

  return (
    <IconButton
      variant="ghost"
      color="current"
      pos={'fixed'}
      top={"4"}
      right={"4"}
      zIndex={'overlay'}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};

export default ColorModeSwitcher;
