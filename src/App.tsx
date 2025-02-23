import React from 'react';
import { Header } from './components/Header';
import { ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 pr-0 md:pr-8">
            <p className="text-sm font-medium text-gray-600 mb-4">project#name</p>
            <h1 className="text-6xl font-bold tracking-tight text-gray-900 mb-2">
              Heading
            </h1>
            <h2 className="text-5xl font-bold tracking-tight text-gray-900 mb-8">
              heading!
            </h2>
            
            <h3 className="text-2xl font-semibold mb-4">Heading</h3>
            
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed tincidunt nibh nec{' '}
              <span className="text-blue-600">aliquet volutpat</span>.
            </p>
            
            <p className="text-gray-600 mb-8">
              Etiam ac sapien id metus volutpat consectetur. Curabitur tristique purus id risus luctus aliquet. 
              Nunc convallis mi sed augue commodo luctus.
            </p>

            <button className="inline-flex items-center px-6 py-3 border-2 border-black text-base font-medium text-black hover:bg-black hover:text-white transition-colors duration-200">
              CTA button
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e?w=800&q=80"
              alt="Hand reaching out"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;