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
export type GiGemNecklaceProps = typeof __propDef.props;
export type GiGemNecklaceEvents = typeof __propDef.events;
export type GiGemNecklaceSlots = typeof __propDef.slots;
export default class GiGemNecklace extends SvelteComponentTyped<GiGemNecklaceProps, GiGemNecklaceEvents, GiGemNecklaceSlots> {
}
export {};
