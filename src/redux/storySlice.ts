import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Journey {
  id: string;
  title: string;
  date: string;
  location: string;
  imageUrl: any;
  tags: string[];
  description?: string;
}

interface StoryState {
  journeys: Journey[];
}

const initialState: StoryState = {
  journeys: [
    {
      id: '1',
      title: 'Himalayan Echoes',
      date: 'Oct 12 - Oct 20',
      location: 'Himachal, India',
      imageUrl: require('../assets/images/Himachal.png'),
      tags: ['Culture', 'Serene'],
    },
    {
      id: '2',
      title: 'The Divine Rishikesh',
      date: 'Dec 05 - Dec 14',
      location: 'Uttarakhand, India',
      imageUrl: require('../assets/images/uttarakhand.png'),
      tags: ['Nature', 'Cold'],
    },
    {
      id: '3',
      title: 'Golden Sands',
      date: 'Feb 10 - Feb 18',
      location: 'Rajasthan, India',
      imageUrl: require('../assets/images/rajastan.png'),
      tags: ['Desert', 'Warm'],
    },
  ],
};

const storySlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {
    addJourney: (state, action: PayloadAction<Journey>) => {
      state.journeys.unshift(action.payload);
    },
    removeJourney: (state, action: PayloadAction<string>) => {
      state.journeys = state.journeys.filter(j => j.id !== action.payload);
    },
  },
});

export const { addJourney, removeJourney } = storySlice.actions;
export default storySlice.reducer;
