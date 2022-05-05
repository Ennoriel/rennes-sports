export type SelectablePrimitives = string | number | boolean;

export type SelectableOption = {
	label: SelectablePrimitives;
	value: object | SelectablePrimitives;
};

export type SelectableValue = SelectableOption | SelectablePrimitives;
