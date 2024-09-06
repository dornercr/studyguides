const renderContent = (content, mediaUrl) => {
    // New function to format code blocks
    const formatCode = (code) => {
        return `<pre class="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto my-2"><code>${code}</code></pre>`;
    };

    // Split content into parts, separating code blocks
    const parts = content.split('```');
    let formattedContent = parts.map((part, index) => {
        if (index % 2 === 1) {
            // This is a code block
            return formatCode(part.trim());
        } else {
            // This is regular text
            return `<p class="whitespace-pre-wrap font-sans text-sm mb-4">${part}</p>`;
        }
    }).join('');

    let htmlContent = formattedContent;

    if (mediaUrl) {
        // Match video URLs (e.g., YouTube)
        const videoRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|v\/|watch\?v=)|youtu\.be\/)([\w\-]+)/i;
        // Match image file extensions
        const imageRegex = /\.(jpeg|jpg|gif|png)$/i;
        // Match local image paths (assuming they're in src/images/)
        const localImageRegex = /^src\/images\//i;

        if (videoRegex.test(mediaUrl)) {
            const videoId = mediaUrl.match(videoRegex)[1];
            htmlContent += `
                <div class="mt-4">
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/${videoId}"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            `;
        } else if (imageRegex.test(mediaUrl) || localImageRegex.test(mediaUrl)) {
            htmlContent += `
                <div class="mt-4">
                    <img src="${mediaUrl}" alt="Content illustration" class="max-w-full h-auto rounded-lg shadow-md" />
                </div>
            `;
        } else {
            htmlContent += `
                <div class="mt-4">
                    <a href="${mediaUrl}" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">
                        View associated media
                    </a>
                </div>
            `;
        }
    }

    return htmlContent;
};

const StudyGuide = () => {
    const [currentTopic, setCurrentTopic] = React.useState('machineLearning');
    const [expandedSections, setExpandedSections] = React.useState({});

    const toggleSection = (index) => {
        setExpandedSections(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    // Check if the current topic is valid
    const topic = topics[currentTopic];
    if (!topic) {
        return <div>Error: Selected topic not found.</div>;
    }

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
                    <h2 className="text-2xl font-semibold mb-4">{topic.title}</h2>
                    <div className="space-y-4">
                        {topic.sections.map((section, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg">
                                <button
                                    onClick={() => toggleSection(index)}
                                    className="flex justify-between items-center w-full p-4 text-left font-semibold bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                                >
                                    {section.title}
                                    <span>{expandedSections[index] ? '▲' : '▼'}</span>
                                </button>
                                {expandedSections[index] && (
                                    <div className="p-4 bg-white">
                                        <div dangerouslySetInnerHTML={{ __html: renderContent(section.content, section.mediaUrl) }} />
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