import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function SkeletonComponent({ countofSkeleton }) {
  return (
    <>
      {Array(countofSkeleton)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="card m-2" style={{ width: '18rem' }}>
            


            <Skeleton height={200} style={{ display: 'block' }} />
            
            <div className="card-body">


              
              <Skeleton height={20} style={{ marginBottom: '10px' }} />
              
              

              <Skeleton height={16} width="70%" style={{ marginBottom: '10px' }} />

               <div className="d-flex justify-content align-items-left gap-2">



                <Skeleton height={20} width={80} />
                <Skeleton height={20} width={80} />
                
              </div>
              

              
              <Skeleton count={3} height={14} style={{ marginBottom: '15px' }} />
              
            

              <div className="d-flex justify-content-center align-items-center">
  <Skeleton height={20} width={200} />
</div>

            </div>
          </div>
        ))}
    </>
  );
}

export default SkeletonComponent;