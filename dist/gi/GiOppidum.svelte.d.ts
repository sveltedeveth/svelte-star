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
export type GiOppidumProps = typeof __propDef.props;
export type GiOppidumEvents = typeof __propDef.events;
export type GiOppidumSlots = typeof __propDef.slots;
export default class GiOppidum extends SvelteComponentTyped<GiOppidumProps, GiOppidumEvents, GiOppidumSlots> {
}
export {};
