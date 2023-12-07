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
export type TiVolumeProps = typeof __propDef.props;
export type TiVolumeEvents = typeof __propDef.events;
export type TiVolumeSlots = typeof __propDef.slots;
export default class TiVolume extends SvelteComponentTyped<TiVolumeProps, TiVolumeEvents, TiVolumeSlots> {
}
export {};
