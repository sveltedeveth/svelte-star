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
export type GiHolySymbolProps = typeof __propDef.props;
export type GiHolySymbolEvents = typeof __propDef.events;
export type GiHolySymbolSlots = typeof __propDef.slots;
export default class GiHolySymbol extends SvelteComponentTyped<GiHolySymbolProps, GiHolySymbolEvents, GiHolySymbolSlots> {
}
export {};
