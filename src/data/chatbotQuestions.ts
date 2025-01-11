// Store all predefined Q&A pairs
export interface QAPair {
  id: string;
  question: string;
  answer: string;
  category: 'basics' | 'components' | 'performance' | 'support';
}

export const defaultQuestions: QAPair[] = [
  // Basics
  {
    id: 'components-needed',
    question: 'What components do I need to build a PC?',
    answer: `To build a PC, you need the following components:

• CPU (Processor)
• GPU (Graphics Card)
• Motherboard
• RAM (Memory)
• Storage (SSD or HDD)
• Power Supply Unit (PSU)
• Case (Chassis)
• Cooling (Fans, Liquid Cooling, etc.)
• Operating System (Windows, Linux, etc.)`,
    category: 'basics'
  },
  {
    id: 'budget-components',
    question: 'How do I choose the right components for my budget?',
    answer: 'You can enter your desired budget into our system, and we will suggest the best components that fit within your range. Alternatively, you can manually choose components, and our chatbot will provide recommendations based on compatibility and performance.',
    category: 'basics'
  },
  {
    id: 'storage-difference',
    question: 'What is the difference between SSD and HDD?',
    answer: 'SSD (Solid-State Drive) is faster and more reliable than HDD (Hard Disk Drive), as SSDs have no moving parts. SSDs are ideal for faster boot times and quicker access to files, while HDDs are generally larger in capacity and more affordable.',
    category: 'components'
  },
  {
    id: 'motherboard-compatibility',
    question: 'Can I use any motherboard with any CPU?',
    answer: 'No, motherboards and CPUs must be compatible. The motherboard\'s socket type must match the CPU\'s socket type. You should also check chipset compatibility for additional features like overclocking and connectivity.',
    category: 'components'
  },
  {
    id: 'gaming-cpu',
    question: 'What is the best CPU for gaming?',
    answer: 'Popular gaming CPUs include AMD Ryzen 5/7 and Intel Core i5/i7 series. The choice depends on your budget and specific performance needs. Ryzen CPUs are known for their multi-core performance, while Intel CPUs excel in single-core tasks.',
    category: 'components'
  },
  {
    id: 'ram-gaming',
    question: 'How much RAM do I need for gaming?',
    answer: 'For gaming, 16GB of RAM is generally recommended. However, 8GB is sufficient for most games. If you plan to do video editing or multitasking, 32GB or more might be beneficial.',
    category: 'components'
  },
  {
    id: 'gpu-necessity',
    question: 'Do I need a separate graphics card?',
    answer: 'If you\'re gaming, doing 3D rendering, or video editing, a dedicated graphics card (GPU) is recommended. If you\'re doing light tasks like web browsing or word processing, integrated graphics might suffice.',
    category: 'components'
  },
  {
    id: 'overclocking',
    question: 'What is overclocking and should I do it?',
    answer: 'Overclocking is the practice of running a CPU or GPU at a higher speed than its rated specification. It can improve performance, but it can also generate more heat and potentially shorten the lifespan of the component. It\'s ideal for enthusiasts but requires proper cooling.',
    category: 'performance'
  },
  {
    id: 'upgrade-possibility',
    question: 'Can I upgrade my PC later?',
    answer: 'Yes, most PCs can be upgraded, especially if you choose compatible parts. You can upgrade the CPU, RAM, storage, or GPU, but make sure your motherboard and PSU can handle the new components.',
    category: 'basics'
  },
  {
    id: 'power-requirements',
    question: 'How much power do I need for my PC?',
    answer: 'A typical gaming PC might need a power supply (PSU) between 500W and 750W. For higher-end systems with multiple GPUs, 1000W or more might be necessary. Use our PSU calculator for an estimate based on your build.',
    category: 'components'
  },
  {
    id: 'case-selection',
    question: 'How do I choose the right case for my build?',
    answer: 'The case should be compatible with your motherboard\'s size (ATX, Micro ATX, Mini ITX). Ensure there\'s enough space for your GPU, cooling solution, and airflow. Choose a case that supports good cable management and has adequate cooling options.',
    category: 'components'
  },
  {
    id: 'cooling-system',
    question: 'What cooling system should I use?',
    answer: 'For cooling, you can choose between air cooling (fans) or liquid cooling (AIO or custom loops). Air cooling is generally cheaper and simpler, while liquid cooling offers better cooling for high-performance builds but is more complex and expensive.',
    category: 'components'
  },
  {
    id: '4k-gaming-gpu',
    question: 'What is the best GPU for 4K gaming?',
    answer: 'For 4K gaming, top-tier GPUs like the Nvidia RTX 3080, RTX 3090, or AMD Radeon RX 6900 XT are recommended. These GPUs provide excellent performance for demanding games at 4K resolution.',
    category: 'performance'
  },
  {
    id: 'budget-gaming',
    question: 'What is a good budget build for gaming?',
    answer: 'A good budget build for gaming typically includes an AMD Ryzen 5 or Intel Core i5 CPU, 16GB of RAM, a mid-range GPU like the Nvidia GTX 1660 Super or AMD Radeon RX 5700, and a 500GB SSD for faster loading times.',
    category: 'basics'
  },
  {
    id: 'laptop-cpu-desktop',
    question: 'Can I use a laptop CPU in a desktop build?',
    answer: 'No, laptop CPUs are designed for different socket types and power requirements, so they are not compatible with desktop motherboards.',
    category: 'components'
  },
  {
    id: 'optical-drive',
    question: 'Do I need an optical drive for my PC?',
    answer: 'Optical drives (DVD/Blu-ray drives) are no longer necessary for most builds, as digital downloads and streaming have become the norm. You can skip it unless you need it for specific media usage.',
    category: 'components'
  },
  {
    id: 'amd-intel',
    question: 'What is the difference between AMD and Intel CPUs?',
    answer: 'AMD CPUs are known for offering better value and multi-core performance, making them great for multitasking and productivity. Intel CPUs excel in single-core performance, which benefits gaming and tasks that require fast, single-threaded operations.',
    category: 'components'
  },
  {
    id: 'pcie-explanation',
    question: 'What is PCIe?',
    answer: 'PCIe (Peripheral Component Interconnect Express) is a high-speed interface standard for connecting components like GPUs, sound cards, and storage drives to your motherboard. PCIe Gen 4 and Gen 5 offer faster data transfer rates than Gen 3.',
    category: 'components'
  },
  {
    id: 'windows-install',
    question: 'How do I install Windows on my new PC?',
    answer: 'To install Windows, create a bootable USB drive with the Windows installation media. Insert it into your new PC, boot from the USB, and follow the on-screen instructions to install Windows.',
    category: 'basics'
  },
  {
    id: 'returns',
    question: 'Can I return components if they don\'t work?',
    answer: 'Most online retailers offer a return or exchange policy, typically within 30 days of purchase. Be sure to check the specific return policy of the store you bought your components from.',
    category: 'support'
  },
  {
    id: 'warranty',
    question: 'What is the warranty for PC components?',
    answer: 'Warranty periods vary by manufacturer and component type, but most parts come with a 1 to 3-year warranty. Check the product details on the specific component page for the exact warranty information for each item.',
    category: 'support'
  },
  {
    id: 'compatibility-check',
    question: 'How do I know if the components I choose are compatible?',
    answer: 'Our website provides a compatibility checker tool that can verify if the CPU, GPU, motherboard, and other components are compatible with each other. You can also consult the product specifications for details on compatibility.',
    category: 'basics'
  },
  {
    id: 'ram-difference',
    question: 'What is the difference between DDR4 and DDR5 RAM?',
    answer: 'DDR5 RAM is the latest generation of memory and offers faster speeds and improved bandwidth over DDR4. It\'s ideal for high-performance tasks like gaming and content creation. However, DDR5 is typically more expensive and may not be necessary for basic tasks or budget builds.',
    category: 'components'
  },
  {
    id: 'old-psu',
    question: 'Can I use an older power supply with a new build?',
    answer: 'You can use an older power supply, but make sure it has the required wattage and the necessary cables for your components, especially for newer GPUs. It\'s also important to ensure the PSU is still in good condition, as older PSUs may not be as efficient or reliable.',
    category: 'components'
  },
  {
    id: 'motherboard-sizes',
    question: 'What is the difference between ATX, Micro ATX, and Mini ITX motherboards?',
    answer: 'ATX is the standard size and offers more expansion slots and ports. Micro ATX is smaller but still offers a decent number of expansion slots. Mini ITX is the smallest size, great for compact builds, but has limited expansion options. The choice depends on your space constraints and component needs.',
    category: 'components'
  },
  {
    id: 'thermal-paste',
    question: 'Do I need to buy thermal paste for my CPU cooler?',
    answer: 'Most aftermarket CPU coolers come with thermal paste pre-applied. However, if you\'re using an older cooler or custom cooler, you may need to apply thermal paste yourself. High-quality thermal paste can improve cooling performance.',
    category: 'components'
  },
  {
    id: 'delivery-time',
    question: 'How long will it take to receive my order?',
    answer: 'Delivery times depend on your location, shipping method, and stock availability. Typically, it can take anywhere from 2-7 business days for standard shipping, but expedited shipping options are also available for faster delivery.',
    category: 'support'
  },
  {
    id: 'wrong-order',
    question: 'What if I accidentally order the wrong component?',
    answer: 'If you accidentally order the wrong component, you can return or exchange it within the return policy period. Be sure to check the return policy on the product page, as some items may have specific conditions or restocking fees.',
    category: 'support'
  },
  {
    id: 'gpu-case-size',
    question: 'Do I need a specific case size for my graphics card?',
    answer: 'Yes, some graphics cards are quite large and require more space in the case. Make sure to check the GPU\'s dimensions and compare them with the available space inside your case. Also, check if the case supports the GPU length and if there is enough airflow.',
    category: 'components'
  },
  {
    id: 'prebuilt',
    question: 'Can I buy pre-built PCs on your site, or only individual components?',
    answer: 'We focus on individual components, but you can use our website to build your own custom PC from scratch by selecting compatible parts. If you\'re looking for a pre-built system, we can provide suggestions or help you customize a build according to your needs.',
    category: 'basics'
  }
];

// Helper function to get questions by category
export const getQuestionsByCategory = (category: QAPair['category']) => {
  return defaultQuestions.filter(q => q.category === category);
};

// Helper function to get random questions
export const getRandomQuestions = (count: number) => {
  const shuffled = [...defaultQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};