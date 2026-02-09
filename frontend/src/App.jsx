export default function App() {
  return (
    <div className="h-screen w-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="w-1/4 bg-white border-r">
        <div className="p-4 font-bold text-lg border-b">
          Chats
        </div>

        <div className="p-4 hover:bg-gray-100 cursor-pointer">
          <p className="font-medium">Alice</p>
          <span className="text-sm text-gray-500">Hey 👋</span>
        </div>

        <div className="p-4 hover:bg-gray-100 cursor-pointer">
          <p className="font-medium">Bob</p>
          <span className="text-sm text-gray-500">What’s up?</span>
        </div>
      </aside>

      {/* Chat Area */}
      <main className="flex-1 flex flex-col">

        {/* Header */}
        <header className="h-16 bg-white border-b flex items-center px-6 font-semibold">
          Alice
        </header>

        {/* Messages */}
        <div className="flex-1 p-6 space-y-4 overflow-y-auto">

          {/* Incoming */}
          <div className="flex">
            <div className="bg-white p-3 rounded-lg shadow max-w-xs">
              Hey! How’s the chat app going?
            </div>
          </div>

          {/* Outgoing */}
          <div className="flex justify-end">
            <div className="bg-blue-500 text-white p-3 rounded-lg shadow max-w-xs">
              Pretty good 😄 Building the frontend now.
            </div>
          </div>

          <div className="flex">
            <div className="bg-white p-3 rounded-lg shadow max-w-xs">
              Nice! MERN stack?
            </div>
          </div>

        </div>

        {/* Input */}
        <footer className="h-16 bg-white border-t flex items-center px-4 gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
            Send
          </button>
        </footer>

      </main>
    </div>
  );
}
