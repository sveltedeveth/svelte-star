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
export type GiBroadswordProps = typeof __propDef.props;
export type GiBroadswordEvents = typeof __propDef.events;
export type GiBroadswordSlots = typeof __propDef.slots;
export default class GiBroadsword extends SvelteComponentTyped<GiBroadswordProps, GiBroadswordEvents, GiBroadswordSlots> {
}
export {};
