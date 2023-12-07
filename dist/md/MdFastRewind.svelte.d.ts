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
export type MdFastRewindProps = typeof __propDef.props;
export type MdFastRewindEvents = typeof __propDef.events;
export type MdFastRewindSlots = typeof __propDef.slots;
export default class MdFastRewind extends SvelteComponentTyped<MdFastRewindProps, MdFastRewindEvents, MdFastRewindSlots> {
}
export {};
