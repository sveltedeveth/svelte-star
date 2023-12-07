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
export type GiRoyalLoveProps = typeof __propDef.props;
export type GiRoyalLoveEvents = typeof __propDef.events;
export type GiRoyalLoveSlots = typeof __propDef.slots;
export default class GiRoyalLove extends SvelteComponentTyped<GiRoyalLoveProps, GiRoyalLoveEvents, GiRoyalLoveSlots> {
}
export {};
