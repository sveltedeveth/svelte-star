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
export type GiIglooProps = typeof __propDef.props;
export type GiIglooEvents = typeof __propDef.events;
export type GiIglooSlots = typeof __propDef.slots;
export default class GiIgloo extends SvelteComponentTyped<GiIglooProps, GiIglooEvents, GiIglooSlots> {
}
export {};
