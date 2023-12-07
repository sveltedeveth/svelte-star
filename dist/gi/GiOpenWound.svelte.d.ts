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
export type GiOpenWoundProps = typeof __propDef.props;
export type GiOpenWoundEvents = typeof __propDef.events;
export type GiOpenWoundSlots = typeof __propDef.slots;
export default class GiOpenWound extends SvelteComponentTyped<GiOpenWoundProps, GiOpenWoundEvents, GiOpenWoundSlots> {
}
export {};
