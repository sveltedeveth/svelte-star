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
export type GiSwordInStoneProps = typeof __propDef.props;
export type GiSwordInStoneEvents = typeof __propDef.events;
export type GiSwordInStoneSlots = typeof __propDef.slots;
export default class GiSwordInStone extends SvelteComponentTyped<GiSwordInStoneProps, GiSwordInStoneEvents, GiSwordInStoneSlots> {
}
export {};
