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
export type GiPumpkinProps = typeof __propDef.props;
export type GiPumpkinEvents = typeof __propDef.events;
export type GiPumpkinSlots = typeof __propDef.slots;
export default class GiPumpkin extends SvelteComponentTyped<GiPumpkinProps, GiPumpkinEvents, GiPumpkinSlots> {
}
export {};
