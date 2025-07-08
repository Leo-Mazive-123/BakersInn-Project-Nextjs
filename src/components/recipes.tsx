import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
      <Box  sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"centered >
          <Tab label="For Kids" {...a11yProps(0)} sx={{ fontSize: '16px', color:'#2F2160', fontWeight: 'bold' }}  />
          <Tab label="For Vegans" {...a11yProps(1)} sx={{ fontSize: '16px', color:'#2F2160', fontWeight: 'bold' }}   />
          <Tab label="For Family" {...a11yProps(2)} sx={{ fontSize: '16px', color:'#2F2160', fontWeight: 'bold' }} />
       </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <div className='flex justify-center gap-5'>
          <img className='w-80' src="shwarma.png" alt="" /> 
          <img className='w-80' src="shwarma.png" alt="" /> 
          <img className='w-80' src="shwarma.png" alt="" />
        </div>
         
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className='flex justify-center gap-5'>
          <img className='w-80' src="shortbread.png" alt="" /> 
          <img className='w-80' src="shortbread.png" alt="" /> 
          <img className='w-80' src="shortbread.png" alt="" /> 
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
       <div className='flex justify-center gap-5'>
          <img className='w-80' src="salmon.png" alt="" /> 
          <img className='w-80' src="salmon.png" alt="" /> 
          <img className='w-80' src="salmon.png" alt="" /> 
       </div>
      </CustomTabPanel>
    </Box>
  );
}
