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
export type MdVolumeOffProps = typeof __propDef.props;
export type MdVolumeOffEvents = typeof __propDef.events;
export type MdVolumeOffSlots = typeof __propDef.slots;
export default class MdVolumeOff extends SvelteComponentTyped<MdVolumeOffProps, MdVolumeOffEvents, MdVolumeOffSlots> {
}
export {};
