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
export type GiHealthIncreaseProps = typeof __propDef.props;
export type GiHealthIncreaseEvents = typeof __propDef.events;
export type GiHealthIncreaseSlots = typeof __propDef.slots;
export default class GiHealthIncrease extends SvelteComponentTyped<GiHealthIncreaseProps, GiHealthIncreaseEvents, GiHealthIncreaseSlots> {
}
export {};
