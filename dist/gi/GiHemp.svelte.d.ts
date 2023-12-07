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
export type GiHempProps = typeof __propDef.props;
export type GiHempEvents = typeof __propDef.events;
export type GiHempSlots = typeof __propDef.slots;
export default class GiHemp extends SvelteComponentTyped<GiHempProps, GiHempEvents, GiHempSlots> {
}
export {};
