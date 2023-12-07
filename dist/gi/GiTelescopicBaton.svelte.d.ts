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
export type GiTelescopicBatonProps = typeof __propDef.props;
export type GiTelescopicBatonEvents = typeof __propDef.events;
export type GiTelescopicBatonSlots = typeof __propDef.slots;
export default class GiTelescopicBaton extends SvelteComponentTyped<GiTelescopicBatonProps, GiTelescopicBatonEvents, GiTelescopicBatonSlots> {
}
export {};
