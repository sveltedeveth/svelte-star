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
export type FaVolumeDownProps = typeof __propDef.props;
export type FaVolumeDownEvents = typeof __propDef.events;
export type FaVolumeDownSlots = typeof __propDef.slots;
export default class FaVolumeDown extends SvelteComponentTyped<FaVolumeDownProps, FaVolumeDownEvents, FaVolumeDownSlots> {
}
export {};
