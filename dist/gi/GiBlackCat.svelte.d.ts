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
export type GiBlackCatProps = typeof __propDef.props;
export type GiBlackCatEvents = typeof __propDef.events;
export type GiBlackCatSlots = typeof __propDef.slots;
export default class GiBlackCat extends SvelteComponentTyped<GiBlackCatProps, GiBlackCatEvents, GiBlackCatSlots> {
}
export {};
