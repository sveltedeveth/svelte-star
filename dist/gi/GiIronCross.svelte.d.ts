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
export type GiIronCrossProps = typeof __propDef.props;
export type GiIronCrossEvents = typeof __propDef.events;
export type GiIronCrossSlots = typeof __propDef.slots;
export default class GiIronCross extends SvelteComponentTyped<GiIronCrossProps, GiIronCrossEvents, GiIronCrossSlots> {
}
export {};
