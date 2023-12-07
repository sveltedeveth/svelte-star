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
export type GiSoundOnProps = typeof __propDef.props;
export type GiSoundOnEvents = typeof __propDef.events;
export type GiSoundOnSlots = typeof __propDef.slots;
export default class GiSoundOn extends SvelteComponentTyped<GiSoundOnProps, GiSoundOnEvents, GiSoundOnSlots> {
}
export {};
