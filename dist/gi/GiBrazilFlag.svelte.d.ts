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
export type GiBrazilFlagProps = typeof __propDef.props;
export type GiBrazilFlagEvents = typeof __propDef.events;
export type GiBrazilFlagSlots = typeof __propDef.slots;
export default class GiBrazilFlag extends SvelteComponentTyped<GiBrazilFlagProps, GiBrazilFlagEvents, GiBrazilFlagSlots> {
}
export {};
