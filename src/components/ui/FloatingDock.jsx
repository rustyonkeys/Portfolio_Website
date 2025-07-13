export default function FloatingDock({ items }) {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center space-x-4 px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-full shadow-lg backdrop-blur-md">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex flex-col items-center justify-center w-10 h-10 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-transform transform hover:scale-110"
            title={item.title}
          >
            <div className="w-5 h-5">{item.icon}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
