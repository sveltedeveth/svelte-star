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
export type GiMeepleKingProps = typeof __propDef.props;
export type GiMeepleKingEvents = typeof __propDef.events;
export type GiMeepleKingSlots = typeof __propDef.slots;
export default class GiMeepleKing extends SvelteComponentTyped<GiMeepleKingProps, GiMeepleKingEvents, GiMeepleKingSlots> {
}
export {};
