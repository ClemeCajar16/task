function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold text-white">Tasks Manager</h1>
      </header>

      <main className="text-center max-w-3xl mb-16">
        <h2 className="text-4xl font-bold mb-4">Organiza tus tareas de manera inteligente</h2>
        <p className="text-gray-300 mb-6">
          Administra tus pendientes, mantente enfocado y aumenta tu productividad con nuestro gestor de tareas.
        </p>
        <a
          href="/register"
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl text-white text-lg font-semibold transition"
        >
          Empieza ahora
        </a>
      </main>

      {/* Sección de características */}
      <section className="grid md:grid-cols-3 gap-6 max-w-6xl w-full px-4 mb-16">
        <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-2 text-purple-400">✅ Crea Tareas</h3>
          <p className="text-gray-300">Agrega tareas fácilmente con detalles, prioridades y fechas límite.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-2 text-purple-400">📝 Edita y organiza</h3>
          <p className="text-gray-300">Edita, reordena y categoriza tus tareas por estado o etiquetas.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-2 text-purple-400">📊 Visualiza tu progreso</h3>
          <p className="text-gray-300">Visualiza el avance diario o semanal con gráficas y métricas.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Tasks Manager. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default HomePage;
