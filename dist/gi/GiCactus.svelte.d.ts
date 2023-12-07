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
export type GiCactusProps = typeof __propDef.props;
export type GiCactusEvents = typeof __propDef.events;
export type GiCactusSlots = typeof __propDef.slots;
export default class GiCactus extends SvelteComponentTyped<GiCactusProps, GiCactusEvents, GiCactusSlots> {
}
export {};
