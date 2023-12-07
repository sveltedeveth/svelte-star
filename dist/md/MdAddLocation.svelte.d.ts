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
export type MdAddLocationProps = typeof __propDef.props;
export type MdAddLocationEvents = typeof __propDef.events;
export type MdAddLocationSlots = typeof __propDef.slots;
export default class MdAddLocation extends SvelteComponentTyped<MdAddLocationProps, MdAddLocationEvents, MdAddLocationSlots> {
}
export {};
