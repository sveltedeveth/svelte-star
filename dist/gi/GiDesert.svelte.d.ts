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
export type GiDesertProps = typeof __propDef.props;
export type GiDesertEvents = typeof __propDef.events;
export type GiDesertSlots = typeof __propDef.slots;
export default class GiDesert extends SvelteComponentTyped<GiDesertProps, GiDesertEvents, GiDesertSlots> {
}
export {};
