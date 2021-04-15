import {LayoutProps} from '../layout';
import {
  IntroductionSectionProps,
  InteractiveDemoSectionProps,
  AnatomySectionProps,
  OptionsSectionProps,
  StatesSectionProps,
  BehaviorsSectionProps,
  UsageSectionProps,
  AccessibilitySectionProps,
  SEOSectionProps,
  ComponentAPISectionProps,
  ComplianceSectionProps,
  RelatedComponentsSectionProps,
  OnwardJourneySectionProps,
} from './sections/types';

export interface ComponentPageTemplateProps extends IntroductionSectionProps {
  layoutProps: LayoutProps;
  componentDefaultsKey: string;
  interactiveDemo?: InteractiveDemoSectionProps;
  anatomy?: AnatomySectionProps;
  options?: OptionsSectionProps;
  states?: StatesSectionProps;
  behaviors?: BehaviorsSectionProps;
  usage?: UsageSectionProps;
  accessibility?: AccessibilitySectionProps;
  seo?: SEOSectionProps;
  componentAPI?: ComponentAPISectionProps;
  compliance?: ComplianceSectionProps;
  related?: RelatedComponentsSectionProps;
  featureCard?: OnwardJourneySectionProps;
}
