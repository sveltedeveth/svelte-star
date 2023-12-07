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
export type GiSaloonProps = typeof __propDef.props;
export type GiSaloonEvents = typeof __propDef.events;
export type GiSaloonSlots = typeof __propDef.slots;
export default class GiSaloon extends SvelteComponentTyped<GiSaloonProps, GiSaloonEvents, GiSaloonSlots> {
}
export {};
