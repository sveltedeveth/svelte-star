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
export type GiWeightProps = typeof __propDef.props;
export type GiWeightEvents = typeof __propDef.events;
export type GiWeightSlots = typeof __propDef.slots;
export default class GiWeight extends SvelteComponentTyped<GiWeightProps, GiWeightEvents, GiWeightSlots> {
}
export {};
