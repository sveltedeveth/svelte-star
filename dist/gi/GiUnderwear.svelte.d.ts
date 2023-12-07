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
export type GiUnderwearProps = typeof __propDef.props;
export type GiUnderwearEvents = typeof __propDef.events;
export type GiUnderwearSlots = typeof __propDef.slots;
export default class GiUnderwear extends SvelteComponentTyped<GiUnderwearProps, GiUnderwearEvents, GiUnderwearSlots> {
}
export {};
