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
export type GiOldKingProps = typeof __propDef.props;
export type GiOldKingEvents = typeof __propDef.events;
export type GiOldKingSlots = typeof __propDef.slots;
export default class GiOldKing extends SvelteComponentTyped<GiOldKingProps, GiOldKingEvents, GiOldKingSlots> {
}
export {};
