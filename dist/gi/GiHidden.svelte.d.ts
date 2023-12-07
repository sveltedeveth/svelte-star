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
export type GiHiddenProps = typeof __propDef.props;
export type GiHiddenEvents = typeof __propDef.events;
export type GiHiddenSlots = typeof __propDef.slots;
export default class GiHidden extends SvelteComponentTyped<GiHiddenProps, GiHiddenEvents, GiHiddenSlots> {
}
export {};
