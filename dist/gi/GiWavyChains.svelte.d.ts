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
export type GiWavyChainsProps = typeof __propDef.props;
export type GiWavyChainsEvents = typeof __propDef.events;
export type GiWavyChainsSlots = typeof __propDef.slots;
export default class GiWavyChains extends SvelteComponentTyped<GiWavyChainsProps, GiWavyChainsEvents, GiWavyChainsSlots> {
}
export {};
