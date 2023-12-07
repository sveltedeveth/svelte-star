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
export type GiBrazilProps = typeof __propDef.props;
export type GiBrazilEvents = typeof __propDef.events;
export type GiBrazilSlots = typeof __propDef.slots;
export default class GiBrazil extends SvelteComponentTyped<GiBrazilProps, GiBrazilEvents, GiBrazilSlots> {
}
export {};
