import React, { useState } from 'react';

function Roadmap_form() {
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "http://school-management-2-5-main-cdrucp.laravel.cloud/api/roadmaps",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: formData.title,
            description: formData.description,
            steps: []
          }),
        }
      );

      console.log("Response status:", response.status);
      
      const data = await response.json();
      console.log("API response:", data);

      if (!response.ok) {
        throw new Error(data.message || `Failed with status: ${response.status}`);
      }

      setSubmitted(true);
      setFormData({ title: '', description: '' });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);

    } catch (error) {
      console.error("Error details:", error);
      setError(error.message);
      alert(`Error: ${error.message}\n\nPlease check:\n1. Internet connection\n2. Console for details (F12)`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ maxWidth: '700px', width: '100%' }}>
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: '#333' }}>
          Add New Phase
        </h2>

        {error && (
          <div style={{ padding: '12px', background: '#fee2e2', borderRadius: '8px', marginBottom: '16px', border: '1px solid #fecaca' }}>
            <p style={{ color: '#dc2626', fontSize: '14px' }}>
              Error: {error}
            </p>
          </div>
        )}

        {submitted ? (
          <div style={{ padding: '12px', background: '#d1fae5', borderRadius: '8px', textAlign: 'center' }}>
            <p style={{ color: '#059669', fontWeight: '500' }}>
              ✓ Phase added successfully!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '4px', color: '#333' }}>
                Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Example: Research & Discovery"
                required
                disabled={loading}
                style={{ 
                  width: '100%', 
                  padding: '8px 12px', 
                  border: '1px solid #ccc', 
                  borderRadius: '6px', 
                  fontSize: '14px',
                  opacity: loading ? 0.6 : 1
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '4px', color: '#333' }}>
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Enter detailed description..."
                rows={3}
                disabled={loading}
                style={{ 
                  width: '100%', 
                  padding: '8px 12px', 
                  border: '1px solid #ccc', 
                  borderRadius: '6px', 
                  fontSize: '14px', 
                  resize: 'vertical',
                  opacity: loading ? 0.6 : 1
                }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{ 
                padding: '10px 16px', 
                background: '#3b82f6', 
                color: '#fff', 
                border: 'none', 
                borderRadius: '6px', 
                fontSize: '14px', 
                fontWeight: '500', 
                cursor: loading ? 'not-allowed' : 'pointer', 
                marginTop: '4px', 
                opacity: loading ? 0.6 : 1
              }}
            >
              {loading ? " Submitting..." : " Add Phase"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Roadmap_form;