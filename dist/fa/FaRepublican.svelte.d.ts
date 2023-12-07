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
export type FaRepublicanProps = typeof __propDef.props;
export type FaRepublicanEvents = typeof __propDef.events;
export type FaRepublicanSlots = typeof __propDef.slots;
export default class FaRepublican extends SvelteComponentTyped<FaRepublicanProps, FaRepublicanEvents, FaRepublicanSlots> {
}
export {};
