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
export type GiSoundOffProps = typeof __propDef.props;
export type GiSoundOffEvents = typeof __propDef.events;
export type GiSoundOffSlots = typeof __propDef.slots;
export default class GiSoundOff extends SvelteComponentTyped<GiSoundOffProps, GiSoundOffEvents, GiSoundOffSlots> {
}
export {};
