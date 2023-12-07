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
export type MdPolymerProps = typeof __propDef.props;
export type MdPolymerEvents = typeof __propDef.events;
export type MdPolymerSlots = typeof __propDef.slots;
export default class MdPolymer extends SvelteComponentTyped<MdPolymerProps, MdPolymerEvents, MdPolymerSlots> {
}
export {};
