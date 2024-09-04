const StudyGuide = () => {
    const [currentTopic, setCurrentTopic] = React.useState('algorithms');
    const [expandedSections, setExpandedSections] = React.useState({});

    const toggleSection = (index) => {
        setExpandedSections(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Study Guide</h1>
                    <div className="mb-6">
                        <select
                            value={currentTopic}
                            onChange={(e) => setCurrentTopic(e.target.value)}
                            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {Object.entries(topics).map(([key, { title }]) => (
                                <option key={key} value={key}>{title}</option>
                            ))}
                        </select>
                    </div>
                    <h2 className="text-2xl font-semibold mb-4">{topics[currentTopic].title}</h2>
                    <div className="space-y-4">
                        {topics[currentTopic].sections.map((section, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg">
                                <button
                                    onClick={() => toggleSection(index)}
                                    className="flex justify-between items-center w-full p-4 text-left font-semibold bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                                >
                                    {section.title}
                                    {expandedSections[index] ? '▲' : '▼'}
                                </button>
                                {expandedSections[index] && (
                                    <div className="p-4 bg-white">
                                        <p>{section.content}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<StudyGuide />, document.getElementById('root'));