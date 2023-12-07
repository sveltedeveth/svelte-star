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
export type TiCogOutlineProps = typeof __propDef.props;
export type TiCogOutlineEvents = typeof __propDef.events;
export type TiCogOutlineSlots = typeof __propDef.slots;
export default class TiCogOutline extends SvelteComponentTyped<TiCogOutlineProps, TiCogOutlineEvents, TiCogOutlineSlots> {
}
export {};
