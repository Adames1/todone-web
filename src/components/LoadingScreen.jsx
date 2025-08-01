function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-700">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-indigo-500 rounded-full animate-spin mb-4"></div>
      <p className="text-lg font-medium">Cargando...</p>
    </div>
  );
}

export default LoadingScreen;
