export interface PromptElement {
    type: 'checkbox' | 'text' | 'radio';
    label: string;
    value: boolean | string;
}

export interface PromptTechnique {
    type: 'few-shot' | 'chain-of-thought' | 'role-assignment';
    details?: string;
}

export interface PromptContext {
    background?: string;
    examples?: string;
    role?: string;
}

export interface PromptAnalysis {
    strengths: string[];
    weaknesses: string[];
    suggestions: string[];
    improvedPrompt?: string;
}

export interface PromptMetadata {
    id: string;
    title: string;
    description?: string;
    category: 'creative' | 'code' | 'business' | 'education' | 'other';
    createdAt: string;
    updatedAt: string;
    author?: string;
    isAnonymous: boolean;
    isPublic: boolean;
}

export interface Prompt {
    metadata: PromptMetadata;
    goal: string;
    task: string;
    elements: PromptElement[];
    technique?: PromptTechnique;
    context?: PromptContext;
    analysis?: PromptAnalysis;
    finalPrompt: string;
    version: number;
}

export interface PromptURL {
    promptId: string;
    version: number;
    title: string;
    description?: string;
    category: 'creative' | 'code' | 'business' | 'education' | 'other';
    isAnonymous: boolean;
    isPublic: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface SharedPrompt extends Prompt {
    url: string;
    shareId: string;
}

// Example usage:
/*
const examplePrompt: Prompt = {
    metadata: {
        id: 'prompt-123',
        title: 'Science Fiction Story Generator',
        description: 'Generate a creative science fiction story about first contact',
        category: 'creative',
        createdAt: '2024-03-20T10:00:00Z',
        updatedAt: '2024-03-20T10:00:00Z',
        author: 'user123',
        isAnonymous: false,
        isPublic: true
    },
    goal: 'Generate a creative story',
    task: 'Write a 500-word science fiction story set in 2150 about humanity\'s first contact with an alien civilization.',
    elements: [
        { type: 'checkbox', label: 'Clear instructions', value: true },
        { type: 'checkbox', label: 'Specific constraints', value: true },
        { type: 'checkbox', label: 'Desired format', value: true },
        { type: 'checkbox', label: 'Tone/style guidance', value: true },
        { type: 'checkbox', label: 'Length requirements', value: true }
    ],
    technique: {
        type: 'few-shot',
        details: 'Include example story structure and character development'
    },
    context: {
        background: 'Story should have a hopeful tone and include themes of cooperation',
        examples: 'Example structure provided in the prompt',
        role: 'Expert science fiction writer'
    },
    analysis: {
        strengths: ['Clear goal', 'Specific constraints', 'Good context'],
        weaknesses: ['Could add more character details', 'Need more specific tone guidance'],
        suggestions: ['Add character profiles', 'Specify tone more precisely'],
        improvedPrompt: 'Write a 500-word science fiction story...'
    },
    finalPrompt: 'Write a 500-word science fiction story set in 2150...',
    version: 1
};
*/ 