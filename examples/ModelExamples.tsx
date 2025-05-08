import React, { useState, useRef } from 'react';
import { 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter 
} from '../components/ui/Modal';
import { ThemeProvider } from '../providers/ThemeProvider';
import { Button } from '../components/ui/Button';

/**
 * Product type for demonstration
 */
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

/**
 * Example component that demonstrates different ways to use the Modal component
 */
const ModalExample: React.FC = () => {
  // State for different modal types
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState<boolean>(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState<boolean>(false);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState<boolean>(false);
  
  // Ref for initial focus
  const emailInputRef = useRef<HTMLInputElement>(null);
  
  // Sample form state
  const [formData, setFormData] = useState<{
    email: string;
    subscribe: boolean;
  }>({
    email: '',
    subscribe: false,
  });
  
  // Sample product data
  const sampleProduct: Product = {
    id: 1,
    name: 'Premium Widget',
    description: 'A high-quality widget with advanced features and premium materials.',
    price: 49.99,
    image: 'https://via.placeholder.com/300',
  };
  
  // Form handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  
  const handleFormSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    // In a real app, you would submit the form data here
    console.log('Form submitted:', formData);
    setIsFormModalOpen(false);
    // Reset form
    setFormData({ email: '', subscribe: false });
  };
  
  return (
    <ThemeProvider theme="enterprise">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Modal Component Examples</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Confirmation Modal Example */}
          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-3">Confirmation Modal</h2>
            <p className="text-gray-600 mb-4">
              A simple confirmation dialog with confirm/cancel actions.
            </p>
            <Button 
              variant="primary" 
              onClick={() => setIsConfirmModalOpen(true)}
            >
              Open Confirmation Modal
            </Button>
            
            <Modal
              isOpen={isConfirmModalOpen}
              onClose={() => setIsConfirmModalOpen(false)}
              size="sm"
              animation="zoom"
              ariaLabelledby="confirm-title"
            >
              <ModalHeader id="confirm-title">
                Confirm Action
              </ModalHeader>
              <ModalBody>
                Are you sure you want to proceed with this action? This cannot be undone.
              </ModalBody>
              <ModalFooter>
                <Button 
                  variant="secondary" 
                  onClick={() => setIsConfirmModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button 
                  variant="primary"
                  onClick={() => {
                    // Perform action here
                    console.log('Action confirmed');
                    setIsConfirmModalOpen(false);
                  }}
                >
                  Confirm
                </Button>
              </ModalFooter>
            </Modal>
          </div>
          
          {/* Form Modal Example */}
          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-3">Form Modal</h2>
            <p className="text-gray-600 mb-4">
              A modal containing a form with validation and submission.
            </p>
            <Button 
              variant="primary" 
              onClick={() => setIsFormModalOpen(true)}
            >
              Open Form Modal
            </Button>
            
            <Modal
              isOpen={isFormModalOpen}
              onClose={() => setIsFormModalOpen(false)}
              size="md"
              animation="fade"
              initialFocus={emailInputRef}
              ariaLabelledby="form-title"
            >
              <ModalHeader id="form-title">
                Newsletter Signup
              </ModalHeader>
              <ModalBody>
                <form id="newsletter-form" onSubmit={handleFormSubmit}>
                  <div className="mb-4">
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      ref={emailInputRef}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="subscribe"
                      name="subscribe"
                      checked={formData.subscribe}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 rounded"
                    />
                    <label 
                      htmlFor="subscribe" 
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Receive updates and promotions
                    </label>
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button 
                  variant="secondary" 
                  onClick={() => setIsFormModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button 
                  variant="primary" 
                  type="submit"
                  form="newsletter-form"
                >
                  Subscribe
                </Button>
              </ModalFooter>
            </Modal>
          </div>
          
          {/* Information Modal Example */}
          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-3">Information Modal</h2>
            <p className="text-gray-600 mb-4">
              A modal for displaying detailed information about a product.
            </p>
            <Button 
              variant="primary" 
              onClick={() => setIsInfoModalOpen(true)}
            >
              View Product Details
            </Button>
            
            <Modal
              isOpen={isInfoModalOpen}
              onClose={() => setIsInfoModalOpen(false)}
              size="lg"
              animation="slide"
              ariaLabelledby="product-title"
              theme="techDark"
            >
              <ModalHeader id="product-title" theme="techDark">
                {sampleProduct.name}
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img 
                      src={sampleProduct.image} 
                      alt={sampleProduct.name}
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <div className="text-2xl font-bold text-blue-500 mb-2">
                      ${sampleProduct.price.toFixed(2)}
                    </div>
                    <p className="text-gray-300 mb-4">
                      {sampleProduct.description}
                    </p>
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Product Features
                      </h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>High-quality materials</li>
                        <li>Advanced functionality</li>
                        <li>Sleek modern design</li>
                        <li>Durable construction</li>
                        <li>1-year warranty</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter theme="techDark">
                <Button 
                  variant="secondary"
                  onClick={() => setIsInfoModalOpen(false)}
                >
                  Close
                </Button>
                <Button 
                  variant="primary"
                  onClick={() => {
                    console.log('Add to cart:', sampleProduct);
                    setIsInfoModalOpen(false);
                  }}
                >
                  Add to Cart
                </Button>
              </ModalFooter>
            </Modal>
          </div>
          
          {/* Custom Styled Modal Example */}
          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-3">Custom Styled Modal</h2>
            <p className="text-gray-600 mb-4">
              A modal with custom styling and interactive effects.
            </p>
            <Button 
              variant="primary" 
              onClick={() => setIsCustomModalOpen(true)}
            >
              Open Custom Modal
            </Button>
            
            <Modal
              isOpen={isCustomModalOpen}
              onClose={() => setIsCustomModalOpen(false)}
              size="md"
              animation="elastic"
              theme="glass"
              show3DEffect={true}
              showGlareEffect={true}
              effectIntensity="medium"
              ariaLabelledby="custom-title"
            >
              <ModalHeader id="custom-title" theme="glass">
                Interactive Modal
              </ModalHeader>
              <ModalBody>
                <div className="text-center">
                  <div className="mb-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <p className="text-white">
                      Move your mouse over this modal to see the 3D and glare effects in action!
                    </p>
                  </div>
                  <div className="h-40 flex items-center justify-center text-3xl">
                    ✨ Interactive Experience ✨
                  </div>
                  <p className="text-white/80 text-sm mt-4">
                    This modal uses the glass theme with 3D and glare effects for an immersive user experience.
                  </p>
                </div>
              </ModalBody>
              <ModalFooter theme="glass">
                <Button 
                  className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
                  onClick={() => setIsCustomModalOpen(false)}
                >
                  Close
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
        
        {/* Additional information */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-800">
          <h2 className="text-lg font-semibold mb-2">Implementation Notes</h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Modals automatically handle focus management for accessibility</li>
            <li>ESC key and clicking outside will close the modal by default</li>
            <li>Body scroll is locked when a modal is open</li>
            <li>Animations are customizable with various presets</li>
            <li>Themes can be set directly or inherited from ThemeProvider</li>
            <li>Interactive effects (3D/glare) work best with glass or glow themes</li>
          </ul>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ModalExample;