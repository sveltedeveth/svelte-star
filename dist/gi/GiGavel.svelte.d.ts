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
export type GiGavelProps = typeof __propDef.props;
export type GiGavelEvents = typeof __propDef.events;
export type GiGavelSlots = typeof __propDef.slots;
export default class GiGavel extends SvelteComponentTyped<GiGavelProps, GiGavelEvents, GiGavelSlots> {
}
export {};
