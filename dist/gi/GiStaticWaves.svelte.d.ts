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
export type GiStaticWavesProps = typeof __propDef.props;
export type GiStaticWavesEvents = typeof __propDef.events;
export type GiStaticWavesSlots = typeof __propDef.slots;
export default class GiStaticWaves extends SvelteComponentTyped<GiStaticWavesProps, GiStaticWavesEvents, GiStaticWavesSlots> {
}
export {};
