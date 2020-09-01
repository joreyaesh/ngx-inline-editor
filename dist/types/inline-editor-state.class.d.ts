export interface InlineEditorStateOptions {
    value: any;
    editing?: boolean;
    disabled?: boolean;
    empty?: boolean;
}
export declare class InlineEditorState {
    constructor({value, disabled, editing, empty}?: InlineEditorStateOptions);
    empty: boolean;
    value: any;
    disabled: boolean;
    editing: boolean;
    newState(state: InlineEditorState | InlineEditorStateOptions): InlineEditorState;
    getState(): InlineEditorStateOptions;
    clone(): InlineEditorState;
    isEmpty(): boolean;
    isEditing(): boolean;
    isDisabled(): boolean;
}
