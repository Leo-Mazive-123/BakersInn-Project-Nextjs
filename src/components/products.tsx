'use client';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Image from 'next/image';

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

  // Consistent image sizes for all tabs
  const imgWidth = 240;
  const imgHeight = 180;

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: '30px' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%', maxWidth: 600 }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
            <Tab label="Bread" {...a11yProps(0)} sx={{ fontSize: '16px', color: '#2F2160', fontWeight: 'bold' }} />
            <Tab label="Meat Pies" {...a11yProps(1)} sx={{ fontSize: '16px', color: '#2F2160', fontWeight: 'bold' }} />
            <Tab label="Scones" {...a11yProps(2)} sx={{ fontSize: '16px', color: '#2F2160', fontWeight: 'bold' }} />
            <Tab label="Donuts" {...a11yProps(3)} sx={{ fontSize: '16px', color: '#2F2160', fontWeight: 'bold' }} />
          </Tabs>
        </Box>
      </Box>

      <CustomTabPanel value={value} index={0}>
        {/* Added justify-center on large screens */}
        <div className="flex gap-5 overflow-x-auto sm:overflow-visible px-2 sm:px-0 snap-x snap-mandatory scroll-smooth justify-start sm:justify-center">
          <div className="flex-shrink-0 snap-start">
            <Image src="/loaf1.png" alt="Bread Loaf 1" width={imgWidth} height={imgHeight} />
          </div>
          <div className="flex-shrink-0 snap-start">
            <Image src="/loaf2.png" alt="Bread Loaf 2" width={imgWidth} height={imgHeight} />
          </div>
          <div className="flex-shrink-0 snap-start">
            <Image src="/loaf3.png" alt="Bread Loaf 3" width={imgWidth} height={imgHeight} />
          </div>
        </div>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <div className="flex gap-5 overflow-x-auto sm:overflow-visible px-2 sm:px-0 snap-x snap-mandatory scroll-smooth justify-start sm:justify-center">
          <div className="flex-shrink-0 snap-start">
            <Image src="/pie1.png" alt="Meat Pie 1" width={imgWidth} height={imgHeight} />
          </div>
          <div className="flex-shrink-0 snap-start">
            <Image src="/pie2.png" alt="Meat Pie 2" width={imgWidth} height={imgHeight} />
          </div>
          <div className="flex-shrink-0 snap-start">
            <Image src="/pie3.png" alt="Meat Pie 3" width={imgWidth} height={imgHeight} />
          </div>
        </div>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <div className="flex gap-5 overflow-x-auto sm:overflow-visible px-2 sm:px-0 snap-x snap-mandatory scroll-smooth justify-start sm:justify-center">
          <div className="flex-shrink-0 snap-start">
            <Image src="/scone1.png" alt="Scone 1" width={imgWidth} height={imgHeight} />
          </div>
          <div className="flex-shrink-0 snap-start">
            <Image src="/scone1.png" alt="Scone 1" width={imgWidth} height={imgHeight} />
          </div>
          <div className="flex-shrink-0 snap-start">
            <Image src="/scone1.png" alt="Scone 1" width={imgWidth} height={imgHeight} />
          </div>
        </div>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        <div className="flex gap-5 overflow-x-auto sm:overflow-visible px-2 sm:px-0 snap-x snap-mandatory scroll-smooth justify-start sm:justify-center">
          <div className="flex-shrink-0 snap-start">
            <Image src="/donut1.png" alt="Donut 1" width={imgWidth} height={imgHeight} />
          </div>
          <div className="flex-shrink-0 snap-start">
            <Image src="/donut2.png" alt="Donut 2" width={imgWidth} height={imgHeight} />
          </div>
          <div className="flex-shrink-0 snap-start">
            <Image src="/donut1.png" alt="Donut 1" width={imgWidth} height={imgHeight} />
          </div>
        </div>
      </CustomTabPanel>
    </Box>
  );
}

