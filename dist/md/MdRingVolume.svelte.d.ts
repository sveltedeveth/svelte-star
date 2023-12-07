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
export type MdRingVolumeProps = typeof __propDef.props;
export type MdRingVolumeEvents = typeof __propDef.events;
export type MdRingVolumeSlots = typeof __propDef.slots;
export default class MdRingVolume extends SvelteComponentTyped<MdRingVolumeProps, MdRingVolumeEvents, MdRingVolumeSlots> {
}
export {};
