import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { 
  capitalize, 
  chunkArray, 
  debounce, 
  deepClone, 
  formatNumberWithCommas,
  kebabCase,
  slugify,
  truncate,
  roundToDecimal,
  clamp,
  flattenArray,
  shuffleArray,
  generateAllowedOrigins
} from '@devlander/utils';

interface HomeProps {
  serverSideResults: {
    stringTest: string;
    arrayTest: number[][];
    objectTest: any;
    mathTest: string;
    validationTest: string[];
  };
}

export default function Home({ serverSideResults }: HomeProps) {
  const [clientSideResults, setClientSideResults] = useState<any>(null);
  const [debounceCount, setDebounceCount] = useState(0);

  // Test debounce on client side
  const debouncedIncrement = debounce(() => {
    setDebounceCount(prev => prev + 1);
  }, 1000);

  useEffect(() => {
    // Client-side tests
    const testString = capitalize('client side test');
    const testArray = chunkArray([1, 2, 3, 4, 5, 6], 2);
    const testObj = { client: true, nested: { value: 'test' } };
    const testClone = deepClone(testObj);
    const testNumber = formatNumberWithCommas(9876543);

    setClientSideResults({
      stringTest: testString,
      arrayTest: testArray,
      objectTest: testClone,
      mathTest: testNumber,
    });

    // Test debounce functionality
    const interval = setInterval(() => {
      debouncedIncrement();
    }, 100);
    
    return () => clearInterval(interval);
  }, [debouncedIncrement]);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>
        @devlander/utils Test - Next.js
      </h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* Server-Side Results */}
        <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#333', marginTop: 0, borderBottom: '2px solid #f0f0f0', paddingBottom: '10px' }}>
            Server-Side Results (SSR)
          </h2>
          
          <div style={{ marginBottom: '10px', padding: '8px', background: '#f8f9fa', borderRadius: '4px', borderLeft: '4px solid #28a745' }}>
            <strong>String Test:</strong> <code>{serverSideResults.stringTest}</code>
          </div>
          
          <div style={{ marginBottom: '10px', padding: '8px', background: '#f8f9fa', borderRadius: '4px', borderLeft: '4px solid #28a745' }}>
            <strong>Array Test:</strong> <code>{JSON.stringify(serverSideResults.arrayTest)}</code>
          </div>
          
          <div style={{ marginBottom: '10px', padding: '8px', background: '#f8f9fa', borderRadius: '4px', borderLeft: '4px solid #28a745' }}>
            <strong>Object Test:</strong> <code>{JSON.stringify(serverSideResults.objectTest)}</code>
          </div>
          
          <div style={{ marginBottom: '10px', padding: '8px', background: '#f8f9fa', borderRadius: '4px', borderLeft: '4px solid #28a745' }}>
            <strong>Math Test:</strong> <code>{serverSideResults.mathTest}</code>
          </div>
          
          <div style={{ marginBottom: '10px', padding: '8px', background: '#f8f9fa', borderRadius: '4px', borderLeft: '4px solid #28a745' }}>
            <strong>Validation Test:</strong> <code>{JSON.stringify(serverSideResults.validationTest)}</code>
          </div>
        </div>

        {/* Client-Side Results */}
        <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#333', marginTop: 0, borderBottom: '2px solid #f0f0f0', paddingBottom: '10px' }}>
            Client-Side Results (CSR)
          </h2>
          
          {clientSideResults ? (
            <>
              <div style={{ marginBottom: '10px', padding: '8px', background: '#f8f9fa', borderRadius: '4px', borderLeft: '4px solid #007bff' }}>
                <strong>String Test:</strong> <code>{clientSideResults.stringTest}</code>
              </div>
              
              <div style={{ marginBottom: '10px', padding: '8px', background: '#f8f9fa', borderRadius: '4px', borderLeft: '4px solid #007bff' }}>
                <strong>Array Test:</strong> <code>{JSON.stringify(clientSideResults.arrayTest)}</code>
              </div>
              
              <div style={{ marginBottom: '10px', padding: '8px', background: '#f8f9fa', borderRadius: '4px', borderLeft: '4px solid #007bff' }}>
                <strong>Object Test:</strong> <code>{JSON.stringify(clientSideResults.objectTest)}</code>
              </div>
              
              <div style={{ marginBottom: '10px', padding: '8px', background: '#f8f9fa', borderRadius: '4px', borderLeft: '4px solid #007bff' }}>
                <strong>Math Test:</strong> <code>{clientSideResults.mathTest}</code>
              </div>
            </>
          ) : (
            <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
              Loading client-side results...
            </div>
          )}
          
          <div style={{ marginBottom: '10px', padding: '8px', background: '#f8f9fa', borderRadius: '4px', borderLeft: '4px solid #007bff' }}>
            <strong>Debounce Count:</strong> <code>{debounceCount}</code>
            <p style={{ margin: '8px 0 0 0', fontSize: '0.9em', color: '#6c757d' }}>
              This increments every 100ms but debounce only executes after 1 second of no calls
            </p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '20px', background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#333', marginTop: 0, borderBottom: '2px solid #f0f0f0', paddingBottom: '10px' }}>
          Additional Function Tests
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px' }}>
          <div style={{ padding: '8px', background: '#f8f9fa', borderRadius: '4px', borderLeft: '4px solid #ffc107' }}>
            <strong>Kebab Case:</strong> <code>{kebabCase('Hello World Test')}</code>
          </div>
          
          <div style={{ padding: '8px', background: '#f8f9fa', borderRadius: '4px', borderLeft: '4px solid #ffc107' }}>
            <strong>Slugify:</strong> <code>{slugify('Hello World! This is a test.')}</code>
          </div>
          
          <div style={{ padding: '8px', background: '#f8f9fa', borderRadius: '4px', borderLeft: '4px solid #ffc107' }}>
            <strong>Truncate:</strong> <code>{truncate('This is a very long string that should be truncated', 20)}</code>
          </div>
          
          <div style={{ padding: '8px', background: '#f8f9fa', borderRadius: '4px', borderLeft: '4px solid #ffc107' }}>
            <strong>Round:</strong> <code>{roundToDecimal(3.14159, 2)}</code>
          </div>
          
          <div style={{ padding: '8px', background: '#f8f9fa', borderRadius: '4px', borderLeft: '4px solid #ffc107' }}>
            <strong>Clamp:</strong> <code>{clamp(150, 0, 100)}</code>
          </div>
          
          <div style={{ padding: '8px', background: '#f8f9fa', borderRadius: '4px', borderLeft: '4px solid #ffc107' }}>
            <strong>Flatten:</strong> <code>{JSON.stringify(flattenArray([1, [2, 3], [4, [5, 6]]]))}</code>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  // Server-side tests
  const testString = capitalize('server side test');
  const testArray = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
  const testObj = { server: true, nested: { value: 'test' } };
  const testClone = deepClone(testObj);
  const testNumber = formatNumberWithCommas(1234567);
  const testOrigins = generateAllowedOrigins(['https://example.com', 'https://test.com']);

  return {
    props: {
      serverSideResults: {
        stringTest: testString,
        arrayTest: testArray,
        objectTest: testClone,
        mathTest: testNumber,
        validationTest: testOrigins,
      },
    },
  };
}; 