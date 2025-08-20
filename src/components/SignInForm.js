export default function SigninForm() {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Sign in to MediConnect</h2>

      <label htmlFor="email" className="font-bold text-gray-800">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        className="w-full p-3 mb-3 border rounded-lg"

      />

      <label htmlFor="password" className="font-bold text-gray-800">
        Password:
      </label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        className="w-full p-3 mb-3 border rounded-lg"
      />
        <button className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
          Sign In
        </button>
      </div>
    );
  }
  