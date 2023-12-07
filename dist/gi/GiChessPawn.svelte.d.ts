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
export type GiChessPawnProps = typeof __propDef.props;
export type GiChessPawnEvents = typeof __propDef.events;
export type GiChessPawnSlots = typeof __propDef.slots;
export default class GiChessPawn extends SvelteComponentTyped<GiChessPawnProps, GiChessPawnEvents, GiChessPawnSlots> {
}
export {};
