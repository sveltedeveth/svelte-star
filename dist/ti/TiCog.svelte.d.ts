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
export type TiCogProps = typeof __propDef.props;
export type TiCogEvents = typeof __propDef.events;
export type TiCogSlots = typeof __propDef.slots;
export default class TiCog extends SvelteComponentTyped<TiCogProps, TiCogEvents, TiCogSlots> {
}
export {};
