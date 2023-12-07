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
export type TiVolumeUpProps = typeof __propDef.props;
export type TiVolumeUpEvents = typeof __propDef.events;
export type TiVolumeUpSlots = typeof __propDef.slots;
export default class TiVolumeUp extends SvelteComponentTyped<TiVolumeUpProps, TiVolumeUpEvents, TiVolumeUpSlots> {
}
export {};
