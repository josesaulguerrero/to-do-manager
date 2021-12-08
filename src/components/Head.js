//libraries and hooks
import React from "react";
import { Helmet } from "react-helmet";
//components
//assets

export const Head = () => {
   return (
      <Helmet>
         <meta name="title" content='Tasks Manager' />
         <meta name="description" content="This app helps you manage your time by creating tasks and allowing you to see which ones are currently active and which ones are already completed." />
         {/* open graph */}
         <meta property="og:title" content="Tasks manager" />
         <meta property="og:type" content="website" />
         <meta property="og:image" content="https://i.postimg.cc/FzztSNVH/image.png" />
         <meta property="og:image:alt" content="website screenshoot" />
         <meta property="og:image:type" content="image/png" />
         <meta property="og:url" content="https://your-todos-manager.netlify.app/" />
         <meta property="og:description" content="This app helps you manage your time by creating tasks and allowing you to see which ones are currently active and which ones are already completed." />
         <meta property="og:site_name" content="Tasks manager" />
         {/* twitter cards */}
         <meta name="twitter:title" content="Tasks manager" />
         <meta name="twitter:description" content="This app helps you manage your time by creating tasks and allowing you to see which ones are currently active and which ones are already completed." />
         <meta name="twitter:image" content="https://i.postimg.cc/FzztSNVH/image.png" />
      </Helmet>
   );
};