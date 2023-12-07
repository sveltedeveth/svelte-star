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
export type GiFireWaveProps = typeof __propDef.props;
export type GiFireWaveEvents = typeof __propDef.events;
export type GiFireWaveSlots = typeof __propDef.slots;
export default class GiFireWave extends SvelteComponentTyped<GiFireWaveProps, GiFireWaveEvents, GiFireWaveSlots> {
}
export {};
