
    if (window.tailwind) {
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            bg: '#F9FAFB',
                            surface: '#FFFFFF',
                            title: '#111827',
                            text: '#6B7280',
                            primary: '#4F46E5',
                            accent: '#25D366'
                        }
                    },
                    borderRadius: {
                        'input-btn': '8px',
                        'card': '16px',
                    },
                    boxShadow: {
                        'card-subtle': '0 4px 12px rgba(0, 0, 0, 0.05)',
                    }
                }
            }
        }
    }