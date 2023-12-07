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
export type DiAppceleratorProps = typeof __propDef.props;
export type DiAppceleratorEvents = typeof __propDef.events;
export type DiAppceleratorSlots = typeof __propDef.slots;
export default class DiAppcelerator extends SvelteComponentTyped<DiAppceleratorProps, DiAppceleratorEvents, DiAppceleratorSlots> {
}
export {};
