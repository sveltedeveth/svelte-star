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
export type GiFeatherWoundProps = typeof __propDef.props;
export type GiFeatherWoundEvents = typeof __propDef.events;
export type GiFeatherWoundSlots = typeof __propDef.slots;
export default class GiFeatherWound extends SvelteComponentTyped<GiFeatherWoundProps, GiFeatherWoundEvents, GiFeatherWoundSlots> {
}
export {};
