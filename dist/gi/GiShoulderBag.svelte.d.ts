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
export type GiShoulderBagProps = typeof __propDef.props;
export type GiShoulderBagEvents = typeof __propDef.events;
export type GiShoulderBagSlots = typeof __propDef.slots;
export default class GiShoulderBag extends SvelteComponentTyped<GiShoulderBagProps, GiShoulderBagEvents, GiShoulderBagSlots> {
}
export {};
