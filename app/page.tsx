
import Home from '@/components/Home/Home';

function HomePage(){
  return (
    <div>
      {
        /* <Button>
              Click Me
            </Button>
          <Button variant="default" size="lg">
              Click Me
            </Button>
            <Button variant="secondary" size="sm">
              Secondary Button
            </Button>
            <Button variant="outline" size="icon">
              <svg className="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
            </Button>
          <Button variant="ghost" size="default"> Ghost</Button> */

        <Home />
      }
    </div>
  );
};

export default HomePage;

import React from 'react';

// basic routing in Next.js 13 with app directory
// this file is used to handle dynamic routes
// (invisible)\product\product-detail\[id] - invisible

// \product\product-detail\[id] - invisible
// const ProductDetails = ({ params }: { params: { id: string } }) => {
//   const id = params.id;
//   return (
//     <div>ProductDetails {id}</div>
//   );
// };

// export default ProductDetails;
