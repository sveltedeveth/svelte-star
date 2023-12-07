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
export type GiVenezuelaProps = typeof __propDef.props;
export type GiVenezuelaEvents = typeof __propDef.events;
export type GiVenezuelaSlots = typeof __propDef.slots;
export default class GiVenezuela extends SvelteComponentTyped<GiVenezuelaProps, GiVenezuelaEvents, GiVenezuelaSlots> {
}
export {};
