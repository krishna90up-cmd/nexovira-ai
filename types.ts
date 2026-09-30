export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface WhyUsItem {
  icon: string;
  title: string;
  description: string;
}

export interface IndustryItem {
  icon: string;
  label: string;
}