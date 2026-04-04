import React, { useState } from 'react';

function Roadmap_form() {
  const AddPhaseForm = () => {
    const [formData, setFormData] = useState({
      title: '',
      description: ''
    });

    const [submitted, setSubmitted] = useState(false);

    //  បន្ថែម loading state
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();

      // start loading
      setLoading(true);

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

        // check response
        if (!response.ok) {
          throw new Error("Failed to submit data");
        }

        const data = await response.json();
        console.log("API response:", data);

        setSubmitted(true);

        setTimeout(() => {
          setFormData({ title: '', description: '' });
          setSubmitted(false);
        }, 2000);

      } catch (error) {
        console.error("Error:", error);

        // show error to user
        alert("Something went wrong!");
      } finally {
        // stop loading
        setLoading(false);
      }
    };

    return (
      <div style={{ padding: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <div style={{ maxWidth: '700px', width: '100%' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: '#333' }}>
            Add New Phase
          </h2>

          {submitted ? (
            <div style={{ padding: '12px', background: '#d1fae5', borderRadius: '8px', textAlign: 'center' }}>
              <p style={{ color: '#059669', fontWeight: '500' }}>
                Phase added successfully!
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
                  placeholder="Research & Discovery"
                  required
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '4px', color: '#333' }}>
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Enter description..."
                  rows={2}
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '14px', resize: 'none' }}
                />
              </div>

              <button
                type="submit"
                disabled={loading} // disable button when loading
                style={{ padding: '10px 16px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '14px', fontWeight: '500', cursor: 'pointer', marginTop: '4px', 
                  opacity: loading ? 0.6 : 1
                }}
              >
                {loading ? "Loading..." : "Add Phase"} {/* show loading text */}
              </button>

            </form>
          )}
        </div>
      </div>
    );
  };

  return <AddPhaseForm />;
}

export default Roadmap_form;