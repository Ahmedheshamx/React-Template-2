import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
   
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
  
      const res = await axios.post(
        "https://backend.sheede.sa/api/contact",
        formData
      );
      setResponse({ type: "success", msg: "تم الإرسال بنجاح!" });
      console.log(res.data);

       setFormData({ ...formData, name: "", email: "", phone: "", message: "" });
     setTimeout(() => {
      setResponse(null);
    }, 3000);
    
    
  };

  return (
    <div className="container py-4" dir="rtl">
      <h2 className=" my-5 mx-1">تواصل معنا</h2>

      {response && (
        <div className={`alert alert-${response.type} text-end`}>
          {response.msg}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label d-block text-end">الاسم</label>
          <input
            type="text"
            name="name"
            className="form-control text-end"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label d-block text-end">البريد الإلكتروني</label>
          <input
            type="email"
            name="email"
            className="form-control text-end"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label d-block text-end">رقم الهاتف</label>
          <input
            type="tel"
            name="phone"
            className="form-control text-end"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label d-block text-end">الرسالة</label>
          <textarea
            name="message"
            className="form-control text-end"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <div className="text-end">
          <button type="submit" className="btn btn-primary" >
            ارسال
          </button>
        </div>
      </form>
    </div>
  );
}