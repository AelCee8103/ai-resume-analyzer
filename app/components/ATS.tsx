import React from 'react';

interface Suggestion {
    type: 'good' | 'improve';
    tip: string;
}

interface ATSProps {
    score: number;
    suggestions: Suggestion[];
}

const ATS: React.FC<ATSProps> = ({ score, suggestions }) => {
    const getBgGradient = () => {
        if (score > 69) return 'from-green-100';
        if (score > 49) return 'from-yellow-100';
        return 'from-red-100';
    };

    const getMainIcon = () => {
        if (score > 69) return '/icons/ats-good.svg';
        if (score > 49) return '/icons/ats-warning.svg';
        return '/icons/ats-bad.svg';
    };

    return (
        <div className={`rounded-2xl p-6 bg-gradient-to-br ${getBgGradient()} to-white shadow-sm border border-gray-100`}>
            {/* Top Section */}
            <div className="flex items-center gap-4 mb-6">
                <img src={getMainIcon()} alt="ATS Score Icon" className="w-12 h-12" />
                <h2 className="text-xl font-bold text-gray-800">
                    ATS Score - {score}/100
                </h2>
            </div>

            {/* Description Section */}
            <div className="space-y-4">
                <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-1">ATS Optimization</h3>
                    <p className="text-gray-500 text-sm">
                        Applicant Tracking Systems (ATS) scan your resume for keywords and formatting. 
                        A higher score indicates better readability for these systems.
                    </p>
                </div>

                {/* Suggestions List */}
                <ul className="space-y-3">
                    {suggestions.map((suggestion, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <img 
                                src={suggestion.type === 'good' ? '/icons/check.svg' : '/icons/warning.svg'} 
                                alt={suggestion.type} 
                                className="w-5 h-5 mt-0.5"
                            />
                            <span className="text-gray-700 text-sm">{suggestion.tip}</span>
                        </li>
                    ))}
                </ul>

                <p className="text-gray-600 text-sm font-medium pt-2 italic">
                    Focus on the improvement areas to boost your chances of getting past the initial screening!
                </p>
            </div>
        </div>
    );
};

export default ATS;
