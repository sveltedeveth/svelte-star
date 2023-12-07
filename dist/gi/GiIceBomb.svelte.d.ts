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
export type GiIceBombProps = typeof __propDef.props;
export type GiIceBombEvents = typeof __propDef.events;
export type GiIceBombSlots = typeof __propDef.slots;
export default class GiIceBomb extends SvelteComponentTyped<GiIceBombProps, GiIceBombEvents, GiIceBombSlots> {
}
export {};
