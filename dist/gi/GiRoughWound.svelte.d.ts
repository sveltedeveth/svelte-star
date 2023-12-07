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
export type GiRoughWoundProps = typeof __propDef.props;
export type GiRoughWoundEvents = typeof __propDef.events;
export type GiRoughWoundSlots = typeof __propDef.slots;
export default class GiRoughWound extends SvelteComponentTyped<GiRoughWoundProps, GiRoughWoundEvents, GiRoughWoundSlots> {
}
export {};
