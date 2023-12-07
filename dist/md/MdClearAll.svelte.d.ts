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
export type MdClearAllProps = typeof __propDef.props;
export type MdClearAllEvents = typeof __propDef.events;
export type MdClearAllSlots = typeof __propDef.slots;
export default class MdClearAll extends SvelteComponentTyped<MdClearAllProps, MdClearAllEvents, MdClearAllSlots> {
}
export {};
