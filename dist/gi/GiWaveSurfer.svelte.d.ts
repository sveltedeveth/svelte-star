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
export type GiWaveSurferProps = typeof __propDef.props;
export type GiWaveSurferEvents = typeof __propDef.events;
export type GiWaveSurferSlots = typeof __propDef.slots;
export default class GiWaveSurfer extends SvelteComponentTyped<GiWaveSurferProps, GiWaveSurferEvents, GiWaveSurferSlots> {
}
export {};
