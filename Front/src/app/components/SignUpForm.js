"use client";
import { useState } from "react";

export default function SignupForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });
    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setMessage("✅ Account created successfully!");
      e.target.reset(); // clear form
    } else {
      setMessage("❌ Error: " + data.error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-[#415E72]">
        Create an Account for MediConnect
      </h2>

      <label htmlFor="name" className="font-bold text-gray-800">
        Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Full Name"
        className="w-full p-3 mb-3 border rounded-lg"
        required
      />

      <label htmlFor="email" className="font-bold text-gray-800">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        className="w-full p-3 mb-3 border rounded-lg"
        required
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
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-[#3B38A0] text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
      >
        {loading ? "Creating Account..." : "Sign Up"}
      </button>

      {message && <p className="mt-4 text-center text-sm">{message}</p>}
    </form>
  );
}
