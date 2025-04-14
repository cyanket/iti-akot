import { useState, useEffect } from 'react';
import { ChevronRight, Phone, Mail, MapPin, Calendar, BookOpen, User, Clock, Award } from 'lucide-react';

export default function ITILandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'courses', 'admission', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const oneYearCourses = [
    { name: "Welder", duration: "1 Year" },
    { name: "Wood Work Technician", duration: "1 Year" },
    { name: "Plumber", duration: "1 Year" },
    { name: "Tractor Mechanic", duration: "1 Year" },
    { name: "Sheet Metal Work", duration: "1 Year" },
    { name: "Fashion Design", duration: "1 Year" }
  ];
  
  const twoYearCourses = [
    { name: "Electrician", duration: "2 Years" },
    { name: "Wireman", duration: "2 Years" },
    { name: "Motor Mechanic Vehicle", duration: "2 Years" },
    { name: "Machinist", duration: "2 Years" },
    { name: "Fitter", duration: "2 Years" },
    { name: "Architecture Draftsman", duration: "2 Years" },
    { name: "Surveyor", duration: "2 Years" },
    { name: "Draftsman Civil", duration: "2 Years" },
    { name: "Computer Operator & Programming Assistant", duration: "2 Years" }
  ];

  const renderCourses = (courses) => {
    return (
      <ul className="space-y-4 divide-y divide-gray-200">
        {courses.map((course, index) => (
          <li key={index} className="py-4">
            <h3 className="text-xl font-bold text-gray-800">{course.name}</h3>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="font-sans min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-blue-700 text-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src="/iti-logo.png" alt="ITI Logo" className="h-12 w-12 mr-3 rounded" />
              <div>
                <h1 className="text-xl font-bold">Govt. ITI Akot</h1>
                <p className="text-xs text-blue-200">Dist. Akola, Maharashtra</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {['home', 'about', 'courses', 'admission', 'contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors hover:text-blue-200 ${
                    activeSection === item ? 'font-bold border-b-2 border-white' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 flex flex-col space-y-1">
                <span className={`block h-0.5 w-full bg-white transition-transform ${isMobileMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-white transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-white transition-transform ${isMobileMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-blue-600">
              <ul className="flex flex-col space-y-3">
                {['home', 'about', 'courses', 'admission', 'contact'].map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => scrollToSection(item)}
                      className={`capitalize w-full text-left py-2 px-1 ${
                        activeSection === item ? 'font-bold bg-blue-800 rounded px-2' : ''
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Government Industrial Training Institute</h1>
                <h2 className="text-2xl md:text-3xl mb-6">Akot, Dist. Akola</h2>
                <p className="text-lg mb-8">Shaping futures with quality technical education and skill development.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => scrollToSection('admission')}
                    className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    Apply Now <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => scrollToSection('courses')}
                    className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    Explore Courses
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <img src="/iti1.jpg" alt="ITI Akot Institute" className="rounded-lg shadow-xl w-full max-w-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Announcement Bar */}
        <div className="bg-yellow-500 text-blue-900 py-3">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-2 md:mb-0">
                <Calendar className="h-5 w-5 mr-2" />
                <p className="font-semibold">Admissions Open for 2025-26 Batch</p>
              </div>
              <button 
                onClick={() => scrollToSection('admission')}
                className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-semibold transition-colors flex items-center"
              >
                Apply Now <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-800 mb-2">About Our Institute</h2>
              <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <img src="/iti2.jpg" alt="ITI Workshop" className="rounded-lg shadow-lg w-full" />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Excellence in Technical Training</h3>
                <p className="text-gray-700 mb-4">
                  Government ITI Akot was established to provide quality technical education and vocational training to students. Our institute is well-equipped with modern laboratories, workshops, and classrooms to ensure practical skill development.
                </p>
                <p className="text-gray-700 mb-6">
                  With experienced faculty members and strong industry connections, we prepare our students for successful careers in various technical fields. Our focus is on hands-on training and practical knowledge that meets industry requirements.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="flex items-center mb-2">
                      <Award className="h-6 w-6 text-yellow-500 mr-2" />
                      <h4 className="font-bold text-blue-800">Quality Training</h4>
                    </div>
                    <p className="text-sm text-gray-600">Industry-recognized certification and practical skills</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="flex items-center mb-2">
                      <BookOpen className="h-6 w-6 text-yellow-500 mr-2" />
                      <h4 className="font-bold text-blue-800">Modern Facilities</h4>
                    </div>
                    <p className="text-sm text-gray-600">Well-equipped workshops and laboratories</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="flex items-center mb-2">
                      <User className="h-6 w-6 text-yellow-500 mr-2" />
                      <h4 className="font-bold text-blue-800">Expert Faculty</h4>
                    </div>
                    <p className="text-sm text-gray-600">Experienced instructors with industry expertise</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="flex items-center mb-2">
                      <Clock className="h-6 w-6 text-yellow-500 mr-2" />
                      <h4 className="font-bold text-blue-800">Placement Support</h4>
                    </div>
                    <p className="text-sm text-gray-600">Strong industry connections for job opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-800 mb-2">Our Courses</h2>
              <div className="w-20 h-1 bg-yellow-500 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer a variety of technical courses approved by NCVT (National Council for Vocational Training) to prepare students for successful careers in various industries.
              </p>
            </div>
            
            {/* 1-Year Courses */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 border-b-2 border-blue-200 pb-2">1-Year Courses</h3>
              {renderCourses(oneYearCourses)}
            </div>
            
            {/* 2-Year Courses */}
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6 border-b-2 border-blue-200 pb-2">2-Year Courses</h3>
              {renderCourses(twoYearCourses)}
            </div>
          </div>
        </section>

        {/* Admission Section */}
        <section id="admission" className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Admission Process</h2>
              <div className="w-20 h-1 bg-yellow-500 mx-auto mb-4"></div>
              <p className="max-w-2xl mx-auto">
                Join our institute and start your journey towards becoming a skilled professional. The admission process is simple and straightforward.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-blue-700">
                <div className="bg-yellow-500 text-blue-900 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Apply Online/Offline</h3>
                <p className="text-blue-100">
                  Fill out the application form available online or visit our institute to collect the form.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-blue-700">
                <div className="bg-yellow-500 text-blue-900 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2">Submit Documents</h3>
                <p className="text-blue-100">
                  Submit required documents including educational certificates, ID proof, and photographs.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-blue-700">
                <div className="bg-yellow-500 text-blue-900 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2">Entrance Test/Interview</h3>
                <p className="text-blue-100">
                  Attend the entrance test or interview as per the schedule provided by the institute.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-blue-700">
                <div className="bg-yellow-500 text-blue-900 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">4</div>
                <h3 className="text-xl font-semibold mb-2">Confirm Admission</h3>
                <p className="text-blue-100">
                  Complete fee payment and formalities to confirm your admission at the institute.
                </p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">Required Documents</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p>10th/12th Certificate & Marksheet</p>
                </div>
                <div className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p>Valid ID Proof (Aadhar Card)</p>
                </div>
                <div className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p>Recent Passport-size Photographs</p>
                </div>
                <div className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p>Domicile/Residence Certificate</p>
                </div>
                <div className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p>Caste Certificate (if applicable)</p>
                </div>
                <div className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p>Income Certificate (if applicable)</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <a href="#contact" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center">
                  Contact For Admission <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-800 mb-2">Student Success Stories</h2>
              <div className="w-20 h-1 bg-yellow-500 mx-auto mb-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <img src="/api/placeholder/60/60" alt="Student" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold text-blue-800">Rajesh Sharma</h4>
                    <p className="text-sm text-gray-600">Electrician, 2023 Batch</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "The practical training at ITI Akot helped me secure a job at a major manufacturing company. The skills I learned are directly applicable to my work."
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <img src="/api/placeholder/60/60" alt="Student" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold text-blue-800">Priya Patil</h4>
                    <p className="text-sm text-gray-600">COPA, 2023 Batch</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "The computer programming course at ITI Akot gave me the foundation I needed. Now I work as a junior developer at an IT firm in Akola."
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <img src="/api/placeholder/60/60" alt="Student" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold text-blue-800">Avinash Deshmukh</h4>
                    <p className="text-sm text-gray-600">Fitter, 2022 Batch</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "The guidance from faculty and the hands-on workshop experience prepared me well for industry demands. I'm now working in a leading automobile company."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-800 mb-2">Contact Us</h2>
              <div className="w-20 h-1 bg-yellow-500 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have questions about admissions or courses? Feel free to reach out to us through any of the following channels.
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-1/2">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-blue-800 mb-6">Get in Touch</h3>
                  
                  <div className="flex items-start mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <MapPin className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <p className="text-gray-600">Government Industrial Training Institute, Akot, District Akola, Maharashtra - 444101</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Phone className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <p className="text-gray-600">+91 9405517250 (S.T. Bhavani Group Instructor)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <p className="text-gray-600">principal.itiakot@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-semibold text-gray-800 mb-4">Office Hours</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="bg-gray-50 p-3 rounded">
                        <p className="font-medium text-blue-800">Monday - Friday</p>
                        <p className="text-gray-600">10:00 AM - 5:00 PM</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <p className="font-medium text-blue-800">Saturday</p>
                        <p className="text-gray-600">10:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-blue-800 mb-6">Send Us a Message</h3>
                  
                  <form>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Full Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500" 
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500" 
                          placeholder="Your phone"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500" 
                        placeholder="Your email"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500" 
                        placeholder="Subject"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
                      <textarea 
                        id="message" 
                        rows="5" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500" 
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/iti-logo.png" alt="ITI Logo" className="h-10 w-10 mr-3 rounded" />
                <h3 className="text-xl font-bold">Govt. ITI Akot</h3>
              </div>
              <p className="text-blue-200 mb-4">
                Empowering youth through quality technical education and vocational training for a skilled workforce.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}