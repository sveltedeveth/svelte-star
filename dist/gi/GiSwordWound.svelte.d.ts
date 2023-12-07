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
export type GiSwordWoundProps = typeof __propDef.props;
export type GiSwordWoundEvents = typeof __propDef.events;
export type GiSwordWoundSlots = typeof __propDef.slots;
export default class GiSwordWound extends SvelteComponentTyped<GiSwordWoundProps, GiSwordWoundEvents, GiSwordWoundSlots> {
}
export {};
