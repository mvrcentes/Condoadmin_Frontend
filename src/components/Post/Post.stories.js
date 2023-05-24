import { Post } from './Post';


export default {
  title: 'Example/Post',
  component: Post,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};


export const Primary = {
  args: {
    primary: true,
    label: 'Post',
  },
};
