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
export type GiBlunderbussProps = typeof __propDef.props;
export type GiBlunderbussEvents = typeof __propDef.events;
export type GiBlunderbussSlots = typeof __propDef.slots;
export default class GiBlunderbuss extends SvelteComponentTyped<GiBlunderbussProps, GiBlunderbussEvents, GiBlunderbussSlots> {
}
export {};
