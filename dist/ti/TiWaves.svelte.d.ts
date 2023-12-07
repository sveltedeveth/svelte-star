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
export type TiWavesProps = typeof __propDef.props;
export type TiWavesEvents = typeof __propDef.events;
export type TiWavesSlots = typeof __propDef.slots;
export default class TiWaves extends SvelteComponentTyped<TiWavesProps, TiWavesEvents, TiWavesSlots> {
}
export {};
