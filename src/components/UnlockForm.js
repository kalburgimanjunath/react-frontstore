import React from 'react';
export default function UnlockForm() {
  return (
    <div style={{ flex: 1, display: 'flex' }}>
      <div style={{ marginRight: 15, marginBottom: 10 }}>
        <input
          style={{ padding: 10 }}
          type="text"
          placeholder="Enter your email"
        />
      </div>
      <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
        Get Free Unlock
      </button>
    </div>
  );
}
