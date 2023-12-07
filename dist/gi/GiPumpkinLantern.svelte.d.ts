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
export type GiPumpkinLanternProps = typeof __propDef.props;
export type GiPumpkinLanternEvents = typeof __propDef.events;
export type GiPumpkinLanternSlots = typeof __propDef.slots;
export default class GiPumpkinLantern extends SvelteComponentTyped<GiPumpkinLanternProps, GiPumpkinLanternEvents, GiPumpkinLanternSlots> {
}
export {};
