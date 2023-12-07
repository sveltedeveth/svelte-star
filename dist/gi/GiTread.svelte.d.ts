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
export type GiTreadProps = typeof __propDef.props;
export type GiTreadEvents = typeof __propDef.events;
export type GiTreadSlots = typeof __propDef.slots;
export default class GiTread extends SvelteComponentTyped<GiTreadProps, GiTreadEvents, GiTreadSlots> {
}
export {};
