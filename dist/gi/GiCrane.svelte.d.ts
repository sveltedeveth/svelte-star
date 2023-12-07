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
export type GiCraneProps = typeof __propDef.props;
export type GiCraneEvents = typeof __propDef.events;
export type GiCraneSlots = typeof __propDef.slots;
export default class GiCrane extends SvelteComponentTyped<GiCraneProps, GiCraneEvents, GiCraneSlots> {
}
export {};
