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
export type GiDreadProps = typeof __propDef.props;
export type GiDreadEvents = typeof __propDef.events;
export type GiDreadSlots = typeof __propDef.slots;
export default class GiDread extends SvelteComponentTyped<GiDreadProps, GiDreadEvents, GiDreadSlots> {
}
export {};
