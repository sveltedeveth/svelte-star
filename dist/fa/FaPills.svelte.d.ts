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
export type FaPillsProps = typeof __propDef.props;
export type FaPillsEvents = typeof __propDef.events;
export type FaPillsSlots = typeof __propDef.slots;
export default class FaPills extends SvelteComponentTyped<FaPillsProps, FaPillsEvents, FaPillsSlots> {
}
export {};
