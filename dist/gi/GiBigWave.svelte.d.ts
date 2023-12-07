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
export type GiBigWaveProps = typeof __propDef.props;
export type GiBigWaveEvents = typeof __propDef.events;
export type GiBigWaveSlots = typeof __propDef.slots;
export default class GiBigWave extends SvelteComponentTyped<GiBigWaveProps, GiBigWaveEvents, GiBigWaveSlots> {
}
export {};
