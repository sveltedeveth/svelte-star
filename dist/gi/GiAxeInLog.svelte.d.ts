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
export type GiAxeInLogProps = typeof __propDef.props;
export type GiAxeInLogEvents = typeof __propDef.events;
export type GiAxeInLogSlots = typeof __propDef.slots;
export default class GiAxeInLog extends SvelteComponentTyped<GiAxeInLogProps, GiAxeInLogEvents, GiAxeInLogSlots> {
}
export {};
