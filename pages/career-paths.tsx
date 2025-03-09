 
import React from 'react';
import Head from 'next/head';
import ReactFlow, { Background, Controls, Node, Edge } from 'reactflow';
import 'reactflow/dist/style.css';

interface CareerNodeData {
  label: string;
  salary: string;
  skills: string[];
  certifications: string[];
  timeline: string;
}

const initialNodes: Node<CareerNodeData>[] = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { 
      label: 'Junior Developer',
      salary: '$50,000 - $75,000',
      skills: ['JavaScript', 'HTML', 'CSS'],
      certifications: ['None required'],
      timeline: '0-2 years'
    },
    type: 'careerNode',
  },
  {
    id: '2',
    position: { x: 300, y: 100 },
    data: { 
      label: 'Mid-Level Developer',
      salary: '$75,000 - $110,000',
      skills: ['React', 'Node.js', 'SQL'],
      certifications: ['AWS Developer'],
      timeline: '2-4 years'
    },
    type: 'careerNode',
  },
  {
    id: '3',
    position: { x: 600, y: 200 },
    data: { 
      label: 'Senior Developer',
      salary: '$110,000 - $150,000',
      skills: ['System Design', 'Team Leadership', 'Architecture'],
      certifications: ['AWS Solutions Architect'],
      timeline: '4-7 years'
    },
    type: 'careerNode',
  },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
];

const CareerNode = ({ data }: { data: CareerNodeData }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200 min-w-[250px]">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{data.label}</h3>
      <div className="text-green-600 font-medium mb-2">{data.salary}</div>
      <div className="space-y-2">
        <div>
          <div className="text-sm font-medium text-gray-700">Skills:</div>
          <div className="flex flex-wrap gap-1 mt-1">
            {data.skills.map((skill) => (
              <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm font-medium text-gray-700">Certifications:</div>
          <div className="mt-1 text-sm text-gray-600">{data.certifications.join(', ')}</div>
        </div>
        <div>
          <div className="text-sm font-medium text-gray-700">Timeline:</div>
          <div className="text-sm text-gray-600">{data.timeline}</div>
        </div>
      </div>
    </div>
  );
};

const CareerPathsPage = () => {
  const nodeTypes = {
    careerNode: CareerNode,
  };

  return (
    <>
      <Head>
        <title>Career Path Visualization - Career Cruise Control</title>
        <meta name="description" content="Explore potential career paths, salary ranges, required skills, and estimated timelines for career progression." />
      </Head>

      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Career Path Visualization
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore potential career paths, salary ranges, required skills, and estimated timelines for career progression.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div style={{ height: '600px' }}>
              <ReactFlow 
                nodes={initialNodes}
                edges={initialEdges}
                nodeTypes={nodeTypes}
                fitView
              >
                <Background />
                <Controls />
              </ReactFlow>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">How to Use This Tool</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Click and drag to pan around the visualization</li>
              <li>• Use the mouse wheel to zoom in/out</li>
              <li>• Click on any position to see detailed information</li>
              <li>• Follow the arrows to see possible career progressions</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default CareerPathsPage;