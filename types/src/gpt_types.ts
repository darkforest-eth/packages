import type { ArtifactRarity, ArtifactType } from './artifact';

/**
 * @hidden
 */
export interface ConversationArtifact {
  type: ArtifactType;
  name: string;
  rarity: ArtifactRarity;
}

/**
 * @hidden
 */
export type Entity = 'AI' | 'Adventurer';

/**
 * @hidden
 */
export interface Highlight {
  start: number;
  stop: number;
  entry: EncyclopediaEntry;
}

/**
 * @hidden
 */
export interface Message {
  entity: Entity;
  message: string;
  highlights: Highlight[];
}

/**
 * @hidden
 */
export interface Conversation {
  artifact: ConversationArtifact;
  username: string;
  messages: Message[];
  randomState: number[];
  questionsAllowed: number;
  exampleQuestions: string[];
  ended: boolean;
}

/**
 * @hidden
 */
//eslint-disable-next-line @projectsophon/typescript-enum/no-enum
export const enum EncyclopediaEntityType {
  ENTITY = 'ENTITY',
  LOCATION = 'LOCATION',
  ARTIFACT = 'ARTIFACT', // This actually means any object, not only "our" artifacts.
  EVENT = 'EVENT',
  CONCEPT = 'CONCEPT',
  OTHER = 'OTHER',
}

/**
 * @hidden
 */
export interface EncyclopediaEntry {
  name: string;
  definition: string;
  entityType: EncyclopediaEntityType;
}

/**
 * @hidden
 */
export interface ArtifactConversationsState {
  conversations: Conversation[];
}

/**
 * @hidden
 */
export interface QuestionGenerationExample {
  message: string;
  questions: string[];
}

/**
 * @hidden
 */
export interface DescriptionPrompt {
  artifactName: string;
  description: string;
  artifactType: ArtifactType;
  generatedDescription: string;
}

/**
 * @hidden
 */
export interface ExampleMessage {
  entity: Entity;
  message: string;
}

/**
 * @hidden
 */
export interface ConversationExample {
  artifactName: string;
  description: string;
  questionsAllowed: number;
  messages: ExampleMessage[];
}

/**
 * @hidden
 */
export type QuestionGenerationExamples = QuestionGenerationExample[];

/**
 * @hidden
 */
export type DescriptionExamples = DescriptionPrompt[];

/**
 * @hidden
 */
export type ConversationExamples = ConversationExample[];

/**
 * @hidden
 */
export type EncyclopediaEntries = EncyclopediaEntry[];

/**
 * @hidden
 */
export interface CanonStory {
  stories: string[];
}

/**
 * @hidden
 */
export interface DescriptionPromptFacts {
  decriptionPromptFacts: string[];
}
