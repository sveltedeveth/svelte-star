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
export type GiSoundWavesProps = typeof __propDef.props;
export type GiSoundWavesEvents = typeof __propDef.events;
export type GiSoundWavesSlots = typeof __propDef.slots;
export default class GiSoundWaves extends SvelteComponentTyped<GiSoundWavesProps, GiSoundWavesEvents, GiSoundWavesSlots> {
}
export {};
