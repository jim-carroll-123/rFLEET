'use client';

import React, { useEffect, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';



import Link from 'next/link';



import { WMSSection } from './sections/WMS/page';
import { AddressBookSection } from './sections/address-book/page';
import { DashboardSection } from './sections/dashboard/page';
import { ECommerceSection } from './sections/ecommerce/page';
import { NewShipmentSection } from './sections/new-shipment/page';
import { NewPFQSection } from './sections/newPFQ/page';
import { NewQuoteSection } from './sections/newquote/page';
import { ProductSection } from './sections/product/page';
import { ReportsSection } from './sections/reports/page';
import { ShipmentProfileSection } from './sections/shipment-profile/page';


// Define the props that Home component accepts
interface HomeProps {
  // ... you can add more props here if needed
}

export default function Home(props: HomeProps) {
  return (
    <ParallaxProvider>
      <DashboardSection />
    </ParallaxProvider>
  )
}