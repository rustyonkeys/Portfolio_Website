// import React from 'react';

// const PortfolioLanding = () => {
//   return (
//     <div 
//       className="min-h-screen relative overflow-hidden bg-black" 
      
//     >
//       {/* Matrix Grid Background */}
//       <div className="absolute inset-0">
//         {/* Vertical Grid Lines */}
//         <div className="absolute inset-0">
//           {Array.from({ length: 20 }).map((_, i) => (
//             <div
//               key={`v-${i}`}
//               className="absolute top-0 bottom-0 w-px"
//               style={{ 
//                 left: `${(i * 100) / 19}%`,
//                 backgroundColor: 'rgba(18, 113, 255, 0.15)'
//               }}
//             />
//           ))}
//         </div>
        
//         {/* Horizontal Grid Lines */}
//         <div className="absolute inset-0">
//           {Array.from({ length: 15 }).map((_, i) => (
//             <div
//               key={`h-${i}`}
//               className="absolute left-0 right-0 h-px"
//               style={{ 
//                 top: `${(i * 100) / 14}%`,
//                 backgroundColor: 'rgba(18, 113, 255, 0.15)'
//               }}
//             />
//           ))}
//         </div>
        
//         {/* Grid Intersection Dots */}
//         <div className="absolute inset-0">
//           {Array.from({ length: 20 }).map((_, i) =>
//             Array.from({ length: 15 }).map((_, j) => (
//               <div
//                 key={`dot-${i}-${j}`}
//                 className="absolute w-1 h-1 rounded-full"
//                 style={{ 
//                   left: `${(i * 100) / 19}%`, 
//                   top: `${(j * 100) / 14}%`,
//                   transform: 'translate(-50%, -50%)',
//                   backgroundColor: 'rgba(18, 113, 255, 0.3)'
//                 }}
//               />
//             ))
//           )}
//         </div>
//       </div>

//       {/* Animated Grid Highlights */}
//       <div className="absolute inset-0">
//         {Array.from({ length: 8 }).map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 rounded-full animate-pulse"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 4}s`,
//               animationDuration: `${3 + Math.random() * 2}s`,
//               backgroundColor: `rgba(${Math.random() > 0.5 ? '221, 74, 255' : '100, 220, 255'}, 0.6)`
//             }}
//           />
//         ))}
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
//         {/* Header Text */}
//         <div className="mb-8">
//           <p className="text-xs uppercase tracking-widest mb-4 font-medium"
//              style={{ color: 'rgba(100, 220, 255, 0.8)' }}>
//             DYNAMIC WEB MAGIC WITH NEXT.JS
//           </p>
          
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
//               style={{ color: 'hsl(0, 0%, 98%)' }}>
//             Transforming Concepts into Seamless
//           </h1>
          
//           <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
//               style={{ 
//                 background: 'linear-gradient(135deg, rgb(221, 74, 255) 0%, rgb(100, 220, 255) 100%)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 backgroundClip: 'text'
//               }}>
//             User Experiences
//           </h2>
          
//           <p className="text-lg mb-8 max-w-2xl mx-auto"
//              style={{ color: 'hsl(240, 5%, 64.9%)' }}>
//             Hi I, I'm Nivedh, A Software Engineer based in Glasgow.
//           </p>
          
//           <button 
//             className="group relative px-6 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm"
//             style={{ 
//               border: '1px solid hsl(240, 3.7%, 15.9%)',
//               backgroundColor: 'rgba(0, 0, 0, 0.2)',
//               color: 'hsl(0, 0%, 98%)'
//             }}
//           >
//             <span className="flex items-center gap-2">
//               Show my work
//               <svg 
//                 className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </span>
//           </button>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="absolute bottom-8 left-0 right-0 px-8">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Left Card */}
//           <div 
//             className="backdrop-blur-sm rounded-xl p-6 transition-all duration-300"
//             style={{ 
//               backgroundColor: 'rgba(0, 0, 0, 0.2)',
//               border: '1px solid hsl(240, 3.7%, 15.9%)'
//             }}
//           >
//             <div 
//               className="aspect-video rounded-lg mb-4 overflow-hidden"
//               style={{ 
//                 background: 'linear-gradient(135deg, rgba(108, 0, 162, 0.3) 0%, rgba(18, 113, 255, 0.3) 100%)'
//               }}
//             >
//               <img 
//                 src="/api/placeholder/400/225" 
//                 alt="Project preview" 
//                 className="w-full h-full object-cover opacity-80"
//               />
//             </div>
//           </div>

//           {/* Right Card */}
//           <div 
//             className="backdrop-blur-sm rounded-xl p-6 transition-all duration-300"
//             style={{ 
//               backgroundColor: 'rgba(0, 0, 0, 0.2)',
//               border: '1px solid hsl(240, 3.7%, 15.9%)'
//             }}
//           >
//             <h3 className="text-xl font-semibold mb-2"
//                 style={{ color: 'hsl(0, 0%, 98%)' }}>
//               I'm very flexible with time zone communications
//             </h3>
//             <p className="text-sm"
//                style={{ color: 'hsl(240, 5%, 64.9%)' }}>
//               Available for projects and collaborations across different time zones
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Floating Elements */}
//       <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/40 rounded-full animate-bounce"></div>
//       <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400/40 rounded-full animate-ping"></div>
//       <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-indigo-400/40 rounded-full animate-pulse"></div>
//     </div>
//   );
// };

// export default PortfolioLanding;