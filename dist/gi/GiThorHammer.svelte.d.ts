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
export type GiThorHammerProps = typeof __propDef.props;
export type GiThorHammerEvents = typeof __propDef.events;
export type GiThorHammerSlots = typeof __propDef.slots;
export default class GiThorHammer extends SvelteComponentTyped<GiThorHammerProps, GiThorHammerEvents, GiThorHammerSlots> {
}
export {};
