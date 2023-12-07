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
export type GiLogProps = typeof __propDef.props;
export type GiLogEvents = typeof __propDef.events;
export type GiLogSlots = typeof __propDef.slots;
export default class GiLog extends SvelteComponentTyped<GiLogProps, GiLogEvents, GiLogSlots> {
}
export {};
