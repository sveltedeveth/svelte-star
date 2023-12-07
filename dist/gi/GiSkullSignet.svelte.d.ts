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
export type GiSkullSignetProps = typeof __propDef.props;
export type GiSkullSignetEvents = typeof __propDef.events;
export type GiSkullSignetSlots = typeof __propDef.slots;
export default class GiSkullSignet extends SvelteComponentTyped<GiSkullSignetProps, GiSkullSignetEvents, GiSkullSignetSlots> {
}
export {};
