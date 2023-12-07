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
export type GiThroneKingProps = typeof __propDef.props;
export type GiThroneKingEvents = typeof __propDef.events;
export type GiThroneKingSlots = typeof __propDef.slots;
export default class GiThroneKing extends SvelteComponentTyped<GiThroneKingProps, GiThroneKingEvents, GiThroneKingSlots> {
}
export {};
