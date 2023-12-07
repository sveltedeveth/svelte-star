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
export type GiTeslaProps = typeof __propDef.props;
export type GiTeslaEvents = typeof __propDef.events;
export type GiTeslaSlots = typeof __propDef.slots;
export default class GiTesla extends SvelteComponentTyped<GiTeslaProps, GiTeslaEvents, GiTeslaSlots> {
}
export {};
