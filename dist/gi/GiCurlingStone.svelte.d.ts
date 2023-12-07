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
export type GiCurlingStoneProps = typeof __propDef.props;
export type GiCurlingStoneEvents = typeof __propDef.events;
export type GiCurlingStoneSlots = typeof __propDef.slots;
export default class GiCurlingStone extends SvelteComponentTyped<GiCurlingStoneProps, GiCurlingStoneEvents, GiCurlingStoneSlots> {
}
export {};
