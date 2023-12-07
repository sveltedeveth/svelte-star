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
export type GiZeusSwordProps = typeof __propDef.props;
export type GiZeusSwordEvents = typeof __propDef.events;
export type GiZeusSwordSlots = typeof __propDef.slots;
export default class GiZeusSword extends SvelteComponentTyped<GiZeusSwordProps, GiZeusSwordEvents, GiZeusSwordSlots> {
}
export {};
