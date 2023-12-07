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
export type GiTrumpetFlagProps = typeof __propDef.props;
export type GiTrumpetFlagEvents = typeof __propDef.events;
export type GiTrumpetFlagSlots = typeof __propDef.slots;
export default class GiTrumpetFlag extends SvelteComponentTyped<GiTrumpetFlagProps, GiTrumpetFlagEvents, GiTrumpetFlagSlots> {
}
export {};
