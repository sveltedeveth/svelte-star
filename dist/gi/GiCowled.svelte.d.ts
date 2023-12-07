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
export type GiCowledProps = typeof __propDef.props;
export type GiCowledEvents = typeof __propDef.events;
export type GiCowledSlots = typeof __propDef.slots;
export default class GiCowled extends SvelteComponentTyped<GiCowledProps, GiCowledEvents, GiCowledSlots> {
}
export {};
