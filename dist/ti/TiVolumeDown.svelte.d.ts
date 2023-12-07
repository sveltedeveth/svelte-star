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
export type TiVolumeDownProps = typeof __propDef.props;
export type TiVolumeDownEvents = typeof __propDef.events;
export type TiVolumeDownSlots = typeof __propDef.slots;
export default class TiVolumeDown extends SvelteComponentTyped<TiVolumeDownProps, TiVolumeDownEvents, TiVolumeDownSlots> {
}
export {};
