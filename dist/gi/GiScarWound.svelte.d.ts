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
export type GiScarWoundProps = typeof __propDef.props;
export type GiScarWoundEvents = typeof __propDef.events;
export type GiScarWoundSlots = typeof __propDef.slots;
export default class GiScarWound extends SvelteComponentTyped<GiScarWoundProps, GiScarWoundEvents, GiScarWoundSlots> {
}
export {};
