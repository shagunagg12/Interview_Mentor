import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image';
import { dummyInterviews } from '@/constants';
import InterviewCard from '@/components/InterviewCard';

const Page = () => {
  return (
    <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>Get Interview ready with AI-powered Practice & Feedback</h2>

          <p className='text-lg'>
            Interview Mentor is an AI-powered platform that helps you prepare for interviews by providing personalized practice questions and feedback.
          </p>

          <Button asChild className='btn-primary max-sm:w-full'>
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image src="/robot.png" alt="robot" width={400} height={400} className='max-sm:hidden' />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <div className='interview-section'>
          {dummyInterviews.map((interview) => (
            <InterviewCard key={interview.id} {...interview} />
          ))}
        </div>
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Take an Interview</h2>
        <div>
          {dummyInterviews.map((interview) => (
            <InterviewCard key={interview.id} {...interview} />
          ))}
          {/* <p>You haven't taken any interviews</p> */}
        </div>
      </section>
    </>
  )
}

export default Page
