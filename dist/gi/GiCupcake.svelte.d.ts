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
export type GiCupcakeProps = typeof __propDef.props;
export type GiCupcakeEvents = typeof __propDef.events;
export type GiCupcakeSlots = typeof __propDef.slots;
export default class GiCupcake extends SvelteComponentTyped<GiCupcakeProps, GiCupcakeEvents, GiCupcakeSlots> {
}
export {};
