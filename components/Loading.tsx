import React from 'react';

// Inline style for spinner animation
const spinnerStyle = `
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.spinner-border {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  border: 0.25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.75s linear infinite;
}
`;

const Loading: React.FC = () => {
    return (
        <>
            <style>
                {spinnerStyle}
            </style>
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-md" role="status">
                    <span className="visually-hidden">
                    </span>
                </div>
            </div>

        </>
    );
};

export default Loading;
