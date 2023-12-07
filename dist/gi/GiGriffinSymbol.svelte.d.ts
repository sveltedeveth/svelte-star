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
export type GiGriffinSymbolProps = typeof __propDef.props;
export type GiGriffinSymbolEvents = typeof __propDef.events;
export type GiGriffinSymbolSlots = typeof __propDef.slots;
export default class GiGriffinSymbol extends SvelteComponentTyped<GiGriffinSymbolProps, GiGriffinSymbolEvents, GiGriffinSymbolSlots> {
}
export {};
