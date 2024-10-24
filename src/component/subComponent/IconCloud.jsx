import React, { useEffect, useMemo, useState } from "react";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

// Define cloudProps without using ICloud
const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

const renderCustomIcon = (icon) => {
  const bgHex = "#f3f2ef"; // Fixed light theme background color
  const fallbackHex = "#6e6e73"; // Fixed fallback color
  const minContrastRatio = 1.2; // Fixed contrast ratio for light theme

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 50,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(), // Disable the click
    },
  });
};

const IconCloud = ({ iconSlugs }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map((icon) => renderCustomIcon(icon));
  }, [data]);

  return (
    <Cloud
      {...cloudProps}
      style={{
        width: "100px",  // Set width to 400px
        height: "100px", // Set height to 400px
        margin: "30px",
        padding: "15px",
      }}
    >
      {renderedIcons}
    </Cloud>
  );
};

export default IconCloud;
