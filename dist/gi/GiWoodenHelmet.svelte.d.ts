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
export type GiWoodenHelmetProps = typeof __propDef.props;
export type GiWoodenHelmetEvents = typeof __propDef.events;
export type GiWoodenHelmetSlots = typeof __propDef.slots;
export default class GiWoodenHelmet extends SvelteComponentTyped<GiWoodenHelmetProps, GiWoodenHelmetEvents, GiWoodenHelmetSlots> {
}
export {};
