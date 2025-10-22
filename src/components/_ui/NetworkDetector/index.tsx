import { useEffect, useState } from 'react';

export function NetworkDetector() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOffline = () => {
      setIsOnline(false);
    };

    const handleOnline = () => {
      setIsOnline(true);
    };

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOnline ? '' : 'hidden';
  }, [isOnline]);

  if (!isOnline) {
    return (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.842)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1001,
        }}
      >
        <div
          style={{
            background: '#fff',
            borderRadius: '20px',
            padding: '40px 32px',
            maxWidth: '420px',
            width: '90%',
            textAlign: 'center',
            boxShadow: '0 12px 32px rgba(0,0,0,0.25)',
            animation: 'fadeInUp 0.4s ease',
          }}
        >
          <div
            style={{
              fontSize: '50px',
              marginBottom: '20px',
              color: '#1976d2',
            }}
          >
            📡
          </div>
          <h2 style={{ color: '#1976d2', marginBottom: '12px' }}>Sem conexão</h2>
          <p
            style={{
              color: '#555',
              marginBottom: '24px',
              lineHeight: '1.5',
            }}
          >
            Você está offline no momento.
            <br />
            Verifique sua internet para continuar.
          </p>
          <div
            style={{
              width: '40px',
              height: '40px',
              border: '4px solid #1976d2',
              borderTop: '4px solid transparent',
              borderRadius: '50%',
              margin: '0 auto',
              animation: 'spin 1s linear infinite',
            }}
          />
        </div>

        {/* animações */}
        <style>
          {`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}
        </style>
      </div>
    );
  }

  return null;
}
