import Button from '../components/Button';

export default {
	title: 'Components/Button',
	component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	color: 'default',
};

export const Primary = Template.bind({});
Primary.args = {
	color: 'primary',
	label: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
	color: 'secondary',
	label: 'Secondary',
};

export const Danger = Template.bind({});
Danger.args = {
	color: 'danger',
	label: 'Danger',
};

export const Outline = Template.bind({});
Outline.args = {
	variant: 'outline',
};

export const Text = Template.bind({});
Text.args = {
	variant: 'text',
};

export const DisabledShadow = Template.bind({});
DisabledShadow.args = {
	color: 'primary',
	disableShadow: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
};

export const DisabledText = Template.bind({});
DisabledText.args = {
	variant: 'text',
	disabled: true,
};

export const StartIcon = Template.bind({});
StartIcon.args = {
	color: 'primary',
	startIcon: 'add_shopping_cart',
};

export const EndIcon = Template.bind({});
EndIcon.args = {
	color: 'primary',
	endIcon: 'add_shopping_cart',
};

export const Small = Template.bind({});
Small.args = {
	color: 'primary',
	size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
	color: 'primary',
	size: 'md',
};

export const Large = Template.bind({});
Large.args = {
	color: 'primary',
	size: 'lg',
};
