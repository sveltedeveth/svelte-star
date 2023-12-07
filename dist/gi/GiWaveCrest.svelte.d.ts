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
export type GiWaveCrestProps = typeof __propDef.props;
export type GiWaveCrestEvents = typeof __propDef.events;
export type GiWaveCrestSlots = typeof __propDef.slots;
export default class GiWaveCrest extends SvelteComponentTyped<GiWaveCrestProps, GiWaveCrestEvents, GiWaveCrestSlots> {
}
export {};
