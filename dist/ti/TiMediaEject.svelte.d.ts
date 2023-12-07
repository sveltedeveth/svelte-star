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
export type TiMediaEjectProps = typeof __propDef.props;
export type TiMediaEjectEvents = typeof __propDef.events;
export type TiMediaEjectSlots = typeof __propDef.slots;
export default class TiMediaEject extends SvelteComponentTyped<TiMediaEjectProps, TiMediaEjectEvents, TiMediaEjectSlots> {
}
export {};
