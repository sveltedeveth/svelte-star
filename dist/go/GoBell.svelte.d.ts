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
export type GoBellProps = typeof __propDef.props;
export type GoBellEvents = typeof __propDef.events;
export type GoBellSlots = typeof __propDef.slots;
export default class GoBell extends SvelteComponentTyped<GoBellProps, GoBellEvents, GoBellSlots> {
}
export {};
