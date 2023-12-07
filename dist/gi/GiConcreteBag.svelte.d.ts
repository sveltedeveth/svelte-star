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
export type GiConcreteBagProps = typeof __propDef.props;
export type GiConcreteBagEvents = typeof __propDef.events;
export type GiConcreteBagSlots = typeof __propDef.slots;
export default class GiConcreteBag extends SvelteComponentTyped<GiConcreteBagProps, GiConcreteBagEvents, GiConcreteBagSlots> {
}
export {};
