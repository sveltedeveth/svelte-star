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
export type GiPsychicWavesProps = typeof __propDef.props;
export type GiPsychicWavesEvents = typeof __propDef.events;
export type GiPsychicWavesSlots = typeof __propDef.slots;
export default class GiPsychicWaves extends SvelteComponentTyped<GiPsychicWavesProps, GiPsychicWavesEvents, GiPsychicWavesSlots> {
}
export {};
