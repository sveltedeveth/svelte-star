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
export type MdStopScreenShareProps = typeof __propDef.props;
export type MdStopScreenShareEvents = typeof __propDef.events;
export type MdStopScreenShareSlots = typeof __propDef.slots;
export default class MdStopScreenShare extends SvelteComponentTyped<MdStopScreenShareProps, MdStopScreenShareEvents, MdStopScreenShareSlots> {
}
export {};
