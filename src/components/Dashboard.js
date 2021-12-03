import React from 'react';
import Zoom  from '@material-ui/core/Zoom';
import Card  from '@material-ui/core/Card';

export default function SimpleFade() {
  const [fadeTimeout, setFadeTimeout] = React.useState(0);
  React.useEffect(() => {
    setFadeTimeout(900);
  }, []);

  return (
    <div>
      <div>
        <Zoom in={fadeTimeout} >
          <Card >
            Dashboard
          </Card>
        </Zoom >
      </div>
    </div>
  );
}
