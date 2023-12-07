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
export type GiAxeSwingProps = typeof __propDef.props;
export type GiAxeSwingEvents = typeof __propDef.events;
export type GiAxeSwingSlots = typeof __propDef.slots;
export default class GiAxeSwing extends SvelteComponentTyped<GiAxeSwingProps, GiAxeSwingEvents, GiAxeSwingSlots> {
}
export {};
