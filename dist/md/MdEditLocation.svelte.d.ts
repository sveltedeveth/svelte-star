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
export type MdEditLocationProps = typeof __propDef.props;
export type MdEditLocationEvents = typeof __propDef.events;
export type MdEditLocationSlots = typeof __propDef.slots;
export default class MdEditLocation extends SvelteComponentTyped<MdEditLocationProps, MdEditLocationEvents, MdEditLocationSlots> {
}
export {};
