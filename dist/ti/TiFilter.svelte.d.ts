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
export type TiFilterProps = typeof __propDef.props;
export type TiFilterEvents = typeof __propDef.events;
export type TiFilterSlots = typeof __propDef.slots;
export default class TiFilter extends SvelteComponentTyped<TiFilterProps, TiFilterEvents, TiFilterSlots> {
}
export {};
