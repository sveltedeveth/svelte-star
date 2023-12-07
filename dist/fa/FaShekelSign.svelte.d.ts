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
export type FaShekelSignProps = typeof __propDef.props;
export type FaShekelSignEvents = typeof __propDef.events;
export type FaShekelSignSlots = typeof __propDef.slots;
export default class FaShekelSign extends SvelteComponentTyped<FaShekelSignProps, FaShekelSignEvents, FaShekelSignSlots> {
}
export {};
