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
export type GiLungsProps = typeof __propDef.props;
export type GiLungsEvents = typeof __propDef.events;
export type GiLungsSlots = typeof __propDef.slots;
export default class GiLungs extends SvelteComponentTyped<GiLungsProps, GiLungsEvents, GiLungsSlots> {
}
export {};
