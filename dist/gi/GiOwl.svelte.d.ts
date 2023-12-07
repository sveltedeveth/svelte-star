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
export type GiOwlProps = typeof __propDef.props;
export type GiOwlEvents = typeof __propDef.events;
export type GiOwlSlots = typeof __propDef.slots;
export default class GiOwl extends SvelteComponentTyped<GiOwlProps, GiOwlEvents, GiOwlSlots> {
}
export {};
