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
export type TiPowerProps = typeof __propDef.props;
export type TiPowerEvents = typeof __propDef.events;
export type TiPowerSlots = typeof __propDef.slots;
export default class TiPower extends SvelteComponentTyped<TiPowerProps, TiPowerEvents, TiPowerSlots> {
}
export {};
