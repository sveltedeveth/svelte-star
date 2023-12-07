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
export type GiDropletsProps = typeof __propDef.props;
export type GiDropletsEvents = typeof __propDef.events;
export type GiDropletsSlots = typeof __propDef.slots;
export default class GiDroplets extends SvelteComponentTyped<GiDropletsProps, GiDropletsEvents, GiDropletsSlots> {
}
export {};
