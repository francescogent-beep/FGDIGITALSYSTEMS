// Fix: Added React import to resolve the "Cannot find namespace 'React'" error when using React.ReactNode.
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  path?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline?: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface CaseStudyExample {
  category: string;
  title: string;
  outcome: string;
  metrics: string[];
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}