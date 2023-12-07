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
export type GiHorseshoeProps = typeof __propDef.props;
export type GiHorseshoeEvents = typeof __propDef.events;
export type GiHorseshoeSlots = typeof __propDef.slots;
export default class GiHorseshoe extends SvelteComponentTyped<GiHorseshoeProps, GiHorseshoeEvents, GiHorseshoeSlots> {
}
export {};
