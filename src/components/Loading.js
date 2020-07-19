import React from 'react';

export default function Loading() {
  return (
    <div className="laoding-component">
      <div className="spinner">
        <div class="spinner-grow text-dark" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}
