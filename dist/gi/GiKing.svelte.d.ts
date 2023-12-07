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
export type GiKingProps = typeof __propDef.props;
export type GiKingEvents = typeof __propDef.events;
export type GiKingSlots = typeof __propDef.slots;
export default class GiKing extends SvelteComponentTyped<GiKingProps, GiKingEvents, GiKingSlots> {
}
export {};
