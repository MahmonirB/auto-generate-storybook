
// stories.tsx
import { Button, ButtonProps } from './Button';

export default {
    title: 'Button',
    component: Button,
};

export const Primary = (args: ButtonProps) => <Button {...args} />;
Primary.args = {
    label: 'Click Me',
    type: 'primary',
    onClick: () => alert('clicked'),
};

export const Secondary = (args: ButtonProps) => <Button {...args} />;
Secondary.args = {
    label: 'Click Me',
    type: 'secondary',
    onClick: () => alert('clicked'),
};