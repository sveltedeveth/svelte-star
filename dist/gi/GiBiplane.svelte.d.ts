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
export type GiBiplaneProps = typeof __propDef.props;
export type GiBiplaneEvents = typeof __propDef.events;
export type GiBiplaneSlots = typeof __propDef.slots;
export default class GiBiplane extends SvelteComponentTyped<GiBiplaneProps, GiBiplaneEvents, GiBiplaneSlots> {
}
export {};
