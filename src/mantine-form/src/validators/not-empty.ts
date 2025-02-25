import React from 'react';

export function notEmpty(error?: React.ReactNode) {
  const _error = error || true;

  return (value: unknown) => {
    if (typeof value === 'string') {
      return value.trim().length > 0 ? null : _error;
    }

    if (Array.isArray(value)) {
      return value.length > 0 ? null : _error;
    }

    if (value === null || value === undefined) {
      return _error;
    }

    return null;
  };
}
