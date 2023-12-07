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
export type GiWellProps = typeof __propDef.props;
export type GiWellEvents = typeof __propDef.events;
export type GiWellSlots = typeof __propDef.slots;
export default class GiWell extends SvelteComponentTyped<GiWellProps, GiWellEvents, GiWellSlots> {
}
export {};
