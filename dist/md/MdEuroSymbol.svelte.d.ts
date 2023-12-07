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
export type MdEuroSymbolProps = typeof __propDef.props;
export type MdEuroSymbolEvents = typeof __propDef.events;
export type MdEuroSymbolSlots = typeof __propDef.slots;
export default class MdEuroSymbol extends SvelteComponentTyped<MdEuroSymbolProps, MdEuroSymbolEvents, MdEuroSymbolSlots> {
}
export {};
