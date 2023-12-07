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
export type MdScreenShareProps = typeof __propDef.props;
export type MdScreenShareEvents = typeof __propDef.events;
export type MdScreenShareSlots = typeof __propDef.slots;
export default class MdScreenShare extends SvelteComponentTyped<MdScreenShareProps, MdScreenShareEvents, MdScreenShareSlots> {
}
export {};
