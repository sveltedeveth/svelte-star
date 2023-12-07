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
export type MdVolumeUpProps = typeof __propDef.props;
export type MdVolumeUpEvents = typeof __propDef.events;
export type MdVolumeUpSlots = typeof __propDef.slots;
export default class MdVolumeUp extends SvelteComponentTyped<MdVolumeUpProps, MdVolumeUpEvents, MdVolumeUpSlots> {
}
export {};
