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
export type GiSplurtProps = typeof __propDef.props;
export type GiSplurtEvents = typeof __propDef.events;
export type GiSplurtSlots = typeof __propDef.slots;
export default class GiSplurt extends SvelteComponentTyped<GiSplurtProps, GiSplurtEvents, GiSplurtSlots> {
}
export {};
