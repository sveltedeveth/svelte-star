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
export type GiDivergenceProps = typeof __propDef.props;
export type GiDivergenceEvents = typeof __propDef.events;
export type GiDivergenceSlots = typeof __propDef.slots;
export default class GiDivergence extends SvelteComponentTyped<GiDivergenceProps, GiDivergenceEvents, GiDivergenceSlots> {
}
export {};
