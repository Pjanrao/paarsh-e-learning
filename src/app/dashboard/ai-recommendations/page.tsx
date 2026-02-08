import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PersonalizedRecommendationsForm } from './PersonalizedRecommendationsForm';

export default function AiRecommendationsPage() {
  return (
    <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Personalized Course Recommendations</CardTitle>
          <CardDescription>
            Let our AI assistant suggest the best courses for you based on your learning history and career goals.
            Fill out the form below to get your personalized recommendations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PersonalizedRecommendationsForm />
        </CardContent>
      </Card>
    </div>
  );
}
