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
export type GiHoundProps = typeof __propDef.props;
export type GiHoundEvents = typeof __propDef.events;
export type GiHoundSlots = typeof __propDef.slots;
export default class GiHound extends SvelteComponentTyped<GiHoundProps, GiHoundEvents, GiHoundSlots> {
}
export {};
