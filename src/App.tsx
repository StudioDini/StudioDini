export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        padding: '60px 80px',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        <h1 style={{
          color: '#E9BB38',
          fontSize: '56px',
          margin: '0 0 20px 0',
          fontWeight: '700'
        }}>
          Studio Dini
        </h1>
        <div style={{
          fontSize: '20px',
          color: '#333',
          marginBottom: '30px'
        }}>
          ✅ Funcionando!
        </div>
        <p style={{
          fontSize: '16px',
          color: '#666',
          lineHeight: '1.6',
          margin: '0'
        }}>
          Se você está vendo esta mensagem, significa que o React está renderizando corretamente no Figma Make!
        </p>
      </div>
    </div>
  );
}
