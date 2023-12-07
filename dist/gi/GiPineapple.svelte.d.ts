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
export type GiPineappleProps = typeof __propDef.props;
export type GiPineappleEvents = typeof __propDef.events;
export type GiPineappleSlots = typeof __propDef.slots;
export default class GiPineapple extends SvelteComponentTyped<GiPineappleProps, GiPineappleEvents, GiPineappleSlots> {
}
export {};
