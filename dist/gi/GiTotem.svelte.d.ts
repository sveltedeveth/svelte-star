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
export type GiTotemProps = typeof __propDef.props;
export type GiTotemEvents = typeof __propDef.events;
export type GiTotemSlots = typeof __propDef.slots;
export default class GiTotem extends SvelteComponentTyped<GiTotemProps, GiTotemEvents, GiTotemSlots> {
}
export {};
