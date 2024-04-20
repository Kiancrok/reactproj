import React from 'react';

function Videos() {
  return (
    <div  className="flex flex-col items-center justify-center min-h-screen">
      <h2>Video Player</h2>
      <video style={{ position: 'absolute', left: 50}}width="200" controls>
        <source className='vid1'src="/images/EXXF3635.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video style={{ position: 'absolute', left: 275}}width="200" controls>
        <source className='vid1'src="/images/IMG_0425.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video style={{ position: 'absolute', left: 500}}width="200" controls>
        <source className='vid1'src="/images/RADX0879.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <video style={{ position: 'absolute', left: 725}}width="200" controls>
        <source className='vid1'src="/images/IMG_0592.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <video style={{ position: 'absolute', left: 950 }}width="200" controls>
        <source className='vid1'src="/images/IMG_1032.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Videos;