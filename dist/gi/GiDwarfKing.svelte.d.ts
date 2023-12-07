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
export type GiDwarfKingProps = typeof __propDef.props;
export type GiDwarfKingEvents = typeof __propDef.events;
export type GiDwarfKingSlots = typeof __propDef.slots;
export default class GiDwarfKing extends SvelteComponentTyped<GiDwarfKingProps, GiDwarfKingEvents, GiDwarfKingSlots> {
}
export {};
