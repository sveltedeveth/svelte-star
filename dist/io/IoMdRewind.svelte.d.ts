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
export type IoMdRewindProps = typeof __propDef.props;
export type IoMdRewindEvents = typeof __propDef.events;
export type IoMdRewindSlots = typeof __propDef.slots;
export default class IoMdRewind extends SvelteComponentTyped<IoMdRewindProps, IoMdRewindEvents, IoMdRewindSlots> {
}
export {};
