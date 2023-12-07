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
export type MdVolumeDownProps = typeof __propDef.props;
export type MdVolumeDownEvents = typeof __propDef.events;
export type MdVolumeDownSlots = typeof __propDef.slots;
export default class MdVolumeDown extends SvelteComponentTyped<MdVolumeDownProps, MdVolumeDownEvents, MdVolumeDownSlots> {
}
export {};
