import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DiPythonProps = typeof __propDef.props;
export type DiPythonEvents = typeof __propDef.events;
export type DiPythonSlots = typeof __propDef.slots;
export default class DiPython extends SvelteComponentTyped<DiPythonProps, DiPythonEvents, DiPythonSlots> {
}
export {};
