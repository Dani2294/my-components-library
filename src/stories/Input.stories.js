import Input from '../components/Input';

export default {
	title: 'Components/Input',
	component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Error = Template.bind({});
Error.args = {
	error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
};

export const HelperText = Template.bind({});
HelperText.args = {
	helperText: 'Some interesting text',
};

export const StartIcon = Template.bind({});
StartIcon.args = {
	startIcon: 'call',
};

export const EndIcon = Template.bind({});
EndIcon.args = {
	endIcon: 'lock',
};

export const Value = Template.bind({});
Value.args = {
	value: 'Text',
};

export const Small = Template.bind({});
Small.args = {
	size: 'sm',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
	fullWidth: true,
};

export const Multiline = Template.bind({});
Multiline.args = {
	multiline: true,
	row: '4',
};
