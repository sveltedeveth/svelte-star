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
export type GiOilPumpProps = typeof __propDef.props;
export type GiOilPumpEvents = typeof __propDef.events;
export type GiOilPumpSlots = typeof __propDef.slots;
export default class GiOilPump extends SvelteComponentTyped<GiOilPumpProps, GiOilPumpEvents, GiOilPumpSlots> {
}
export {};
