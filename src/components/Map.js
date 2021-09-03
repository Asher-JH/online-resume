import React from "react";
import BingMapsReact from "bingmaps-react";

const Map = ({ height, latitude, longitude }) => {
  return (
    <BingMapsReact
      bingMapsKey="
        AvC_BZ4l0WSUS4WHjnvtgx501GjMbSw_urq5X5zHeCE0SnHF091oLg9aAIYP_vIY
      "
      width="100%"
      mapOptions={{
        disableScrollWheelZoom: true,
        showDashboard: false,
        disableZooming: true,
        disablePanning: true,
      }}
      height={height}
      viewOptions={{
        center: { latitude, longitude },
        mapTypeId: "road",
      }}
    />
  );
};

export default Map;
