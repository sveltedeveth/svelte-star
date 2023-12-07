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
export type FaPythonProps = typeof __propDef.props;
export type FaPythonEvents = typeof __propDef.events;
export type FaPythonSlots = typeof __propDef.slots;
export default class FaPython extends SvelteComponentTyped<FaPythonProps, FaPythonEvents, FaPythonSlots> {
}
export {};
