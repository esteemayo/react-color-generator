import { useState, useEffect } from 'react';

// import rgbToHex from 'utils';

const Color = ({ rgb, hexColor, weight, index }) => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [alert]);

  const bcg = rgb.join(',');
  //   const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  const handleCopyHexValue = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  };

  return (
    <article
      onClick={handleCopyHexValue}
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percent-value">{weight}</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">Copied to clipboard</p>}
    </article>
  );
};

export default Color;
