"use client";
import Loader from '@/components/Loader';
import MeetingRoom from '@/components/MeetingRoom';
import Meetingsetup from '@/components/meetingsetup';
import { useGetCallById } from '@/hooks/useGetCallByid';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import React, { useState } from 'react';

const Meeting = ({ params: { id } }: { params: { id: string } }) => {
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const { call, isCallLoading } = useGetCallById(id);

  if (isCallLoading) return <Loader />;

  return (
    <main className='h-screen w-full'>
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <Meetingsetup setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;
